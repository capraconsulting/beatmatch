var express = require('express');
var cors = require('cors');
var router = express.Router();
var Spotify = require('node-spotify-api');
var config = require('../config.js');
// var async = require('async');
var spotify = new Spotify({
  id: config.spotify.client_id,
  secret: config.spotify.secret
});

router.use(cors({
  origin: '*'
}));

const TRACK_LIMIT = 100

const getTracks = async (playlistId, offset) => {
  const res = await spotify.request(`${config.spotify.baseUrl}/playlists/${playlistId}/tracks?offset=${offset}`)
  const tracks = res.items.filter(t => !t.track.is_local).map(t => ({ trackId: t.track.id }))
  return tracks
}

/* Returns the tracks in a playlist, batched in lists of 100 tracks (the TRACK_LIMIT)
 * E.g., a playlist with 100 tracks returns [ [ Track, Track, Track, ... ] ]
 * while a playlist with more than 100 tracks returns [ [ Track, Track, ... ], [ Track, Track, ... ] ]
  * */
const getPlaylistWithTracks = async (playlistId) => {
  const playlistInfo = await spotify.request(`${config.spotify.baseUrl}/playlists/${playlistId}`)
  const numTracks = playlistInfo.tracks.total

  let tracklists = [await getTracks(playlistId, 0)]
  if (numTracks > TRACK_LIMIT) {
    const numRequests = Math.ceil((numTracks - TRACK_LIMIT) / TRACK_LIMIT)
    const results = await Promise.all(
      Array(numRequests)
        .fill()
        .map((_, i) => getTracks(playlistId, (i + 1) * TRACK_LIMIT))
    )
    tracklists = [...tracklists, ...results]
  }
  return tracklists
}

/* Returns a list of the audio features of all tracks in a playlist */
const getPlaylistAudioFeatures = async (playlistId) => {
  const playlist = await getPlaylistWithTracks(playlistId)
  const tracksWithAudioFeatures = await Promise.all(playlist.map(async tracklist => {
    const trackIdsString = tracklist.map(t => t.trackId).join(',')
    const audioFeaturesRaw = await spotify.request(`${config.spotify.baseUrl}/audio-features/?ids=${trackIdsString}`)
    const audioFeatures = audioFeaturesRaw['audio_features']
    return audioFeatures
  }))
  const flattened = tracksWithAudioFeatures.reduce((acc ,curr) => [...acc, ...curr])
  return { tracksWithAudioFeatures: flattened }
}

/* GET songs for playlist. */
router.get('/playlist/:playlistId', async (req, res, next) => {
  const playlistWithAudioFeatures = await getPlaylistAudioFeatures(req.params.playlistId)
  return res.send(playlistWithAudioFeatures)
})

module.exports = router;

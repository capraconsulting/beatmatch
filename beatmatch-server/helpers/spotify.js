import { audioFeatureKeys, normalize } from './logic'
const Spotify = require('node-spotify-api')
const config = require('../config.js')
const spotify = new Spotify({
  id: config.spotify.client_id,
  secret: config.spotify.secret
})

const TRACK_LIMIT = 100

const filterAudioFeatures = (audioFeatures, whitelist) => {
  const filteredObject = {}
  whitelist.map(key => {
    filteredObject[key] = audioFeatures[key]
  })
  return filteredObject
}

const getTracks = async (playlistId, offset) => {
  const res = await spotify.request(
    `${config.spotify.baseUrl}/playlists/${playlistId}/tracks?offset=${offset}`
  )
  const tracks = res.items
    .filter(t => !t.track.is_local)
    .map(t => ({
      popularity: t.track.popularity,
      artists: t.track.artists.map(a => a.name),
      title: t.track.name,
      id: t.track.id
    }))
  return tracks
}

/* Returns the tracks in a playlist, batched in lists of 100 tracks (the TRACK_LIMIT)
 * E.g., a playlist with 100 tracks returns [ [ Track, Track, Track, ... ] ]
 * while a playlist with more than 100 tracks returns [ [ Track, Track, ... ], [ Track, Track, ... ] ]
 * */
const getPlaylistWithTracks = async playlistId => {
  const playlistInfo = await spotify.request(
    `${config.spotify.baseUrl}/playlists/${playlistId}`
  )

  const playlistMetaInfo = {
    id: playlistInfo.id,
    name: playlistInfo.name,
    owner: playlistInfo.owner.display_name
  }

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
  return [tracklists, playlistMetaInfo]
}

/* Returns a list of all tracks in a playlist accompanied by their audio features and general details */
const getPlaylistWithAudioFeatures = async playlistId => {
  const [playlist, playlistMetaInfo] = await getPlaylistWithTracks(playlistId)

  const tracksWithAudioFeatures = await Promise.all(
    playlist.map(async tracklist => {
      const trackIdsString = tracklist.map(t => t.id).join(',')
      const audioFeaturesRaw = await spotify.request(
        `${config.spotify.baseUrl}/audio-features/?ids=${trackIdsString}`
      )

      const audioFeatures = audioFeaturesRaw['audio_features']
        .map(t => filterAudioFeatures(t, audioFeatureKeys))
        .map(normalize)

      return audioFeatures.map((t, i) => ({
        audioFeatures: t,
        ...tracklist[i]
      }))
    })
  )
  const flattened = tracksWithAudioFeatures.reduce((acc, curr) => [
    ...acc,
    ...curr
  ])
  return {
    tracks: flattened,
    playlistInfo: playlistMetaInfo
  }
}

export { spotify, getPlaylistWithAudioFeatures }

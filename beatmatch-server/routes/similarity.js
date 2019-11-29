var cosineSimilarity = require('compute-cosine-similarity');

const getAggregatedValues = playlist => {
  const filtered = playlist['audio_features'].filter(t => t !== null)
  const keys = ['danceability', 'energy', 'speechiness', 'acousticness', 'instrumentalness', 'liveness', 'valence', 'tempo']
  return filtered.reduce((acc, curr) => {
    keys.map(key => {
      if (key in acc) {
        acc[key] += curr[key] / filtered.length
      } else {
        acc[key] = curr[key] / filtered.length
      }
    })
    return acc
  }, {})
}

/* Calculate cosine similarity between two sets of aggregated values */
function getSimilarity(p1, p2) {
  const [s1, s2] = [p1, p2].map(p => Object.values(getAggregatedValues(p)))
  const similarity = cosineSimilarity(s1, s2)
  return { similarity }
}

/* GET aggregated values for a single playlist. */
router.get('/score/:playlist_id', function(req, res, next) {
  spotify
    .request(`${config.spotify.baseUrl}/playlists/${req.params.playlist_id}`)
    .then(function(data) {
      var track_ids = getTrackIds(data.tracks.items)
      var track_ids_string = track_ids.join(',')
      spotify
        .request(
          `${config.spotify.baseUrl}/audio-features/?ids=${track_ids_string}`
        )
        .then(function(data2) {
          const playlistValues = getAggregatedValues(data2)
          return res.send(playlistValues)
        })
        .catch(function(err) {
          console.error('Error occurred: ' + err)
        })
    })
    .catch(function(err) {
      console.error('Error occurred: ' + err)
    })
})

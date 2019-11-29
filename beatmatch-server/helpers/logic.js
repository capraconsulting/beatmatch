import cosineSimilarity from 'compute-cosine-similarity'

/* Calculate cosine similarity between two sets of aggregated audio features */
function getSimilarity(firstAudioFeatures, secondAudioFeatures) {
  const [s1, s2] = [firstAudioFeatures, secondAudioFeatures].map(p =>
    Object.values(p)
  )
  return cosineSimilarity(s1, s2)
}

const getAggregatedAudioFeatures = playlist => {
  const keys = [
    'danceability',
    'energy',
    'speechiness',
    'acousticness',
    'instrumentalness',
    'liveness',
    'valence'
  ] // 'tempo'
  const aggregatedAudioFeatures = playlist.tracks.reduce((acc, curr) => {
    keys.map(key => {
      if (key in acc) {
        acc[key] += curr.audioFeatures[key] / playlist.tracks.length
      } else {
        acc[key] = curr.audioFeatures[key] / playlist.tracks.length
      }
    })
    return acc
  }, {})
  return aggregatedAudioFeatures
}

export { getSimilarity, getAggregatedAudioFeatures }

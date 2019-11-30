import cosineSimilarity from 'compute-cosine-similarity'

export const audioFeatureKeys = [
  'danceability',
  'energy',
  'speechiness',
  'acousticness',
  'instrumentalness',
  'liveness',
  'valence',
  'mode',
  'time_signature',
  'loudness',
  'tempo'
]

export const normalize = audioFeatures => ({
  ...audioFeatures,
  time_signature: (audioFeatures.time_signature /= 4),
  loudness: (audioFeatures.loudness *= -1 / 100),
  tempo: (audioFeatures.tempo /= 200)
})

/* Calculate cosine similarity between two sets of aggregated audio features */
function getSimilarity(firstAudioFeatures, secondAudioFeatures) {
  const [s1, s2] = [firstAudioFeatures, secondAudioFeatures].map(p =>
    Object.values(p)
  )
  return cosineSimilarity(s1, s2)
}

const getAverageAudioFeatures = playlist => {
  const averageAudioFeatures = playlist.tracks
    .map(normalize)
    .reduce((acc, curr) => {
      audioFeatureKeys.map(key => {
        if (key in acc) {
          acc[key] += curr.audioFeatures[key] / playlist.tracks.length
        } else {
          acc[key] = curr.audioFeatures[key] / playlist.tracks.length
        }
      })
      return acc
    }, {})
  return averageAudioFeatures
}

export { getSimilarity, getAverageAudioFeatures }

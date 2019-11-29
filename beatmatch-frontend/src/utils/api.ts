import { PlaylistAverageAudioFeatures } from '../types'

export async function getAudioFeaturesForPlaylist(playlistId: String) {
  const url = `http://localhost:3000/playlist/${playlistId}`
  const response = await fetch(url)
  const json = await response.json()
  return json
}

const mock = {
  acousticness: 0.09540383066666666,
  danceability: 0.652746666666667,
  duration_ms: 248073.26666666666,
  energy: 0.7252799999999999,
  instrumentalness: 0.03950620706666665,
  liveness: 0.18796533333333335,
  loudness: -6.758826666666664,
  mode: 0.64,
  speechiness: 0.10841199999999995,
  tempo: 116.77213333333333,
  time_signature: 3.986666666666667,
  valence: 0.5198133333333332
}

export async function getAverageAudioFeaturesForPlaylist(
  playlistId: String
): Promise<PlaylistAverageAudioFeatures> {
  const url = `http://localhost:3000/averageplaylist/${playlistId}`
  //const response = await fetch(url)
  //const json = await response.json()
  //return json
  return mock
}

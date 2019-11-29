export interface AudioFeatures {
  danceability: number
  energy: number
  speechiness: number
  acousticness: number
  instrumentalness: number
  liveness: number
  valence: number
  tempo: number
  loudness: number
  mode: number
}

interface Track extends AudioFeatures {
  name: string
}

interface AverageAudioFeatures extends AudioFeatures {}

interface Playlist {
  average: AverageAudioFeatures
  tracks: Track[]
}

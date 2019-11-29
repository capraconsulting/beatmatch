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

export interface Track extends AudioFeatures {
  name: string
}

export interface AverageAudioFeatures extends AudioFeatures {}

export interface Playlist {
  average: AverageAudioFeatures
  tracks: Track[]
}

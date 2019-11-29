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
}

export interface Track {
  audioFeatures: AudioFeatures
  artists: [string]
  title: string
  id: string
  popularity: number
}

export interface AverageAudioFeatures extends AudioFeatures {}

export interface Playlist {
  aggregatedAudioFeatures: AverageAudioFeatures
  tracks: Track[]
}

export const getMockPlaylist = (): Playlist => ({
  aggregatedAudioFeatures: {
    acousticness: 0.09540383066666666,
    danceability: 0.652746666666667,
    energy: 0.7252799999999999,
    instrumentalness: 0.03950620706666665,
    liveness: 0.18796533333333335,
    loudness: -6.758826666666664,
    speechiness: 0.10841199999999995,
    tempo: 116.77213333333333,
    valence: 0.5198133333333332
  },
  tracks: [
    {
      audioFeatures: {
        acousticness: 0.09540383066666666,
        danceability: 0.652746666666667,
        energy: 0.7252799999999999,
        instrumentalness: 0.03950620706666665,
        liveness: 0.18796533333333335,
        loudness: -6.758826666666664,
        speechiness: 0.10841199999999995,
        tempo: 116.77213333333333,
        valence: 0.5198133333333332
      },
      artists: ['me'],
      title: 'mock track',
      id: 'uuid-uuid',
      popularity: 1
    }
  ]
})

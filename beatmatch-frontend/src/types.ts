export interface AudioFeatures {
  danceability: number
  energy: number
  speechiness: number
  acousticness: number
  instrumentalness: number
  liveness: number
  valence: number
  mode: number
  time_signature: number
  tempo: number
  loudness: number
}

export interface Track {
  audioFeatures: AudioFeatures
  artists: string[]
  title: string
  id: string
  popularity: number
}

export interface AverageAudioFeatures extends AudioFeatures {}

export interface Playlist {
  playlistInfo: {
    id: String
    name: String
    owner: String
  }
  averageAudioFeatures: AverageAudioFeatures
  tracks: Track[]
}

export interface Similarity {
  similarity: number
}

export const getMockPlaylist = (): Playlist[] => [
  {
    averageAudioFeatures: {
      danceability: 0.6490333333333336,
      energy: 0.6744833333333334,
      speechiness: 0.09476833333333332,
      acousticness: 0.16197181666666674,
      instrumentalness: 0.0037153849999999994,
      liveness: 0.169095,
      valence: 0.49040666666666655,
      mode: 0.5333333333333333,
      time_signature: 0.9833333333333347,
      loudness: 0.06060633333333333,
      tempo: 0.617896
    },
    tracks: [
      {
        audioFeatures: {
          danceability: 0.628,
          energy: 0.623,
          speechiness: 0.107,
          acousticness: 0.215,
          instrumentalness: 0.00000187,
          liveness: 0.087,
          valence: 0.457,
          mode: 0,
          time_signature: 1,
          loudness: 0.05288,
          tempo: 0.7504149999999999
        },
        popularity: 66,
        artists: ['Arif'],
        title: 'Hvem Er Hun',
        id: '1thU1NIPh8ACsoMy9Wz5eV'
      },
      {
        audioFeatures: {
          danceability: 0.477,
          energy: 0.682,
          speechiness: 0.0925,
          acousticness: 0.153,
          instrumentalness: 0,
          liveness: 0.0763,
          valence: 0.345,
          mode: 0,
          time_signature: 1.25,
          loudness: 0.04931,
          tempo: 0.552835
        },
        popularity: 95,
        artists: ['Sam Smith'],
        title: 'How Do You Sleep?',
        id: '6b2RcmUt1g9N9mQ3CbjX2Y'
      },
      {
        audioFeatures: {
          danceability: 0.59,
          energy: 0.642,
          speechiness: 0.122,
          acousticness: 0.0771,
          instrumentalness: 0,
          liveness: 0.105,
          valence: 0.651,
          mode: 1,
          time_signature: 1,
          loudness: 0.0387,
          tempo: 0.5367799999999999
        },
        popularity: 87,
        artists: ['Sam Feldt', 'RANI'],
        title: 'Post Malone (feat. RANI)',
        id: '0qc4QlcCxVTGyShurEv1UU'
      },
      {
        audioFeatures: {
          danceability: 0.52,
          energy: 0.798,
          speechiness: 0.0391,
          acousticness: 0.101,
          instrumentalness: 0,
          liveness: 0.0932,
          valence: 0.168,
          mode: 0,
          time_signature: 1,
          loudness: 0.05498,
          tempo: 0.5097200000000001
        },
        popularity: 81,
        artists: ['K-391', 'Alan Walker', 'Tungevaag', 'Mangoo'],
        title: 'Play',
        id: '4jp4Z02kzzg8gK0NmDGgml'
      },
      {
        audioFeatures: {
          danceability: 0.764,
          energy: 0.32,
          speechiness: 0.0546,
          acousticness: 0.837,
          instrumentalness: 0,
          liveness: 0.0822,
          valence: 0.575,
          mode: 1,
          time_signature: 1,
          loudness: 0.07209,
          tempo: 0.455095
        },
        popularity: 100,
        artists: ['Maroon 5'],
        title: 'Memories',
        id: '2b8fOow8UzyDFAE27YhOZM'
      },
      {
        audioFeatures: {
          danceability: 0.779,
          energy: 0.342,
          speechiness: 0.0404,
          acousticness: 0.701,
          instrumentalness: 0.00000256,
          liveness: 0.132,
          valence: 0.482,
          mode: 0,
          time_signature: 1,
          loudness: 0.06316,
          tempo: 0.524965
        },
        popularity: 81,
        artists: ['Nea'],
        title: 'Some Say',
        id: '4poybupy26pTWPr9zY1i7h'
      },
      {
        audioFeatures: {
          danceability: 0.764,
          energy: 0.686,
          speechiness: 0.212,
          acousticness: 0.0117,
          instrumentalness: 0.0000329,
          liveness: 0.271,
          valence: 0.255,
          mode: 0,
          time_signature: 1,
          loudness: 0.08662,
          tempo: 0.62026
        },
        popularity: 68,
        artists: ['Nick Strand', 'Mio'],
        title: "Can't Get Over You",
        id: '5MvCgyuPop4l4EsV9OoSE4'
      },
      {
        audioFeatures: {
          danceability: 0.766,
          energy: 0.548,
          speechiness: 0.0373,
          acousticness: 0.0263,
          instrumentalness: 0.00000181,
          liveness: 0.21,
          valence: 0.552,
          mode: 1,
          time_signature: 1,
          loudness: 0.07833999999999999,
          tempo: 0.61006
        },
        popularity: 72,
        artists: ['CLMD', 'Tungevaag'],
        title: 'DANCE',
        id: '6TfeXwJihJRuBW3mFpib6J'
      },
      {
        audioFeatures: {
          danceability: 0.778,
          energy: 0.559,
          speechiness: 0.0776,
          acousticness: 0.128,
          instrumentalness: 0,
          liveness: 0.399,
          valence: 0.678,
          mode: 0,
          time_signature: 0.25,
          loudness: 0.07109,
          tempo: 0.649945
        },
        popularity: 97,
        artists: ['blackbear'],
        title: 'hot girl bummer',
        id: '7aiClxsDWFRQ0Kzk5KI5ku'
      },
      {
        audioFeatures: {
          danceability: 0.794,
          energy: 0.793,
          speechiness: 0.0842,
          acousticness: 0.0125,
          instrumentalness: 0,
          liveness: 0.0952,
          valence: 0.677,
          mode: 0,
          time_signature: 1,
          loudness: 0.04521,
          tempo: 0.6197050000000001
        },
        popularity: 96,
        artists: ['Dua Lipa'],
        title: "Don't Start Now",
        id: '6WrI0LAC5M1Rw2MnX2ZvEg'
      },
      {
        audioFeatures: {
          danceability: 0.294,
          energy: 0.505,
          speechiness: 0.042,
          acousticness: 0.12,
          instrumentalness: 0,
          liveness: 0.0977,
          valence: 0.357,
          mode: 1,
          time_signature: 0.25,
          loudness: 0.08106,
          tempo: 0.42666
        },
        popularity: 86,
        artists: ['The Chainsmokers', 'ILLENIUM', 'Lennon Stella'],
        title: 'Takeaway (feat. Lennon Stella)',
        id: '6wo37KVqFJhtuxPTpLCcfe'
      },
      {
        audioFeatures: {
          danceability: 0.893,
          energy: 0.748,
          speechiness: 0.0821,
          acousticness: 0.272,
          instrumentalness: 0.0000162,
          liveness: 0.093,
          valence: 0.867,
          mode: 0,
          time_signature: 1,
          loudness: 0.04299,
          tempo: 0.58979
        },
        popularity: 95,
        artists: ['Regard'],
        title: 'Ride It',
        id: '2tnVG71enUj33Ic2nFN6kZ'
      },
      {
        audioFeatures: {
          danceability: 0.74,
          energy: 0.498,
          speechiness: 0.0456,
          acousticness: 0.0169,
          instrumentalness: 0.00282,
          liveness: 0.319,
          valence: 0.652,
          mode: 0,
          time_signature: 1,
          loudness: 0.06684,
          tempo: 0.49008
        },
        popularity: 93,
        artists: ['Camila Cabello'],
        title: 'Liar',
        id: '7LzouaWGFCy4tkXDOOnEyM'
      },
      {
        audioFeatures: {
          danceability: 0.405,
          energy: 0.646,
          speechiness: 0.0476,
          acousticness: 0.331,
          instrumentalness: 0,
          liveness: 0.103,
          valence: 0.17,
          mode: 0,
          time_signature: 1,
          loudness: 0.03206,
          tempo: 0.65109
        },
        popularity: 88,
        artists: ['Post Malone'],
        title: "Hollywood's Bleeding",
        id: '7sWRlDoTDX8geTR8zzr2vt'
      },
      {
        audioFeatures: {
          danceability: 0.71,
          energy: 0.752,
          speechiness: 0.0337,
          acousticness: 0.246,
          instrumentalness: 0,
          liveness: 0.0651,
          valence: 0.435,
          mode: 1,
          time_signature: 1,
          loudness: 0.05193,
          tempo: 0.610015
        },
        popularity: 65,
        artists: ['TIX'],
        title: 'Når Jeg Er Full',
        id: '4xVjnQ3JPK2PnGIpZDs2Iy'
      },
      {
        audioFeatures: {
          danceability: 0.704,
          energy: 0.719,
          speechiness: 0.0343,
          acousticness: 0.42,
          instrumentalness: 0,
          liveness: 0.18,
          valence: 0.33,
          mode: 1,
          time_signature: 1,
          loudness: 0.0405,
          tempo: 0.51509
        },
        popularity: 67,
        artists: ['Ina Wroldsen'],
        title: 'Haloes',
        id: '7vLR7NDAadIXfWjl2nw5Nr'
      },
      {
        audioFeatures: {
          danceability: 0.571,
          energy: 0.496,
          speechiness: 0.0694,
          acousticness: 0.356,
          instrumentalness: 0.00000121,
          liveness: 0.0924,
          valence: 0.238,
          mode: 1,
          time_signature: 1,
          loudness: 0.0736,
          tempo: 0.598895
        },
        popularity: 66,
        artists: ['Ruben'],
        title: 'So High',
        id: '60bUT3XY15CTg8ZRNrSbqO'
      },
      {
        audioFeatures: {
          danceability: 0.654,
          energy: 0.63,
          speechiness: 0.0259,
          acousticness: 0.153,
          instrumentalness: 0,
          liveness: 0.111,
          valence: 0.43,
          mode: 1,
          time_signature: 1,
          loudness: 0.04644,
          tempo: 0.449955
        },
        popularity: 95,
        artists: ['Dan + Shay', 'Justin Bieber'],
        title: '10,000 Hours (with Justin Bieber)',
        id: '2wrJq5XKLnmhRXHIAf9xBa'
      },
      {
        audioFeatures: {
          danceability: 0.585,
          energy: 0.62,
          speechiness: 0.0327,
          acousticness: 0.0426,
          instrumentalness: 0.00224,
          liveness: 0.15,
          valence: 0.281,
          mode: 0,
          time_signature: 1,
          loudness: 0.0809,
          tempo: 0.509695
        },
        popularity: 93,
        artists: ['Harry Styles'],
        title: 'Lights Up',
        id: '2plLJpUcYPFrl1sW2pMG63'
      },
      {
        audioFeatures: {
          danceability: 0.667,
          energy: 0.503,
          speechiness: 0.0526,
          acousticness: 0.552,
          instrumentalness: 0,
          liveness: 0.169,
          valence: 0.584,
          mode: 0,
          time_signature: 1,
          loudness: 0.08217,
          tempo: 0.7200749999999999
        },
        popularity: 75,
        artists: ['Au/Ra', 'Alan Walker', 'Death Stranding: Timefall'],
        title: 'Ghost',
        id: '5TgS4dcUAU8EEb506d8wAT'
      },
      {
        audioFeatures: {
          danceability: 0.756,
          energy: 0.682,
          speechiness: 0.127,
          acousticness: 0.0498,
          instrumentalness: 0,
          liveness: 0.21,
          valence: 0.42,
          mode: 0,
          time_signature: 1,
          loudness: 0.07005,
          tempo: 0.590135
        },
        popularity: 63,
        artists: ['Julie Bergan'],
        title: 'Bored',
        id: '1hKlpuHWpGWh4wQDxZkA3X'
      },
      {
        audioFeatures: {
          danceability: 0.742,
          energy: 0.595,
          speechiness: 0.0792,
          acousticness: 0.00916,
          instrumentalness: 0,
          liveness: 0.0862,
          valence: 0.701,
          mode: 1,
          time_signature: 1,
          loudness: 0.06941,
          tempo: 0.61499
        },
        popularity: 66,
        artists: ['Stina Talling'],
        title: 'BlimE - Mer Enn God Nok',
        id: '2Sk1QwXo0FMb8kwWahCSMW'
      },
      {
        audioFeatures: {
          danceability: 0.651,
          energy: 0.693,
          speechiness: 0.0375,
          acousticness: 0.458,
          instrumentalness: 0,
          liveness: 0.335,
          valence: 0.392,
          mode: 1,
          time_signature: 1,
          loudness: 0.047220000000000005,
          tempo: 0.59485
        },
        popularity: 87,
        artists: ['Martin Garrix', 'Dean Lewis'],
        title: 'Used To Love (with Dean Lewis)',
        id: '7pWK1kMgHy5lNNiIfuRbkP'
      },
      {
        audioFeatures: {
          danceability: 0.563,
          energy: 0.564,
          speechiness: 0.271,
          acousticness: 0.114,
          instrumentalness: 0.0254,
          liveness: 0.304,
          valence: 0.55,
          mode: 0,
          time_signature: 1.25,
          loudness: 0.07905999999999999,
          tempo: 0.771775
        },
        popularity: 93,
        artists: ['Selena Gomez'],
        title: 'Look At Her Now',
        id: '4yI3HpbSFSgFZtJP2kDe5m'
      },
      {
        audioFeatures: {
          danceability: 0.584,
          energy: 0.643,
          speechiness: 0.0395,
          acousticness: 0.288,
          instrumentalness: 0,
          liveness: 0.186,
          valence: 0.53,
          mode: 1,
          time_signature: 1,
          loudness: 0.06415,
          tempo: 0.45018
        },
        popularity: 81,
        artists: ['The Chainsmokers'],
        title: 'Push My Luck',
        id: '2a3dopgTF1q4rMVDJ1rwBU'
      },
      {
        audioFeatures: {
          danceability: 0.421,
          energy: 0.669,
          speechiness: 0.127,
          acousticness: 0.151,
          instrumentalness: 0,
          liveness: 0.635,
          valence: 0.326,
          mode: 1,
          time_signature: 1,
          loudness: 0.047240000000000004,
          tempo: 0.87894
        },
        popularity: 71,
        artists: ['Justin Jesso', 'Seeb'],
        title: 'Bigger Than',
        id: '5X73AYzzEE5Di0JwcQKt9N'
      },
      {
        audioFeatures: {
          danceability: 0.751,
          energy: 0.657,
          speechiness: 0.0989,
          acousticness: 0.0955,
          instrumentalness: 0,
          liveness: 0.0945,
          valence: 0.532,
          mode: 1,
          time_signature: 1,
          loudness: 0.04642,
          tempo: 0.590145
        },
        popularity: 73,
        artists: ['Lucas & Steve', 'Haris'],
        title: 'Perfect (feat. Haris)',
        id: '30cW9fD87IgbYFl8o0lUze'
      },
      {
        audioFeatures: {
          danceability: 0.584,
          energy: 0.685,
          speechiness: 0.425,
          acousticness: 0.0304,
          instrumentalness: 0,
          liveness: 0.189,
          valence: 0.345,
          mode: 1,
          time_signature: 1,
          loudness: 0.07811,
          tempo: 0.487755
        },
        popularity: 88,
        artists: ['BTS', 'Lauv'],
        title: 'Make It Right (feat. Lauv)',
        id: '314ZkcV7oLWG8yWE7LABvH'
      },
      {
        audioFeatures: {
          danceability: 0.744,
          energy: 0.669,
          speechiness: 0.0529,
          acousticness: 0.263,
          instrumentalness: 0,
          liveness: 0.09,
          valence: 0.628,
          mode: 1,
          time_signature: 1,
          loudness: 0.06756000000000001,
          tempo: 0.599405
        },
        popularity: 45,
        artists: ['Leona Griffin'],
        title: 'We Are Youth',
        id: '57wXjRfJ4Pq6vt8pb1bh07'
      },
      {
        audioFeatures: {
          danceability: 0.506,
          energy: 0.791,
          speechiness: 0.153,
          acousticness: 0.0215,
          instrumentalness: 0.00000678,
          liveness: 0.042,
          valence: 0.554,
          mode: 1,
          time_signature: 1,
          loudness: 0.051210000000000006,
          tempo: 0.979905
        },
        popularity: 46,
        artists: ['Bodin'],
        title: 'So Good',
        id: '3DUnXDxCTDkBuwOim5t8yH'
      },
      {
        audioFeatures: {
          danceability: 0.881,
          energy: 0.572,
          speechiness: 0.0518,
          acousticness: 0.229,
          instrumentalness: 0.00317,
          liveness: 0.0796,
          valence: 0.79,
          mode: 0,
          time_signature: 0.75,
          loudness: 0.09813000000000001,
          tempo: 0.62506
        },
        popularity: 52,
        artists: ['Minus Manus'],
        title: 'I Love This Club',
        id: '10EdSF5PEhNv7kD6YEk3oh'
      },
      {
        audioFeatures: {
          danceability: 0.906,
          energy: 0.833,
          speechiness: 0.0729,
          acousticness: 0.0899,
          instrumentalness: 0,
          liveness: 0.154,
          valence: 0.752,
          mode: 0,
          time_signature: 1,
          loudness: 0.030270000000000002,
          tempo: 0.520085
        },
        popularity: 80,
        artists: ['Jax Jones', 'Bebe Rexha'],
        title: 'Harder (with Bebe Rexha)',
        id: '5RgBnDtHKFHgtVdqabjGE3'
      },
      {
        audioFeatures: {
          danceability: 0.374,
          energy: 0.592,
          speechiness: 0.0489,
          acousticness: 0.0334,
          instrumentalness: 0.0000333,
          liveness: 0.0574,
          valence: 0.135,
          mode: 1,
          time_signature: 1,
          loudness: 0.0926,
          tempo: 0.61994
        },
        popularity: 42,
        artists: ['Masello'],
        title: 'Who I Am',
        id: '5xR2Jk0EAhY7BuZ9tg1G6D'
      },
      {
        audioFeatures: {
          danceability: 0.616,
          energy: 0.848,
          speechiness: 0.113,
          acousticness: 0.028,
          instrumentalness: 0,
          liveness: 0.158,
          valence: 0.33,
          mode: 1,
          time_signature: 1,
          loudness: 0.02934,
          tempo: 0.63945
        },
        popularity: 58,
        artists: ['VIZE', 'Laniia'],
        title: 'Stars',
        id: '2oRmQ1uRNG0ZJ8qAvbMN43'
      },
      {
        audioFeatures: {
          danceability: 0.616,
          energy: 0.818,
          speechiness: 0.381,
          acousticness: 0.0862,
          instrumentalness: 0.068,
          liveness: 0.259,
          valence: 0.546,
          mode: 1,
          time_signature: 1,
          loudness: 0.05606,
          tempo: 0.5248700000000001
        },
        popularity: 59,
        artists: ['Otto Knows'],
        title: 'About You',
        id: '7moCdtQSYiVX8sRZ91tB8x'
      },
      {
        audioFeatures: {
          danceability: 0.582,
          energy: 0.614,
          speechiness: 0.0504,
          acousticness: 0.0361,
          instrumentalness: 0,
          liveness: 0.0926,
          valence: 0.3,
          mode: 1,
          time_signature: 1,
          loudness: 0.04771,
          tempo: 0.46163
        },
        popularity: 72,
        artists: ['Lukas Graham'],
        title: 'Lie',
        id: '0mP5HOkHoaW9Q7qf7cJ7Gk'
      },
      {
        audioFeatures: {
          danceability: 0.517,
          energy: 0.704,
          speechiness: 0.156,
          acousticness: 0.214,
          instrumentalness: 0,
          liveness: 0.222,
          valence: 0.356,
          mode: 0,
          time_signature: 1.25,
          loudness: 0.06132,
          tempo: 0.75605
        },
        popularity: 51,
        artists: ['Gabrielle'],
        title: 'Aldri aldri aldri',
        id: '2qY0ieeRZaUW5HqzT33NwI'
      },
      {
        audioFeatures: {
          danceability: 0.731,
          energy: 0.511,
          speechiness: 0.0652,
          acousticness: 0.163,
          instrumentalness: 0.0000684,
          liveness: 0.0685,
          valence: 0.233,
          mode: 1,
          time_signature: 1,
          loudness: 0.07792,
          tempo: 0.524865
        },
        popularity: 47,
        artists: ['Stina Talling'],
        title: 'Fortid Til Fremtid',
        id: '1EXt0Zp8wfcO3ubojXUmnl'
      },
      {
        audioFeatures: {
          danceability: 0.804,
          energy: 0.584,
          speechiness: 0.0485,
          acousticness: 0.091,
          instrumentalness: 0,
          liveness: 0.0614,
          valence: 0.269,
          mode: 1,
          time_signature: 1,
          loudness: 0.08006,
          tempo: 0.525025
        },
        popularity: 46,
        artists: ['Edwin Klift', 'Franklin'],
        title: 'Getaway',
        id: '3Yxhg7pxqo0wNTj27Q6rs4'
      },
      {
        audioFeatures: {
          danceability: 0.566,
          energy: 0.695,
          speechiness: 0.0616,
          acousticness: 0.15,
          instrumentalness: 0,
          liveness: 0.0706,
          valence: 0.491,
          mode: 1,
          time_signature: 1,
          loudness: 0.0716,
          tempo: 0.84033
        },
        popularity: 39,
        artists: ['ASH', 'Alexandru'],
        title: 'Help From U',
        id: '0NfDAw0bLBTYB0VIJr2VC5'
      },
      {
        audioFeatures: {
          danceability: 0.562,
          energy: 0.872,
          speechiness: 0.104,
          acousticness: 0.0314,
          instrumentalness: 0,
          liveness: 0.445,
          valence: 0.73,
          mode: 0,
          time_signature: 1,
          loudness: 0.02924,
          tempo: 0.84994
        },
        popularity: 59,
        artists: ['Rat City', 'Kiesza'],
        title: 'Naked - With My Headphones On',
        id: '3702iYTGwoFP2mTw9XUNCe'
      },
      {
        audioFeatures: {
          danceability: 0.64,
          energy: 0.87,
          speechiness: 0.064,
          acousticness: 0.109,
          instrumentalness: 0.00000594,
          liveness: 0.309,
          valence: 0.584,
          mode: 1,
          time_signature: 1,
          loudness: 0.05621,
          tempo: 0.6399750000000001
        },
        popularity: 52,
        artists: ['Keiino'],
        title: 'Dancing in the Smoke',
        id: '4GGzBIOLLs2Vjg4OMd8gjz'
      },
      {
        audioFeatures: {
          danceability: 0.573,
          energy: 0.878,
          speechiness: 0.305,
          acousticness: 0.218,
          instrumentalness: 0,
          liveness: 0.0871,
          valence: 0.558,
          mode: 0,
          time_signature: 1,
          loudness: 0.04279,
          tempo: 1.00067
        },
        popularity: 50,
        artists: ['Mileo', 'Madcon'],
        title: 'Dead',
        id: '1GnseWmwOkBxKdcAoYV0LK'
      },
      {
        audioFeatures: {
          danceability: 0.733,
          energy: 0.673,
          speechiness: 0.0511,
          acousticness: 0.0106,
          instrumentalness: 0.000198,
          liveness: 0.0662,
          valence: 0.755,
          mode: 0,
          time_signature: 1,
          loudness: 0.06946,
          tempo: 0.54981
        },
        popularity: 44,
        artists: ['Adelén'],
        title: 'Somewhere We Can Talk',
        id: '2fak9Ly5PUhz4PpkDUk3vk'
      },
      {
        audioFeatures: {
          danceability: 0.62,
          energy: 0.518,
          speechiness: 0.0488,
          acousticness: 0.0183,
          instrumentalness: 0,
          liveness: 0.147,
          valence: 0.446,
          mode: 1,
          time_signature: 1,
          loudness: 0.06112,
          tempo: 0.73005
        },
        popularity: 45,
        artists: ['Torine'],
        title: 'Dancing In My Sleep',
        id: '71kXKioonJcD25xN3tTmLf'
      },
      {
        audioFeatures: {
          danceability: 0.68,
          energy: 0.867,
          speechiness: 0.0719,
          acousticness: 0.122,
          instrumentalness: 0.000013,
          liveness: 0.0645,
          valence: 0.667,
          mode: 1,
          time_signature: 1,
          loudness: 0.060540000000000004,
          tempo: 0.58506
        },
        popularity: 51,
        artists: ['TRXD', 'Brandyn Burnette'],
        title: 'You & I',
        id: '0mRDCsoHDP9vbEK9MOuY7n'
      },
      {
        audioFeatures: {
          danceability: 0.536,
          energy: 0.55,
          speechiness: 0.307,
          acousticness: 0.057,
          instrumentalness: 0,
          liveness: 0.253,
          valence: 0.383,
          mode: 0,
          time_signature: 1,
          loudness: 0.11301,
          tempo: 0.901315
        },
        popularity: 35,
        artists: ['Amir'],
        title: 'Bob, bob',
        id: '3zVXn4Ir1p8rnTMBlpjuGH'
      },
      {
        audioFeatures: {
          danceability: 0.524,
          energy: 0.458,
          speechiness: 0.145,
          acousticness: 0.268,
          instrumentalness: 0,
          liveness: 0.133,
          valence: 0.363,
          mode: 1,
          time_signature: 1,
          loudness: 0.08392,
          tempo: 0.5475099999999999
        },
        popularity: 57,
        artists: ['HAYES', 'Mugisho'],
        title: 'Now Or Never',
        id: '5qUNcRJ5b5lD1bSg6q1Q9t'
      },
      {
        audioFeatures: {
          danceability: 0.652,
          energy: 0.708,
          speechiness: 0.147,
          acousticness: 0.193,
          instrumentalness: 0,
          liveness: 0.0856,
          valence: 0.39,
          mode: 1,
          time_signature: 1,
          loudness: 0.04227,
          tempo: 0.47365999999999997
        },
        popularity: 61,
        artists: ['Katastrofe', 'OnklP', 'Kriss'],
        title: 'Hørt Det Før',
        id: '1YcE6OjlwY3ubaRoacuhKa'
      },
      {
        audioFeatures: {
          danceability: 0.585,
          energy: 0.782,
          speechiness: 0.0897,
          acousticness: 0.269,
          instrumentalness: 0,
          liveness: 0.156,
          valence: 0.521,
          mode: 0,
          time_signature: 1,
          loudness: 0.04101,
          tempo: 0.60954
        },
        popularity: 73,
        artists: ['Jax Jones', 'Martin Solveig', 'Madison Beer', 'Europa'],
        title: 'All Day And Night - Jax Jones & Martin Solveig Present Europa',
        id: '33CfD8UkDEcSdAP9j4QpUY'
      },
      {
        audioFeatures: {
          danceability: 0.733,
          energy: 0.859,
          speechiness: 0.033,
          acousticness: 0.479,
          instrumentalness: 0.0645,
          liveness: 0.105,
          valence: 0.52,
          mode: 0,
          time_signature: 1,
          loudness: 0.050300000000000004,
          tempo: 0.62474
        },
        popularity: 82,
        artists: ['R3HAB', 'A Touch Of Class'],
        title: 'All Around The World (La La La)',
        id: '02itaCXOdC54J0ISjqqFAp'
      },
      {
        audioFeatures: {
          danceability: 0.535,
          energy: 0.906,
          speechiness: 0.0353,
          acousticness: 0.0202,
          instrumentalness: 0.000715,
          liveness: 0.0886,
          valence: 0.732,
          mode: 0,
          time_signature: 1,
          loudness: 0.04699,
          tempo: 0.63006
        },
        popularity: 72,
        artists: ['David Guetta', 'MORTEN', 'Aloe Blacc'],
        title: 'Never Be Alone (feat. Aloe Blacc)',
        id: '3GT2CBmJWIEdCpHiB31WYK'
      },
      {
        audioFeatures: {
          danceability: 0.706,
          energy: 0.78,
          speechiness: 0.154,
          acousticness: 0.0105,
          instrumentalness: 0,
          liveness: 0.164,
          valence: 0.677,
          mode: 1,
          time_signature: 1,
          loudness: 0.05588,
          tempo: 0.62011
        },
        popularity: 66,
        artists: ['KREAM', 'RANI'],
        title: 'Go Somewhere',
        id: '71rHHK9L22rVdmofJTjuSd'
      },
      {
        audioFeatures: {
          danceability: 0.721,
          energy: 0.785,
          speechiness: 0.0572,
          acousticness: 0.248,
          instrumentalness: 0,
          liveness: 0.516,
          valence: 0.709,
          mode: 1,
          time_signature: 1,
          loudness: 0.03496,
          tempo: 0.620325
        },
        popularity: 63,
        artists: ['Broiler'],
        title: 'Good Day',
        id: '6J2f8YFQ3A0DCfjVWYadbH'
      },
      {
        audioFeatures: {
          danceability: 0.657,
          energy: 0.809,
          speechiness: 0.0668,
          acousticness: 0.0608,
          instrumentalness: 0.00000613,
          liveness: 0.0987,
          valence: 0.223,
          mode: 0,
          time_signature: 1,
          loudness: 0.046490000000000004,
          tempo: 0.62998
        },
        popularity: 59,
        artists: ['Jonas Aden'],
        title: 'Tell Me A Lie',
        id: '4ccYRZ7WptUbPD3RZ0BhvP'
      },
      {
        audioFeatures: {
          danceability: 0.653,
          energy: 0.758,
          speechiness: 0.0388,
          acousticness: 0.00148,
          instrumentalness: 0.0438,
          liveness: 0.254,
          valence: 0.0874,
          mode: 0,
          time_signature: 1,
          loudness: 0.08666,
          tempo: 0.619955
        },
        popularity: 59,
        artists: ['Zeds Dead', 'Funkin Matt', 'Fiora'],
        title: 'Feel So (feat. Fiora)',
        id: '4TFDeBqHM6jvbqAi2DAtlv'
      },
      {
        audioFeatures: {
          danceability: 0.758,
          energy: 0.742,
          speechiness: 0.043,
          acousticness: 0.0824,
          instrumentalness: 0,
          liveness: 0.0391,
          valence: 0.648,
          mode: 1,
          time_signature: 1,
          loudness: 0.057300000000000004,
          tempo: 0.60482
        },
        popularity: 61,
        artists: ['Martin Jensen', 'Malte Ebert'],
        title: 'I Could Get Used To This',
        id: '292wwhfpjg2mA7PIyh2RjM'
      },
      {
        audioFeatures: {
          danceability: 0.728,
          energy: 0.875,
          speechiness: 0.0406,
          acousticness: 0.000869,
          instrumentalness: 0.00139,
          liveness: 0.315,
          valence: 0.64,
          mode: 0,
          time_signature: 1,
          loudness: 0.040490000000000005,
          tempo: 0.620185
        },
        popularity: 61,
        artists: [
          'Tobtok',
          'Simon Field',
          'Oliver Nelson',
          'Salena Mastroianni'
        ],
        title: 'Is It Real? (feat. Salena Mastroianni)',
        id: '5wM4n7Y50JPMOwdJPZFL5G'
      },
      {
        audioFeatures: {
          danceability: 0.598,
          energy: 0.526,
          speechiness: 0.0415,
          acousticness: 0.129,
          instrumentalness: 0,
          liveness: 0.14,
          valence: 0.529,
          mode: 0,
          time_signature: 1,
          loudness: 0.08659,
          tempo: 0.619675
        },
        popularity: 91,
        artists: ['MEDUZA', 'Becky Hill', 'Goodboys'],
        title: 'Lose Control',
        id: '7CHi4DtfK4heMlQaudCuHK'
      },
      {
        audioFeatures: {
          danceability: 0.77,
          energy: 0.724,
          speechiness: 0.0495,
          acousticness: 0.0167,
          instrumentalness: 0.0105,
          liveness: 0.353,
          valence: 0.898,
          mode: 1,
          time_signature: 1,
          loudness: 0.05484,
          tempo: 0.60987
        },
        popularity: 80,
        artists: ['SAINt JHN', 'Imanbek'],
        title: 'Roses - Imanbek Remix',
        id: '24Yi9hE78yPEbZ4kxyoXAI'
      }
    ],
    playlistInfo: {
      id: '6M580NqfelAJ8UkZeeMZr0',
      name: 'NRK mP3 Spillelister',
      owner: 'NRK P3'
    }
  },
  {
    averageAudioFeatures: {
      danceability: 0.65015,
      energy: 0.562375,
      speechiness: 0.07790749999999999,
      acousticness: 0.3132790000000001,
      instrumentalness: 0.019715667000000003,
      liveness: 0.16617500000000002,
      valence: 0.46405250000000003,
      mode: 0.5250000000000001,
      time_signature: 0.9937500000000006,
      loudness: 0.06680549999999999,
      tempo: 0.5639834999999999
    },
    tracks: [
      {
        audioFeatures: {
          danceability: 0.824,
          energy: 0.588,
          speechiness: 0.0924,
          acousticness: 0.692,
          instrumentalness: 0.000104,
          liveness: 0.149,
          valence: 0.513,
          mode: 0,
          time_signature: 1,
          loudness: 0.064,
          tempo: 0.490135
        },
        popularity: 96,
        artists: ['Tones and I'],
        title: 'Dance Monkey',
        id: '5ZULALImTm80tzUbYQYM9d'
      },
      {
        audioFeatures: {
          danceability: 0.704,
          energy: 0.225,
          speechiness: 0.0994,
          acousticness: 0.902,
          instrumentalness: 0.657,
          liveness: 0.106,
          valence: 0.243,
          mode: 0,
          time_signature: 1,
          loudness: 0.14454,
          tempo: 0.60003
        },
        popularity: 97,
        artists: ['Billie Eilish'],
        title: 'everything i wanted',
        id: '3ZCTVFBt2Brf31RLEnCkWJ'
      },
      {
        audioFeatures: {
          danceability: 0.621,
          energy: 0.601,
          speechiness: 0.148,
          acousticness: 0.0522,
          instrumentalness: 0,
          liveness: 0.46,
          valence: 0.457,
          mode: 0,
          time_signature: 1.25,
          loudness: 0.056159999999999995,
          tempo: 0.5836749999999999
        },
        popularity: 90,
        artists: ['Arizona Zervas'],
        title: 'ROXANNE',
        id: '1ZPWWSwCkxKfqdp4H0RFCo'
      },
      {
        audioFeatures: {
          danceability: 0.501,
          energy: 0.405,
          speechiness: 0.0319,
          acousticness: 0.751,
          instrumentalness: 0,
          liveness: 0.105,
          valence: 0.446,
          mode: 1,
          time_signature: 1,
          loudness: 0.05679,
          tempo: 0.549455
        },
        popularity: 87,
        artists: ['Lewis Capaldi'],
        title: 'Someone You Loved',
        id: '2TIlqbIneP0ZY1O0EzYLlc'
      },
      {
        audioFeatures: {
          danceability: 0.764,
          energy: 0.32,
          speechiness: 0.0546,
          acousticness: 0.837,
          instrumentalness: 0,
          liveness: 0.0822,
          valence: 0.575,
          mode: 1,
          time_signature: 1,
          loudness: 0.07209,
          tempo: 0.455095
        },
        popularity: 100,
        artists: ['Maroon 5'],
        title: 'Memories',
        id: '2b8fOow8UzyDFAE27YhOZM'
      },
      {
        audioFeatures: {
          danceability: 0.784,
          energy: 0.43,
          speechiness: 0.0364,
          acousticness: 0.123,
          instrumentalness: 0,
          liveness: 0.0887,
          valence: 0.236,
          mode: 0,
          time_signature: 1,
          loudness: 0.08756,
          tempo: 0.635435
        },
        popularity: 90,
        artists: ['Trevor Daniel'],
        title: 'Falling',
        id: '4TnjEaWOeW0eKTKIEvJyCa'
      },
      {
        audioFeatures: {
          danceability: 0.505,
          energy: 0.34,
          speechiness: 0.0438,
          acousticness: 0.576,
          instrumentalness: 0,
          liveness: 0.21,
          valence: 0.0916,
          mode: 1,
          time_signature: 1,
          loudness: 0.09005,
          tempo: 0.509965
        },
        popularity: 99,
        artists: ['Selena Gomez'],
        title: 'Lose You To Love Me',
        id: '1HfMVBKM75vxSfsQ5VefZ5'
      },
      {
        audioFeatures: {
          danceability: 0.779,
          energy: 0.342,
          speechiness: 0.0404,
          acousticness: 0.701,
          instrumentalness: 0.00000256,
          liveness: 0.132,
          valence: 0.482,
          mode: 0,
          time_signature: 1,
          loudness: 0.06316,
          tempo: 0.524965
        },
        popularity: 81,
        artists: ['Nea'],
        title: 'Some Say',
        id: '4poybupy26pTWPr9zY1i7h'
      },
      {
        audioFeatures: {
          danceability: 0.459,
          energy: 0.575,
          speechiness: 0.0573,
          acousticness: 0.604,
          instrumentalness: 0,
          liveness: 0.0885,
          valence: 0.183,
          mode: 1,
          time_signature: 1,
          loudness: 0.04858,
          tempo: 0.559405
        },
        popularity: 86,
        artists: ['Lewis Capaldi'],
        title: 'Before You Go',
        id: '7ce20yLkzuXXLUhzIDoZih'
      },
      {
        audioFeatures: {
          danceability: 0.794,
          energy: 0.793,
          speechiness: 0.0842,
          acousticness: 0.0125,
          instrumentalness: 0,
          liveness: 0.0952,
          valence: 0.677,
          mode: 0,
          time_signature: 1,
          loudness: 0.04521,
          tempo: 0.6197050000000001
        },
        popularity: 96,
        artists: ['Dua Lipa'],
        title: "Don't Start Now",
        id: '6WrI0LAC5M1Rw2MnX2ZvEg'
      },
      {
        audioFeatures: {
          danceability: 0.778,
          energy: 0.559,
          speechiness: 0.0776,
          acousticness: 0.128,
          instrumentalness: 0,
          liveness: 0.399,
          valence: 0.678,
          mode: 0,
          time_signature: 0.25,
          loudness: 0.07109,
          tempo: 0.649945
        },
        popularity: 97,
        artists: ['blackbear'],
        title: 'hot girl bummer',
        id: '7aiClxsDWFRQ0Kzk5KI5ku'
      },
      {
        audioFeatures: {
          danceability: 0.628,
          energy: 0.623,
          speechiness: 0.107,
          acousticness: 0.215,
          instrumentalness: 0.00000187,
          liveness: 0.087,
          valence: 0.457,
          mode: 0,
          time_signature: 1,
          loudness: 0.05288,
          tempo: 0.7504149999999999
        },
        popularity: 66,
        artists: ['Arif'],
        title: 'Hvem Er Hun',
        id: '1thU1NIPh8ACsoMy9Wz5eV'
      },
      {
        audioFeatures: {
          danceability: 0.598,
          energy: 0.427,
          speechiness: 0.0317,
          acousticness: 0.0546,
          instrumentalness: 0.00000583,
          liveness: 0.21,
          valence: 0.0605,
          mode: 0,
          time_signature: 1,
          loudness: 0.08764,
          tempo: 0.382345
        },
        popularity: 98,
        artists: ['Travis Scott'],
        title: 'HIGHEST IN THE ROOM',
        id: '3eekarcy7kvN4yt5ZFzltW'
      },
      {
        audioFeatures: {
          danceability: 0.619,
          energy: 0.459,
          speechiness: 0.0334,
          acousticness: 0.56,
          instrumentalness: 0,
          liveness: 0.137,
          valence: 0.498,
          mode: 0,
          time_signature: 1,
          loudness: 0.05782,
          tempo: 0.634015
        },
        popularity: 93,
        artists: ['SHAED', 'ZAYN'],
        title: 'Trampoline (with ZAYN)',
        id: '1iQDltZqI7BXnHrFy4Qo1k'
      },
      {
        audioFeatures: {
          danceability: 0.335,
          energy: 0.625,
          speechiness: 0.0386,
          acousticness: 0.164,
          instrumentalness: 0,
          liveness: 0.0708,
          valence: 0.346,
          mode: 1,
          time_signature: 1,
          loudness: 0.07461999999999999,
          tempo: 0.751385
        },
        popularity: 89,
        artists: ['Mariah Carey'],
        title: 'All I Want for Christmas Is You',
        id: '0bYg9bo50gSsH3LtXe2SQn'
      },
      {
        audioFeatures: {
          danceability: 0.52,
          energy: 0.798,
          speechiness: 0.0391,
          acousticness: 0.101,
          instrumentalness: 0,
          liveness: 0.0932,
          valence: 0.168,
          mode: 0,
          time_signature: 1,
          loudness: 0.05498,
          tempo: 0.5097200000000001
        },
        popularity: 81,
        artists: ['K-391', 'Alan Walker', 'Tungevaag', 'Mangoo'],
        title: 'Play',
        id: '4jp4Z02kzzg8gK0NmDGgml'
      },
      {
        audioFeatures: {
          danceability: 0.766,
          energy: 0.548,
          speechiness: 0.0373,
          acousticness: 0.0263,
          instrumentalness: 0.00000181,
          liveness: 0.21,
          valence: 0.552,
          mode: 1,
          time_signature: 1,
          loudness: 0.07833999999999999,
          tempo: 0.61006
        },
        popularity: 72,
        artists: ['CLMD', 'Tungevaag'],
        title: 'DANCE',
        id: '6TfeXwJihJRuBW3mFpib6J'
      },
      {
        audioFeatures: {
          danceability: 0.704,
          energy: 0.758,
          speechiness: 0.0402,
          acousticness: 0.233,
          instrumentalness: 0.00144,
          liveness: 0.0924,
          valence: 0.534,
          mode: 1,
          time_signature: 1,
          loudness: 0.03537,
          tempo: 0.600015
        },
        popularity: 66,
        artists: ['Post Malone'],
        title: 'Circles',
        id: '4VginDwYTP2eaHJzO0QMjG'
      },
      {
        audioFeatures: {
          danceability: 0.736,
          energy: 0.308,
          speechiness: 0.0677,
          acousticness: 0.946,
          instrumentalness: 0,
          liveness: 0.186,
          valence: 0.361,
          mode: 1,
          time_signature: 1,
          loudness: 0.0783,
          tempo: 0.55601
        },
        popularity: 88,
        artists: ['Lewis Capaldi'],
        title: 'Bruises',
        id: '4Of7rzpRpV1mWRbhp5rAqG'
      },
      {
        audioFeatures: {
          danceability: 0.65,
          energy: 0.777,
          speechiness: 0.0351,
          acousticness: 0.138,
          instrumentalness: 0,
          liveness: 0.23,
          valence: 0.815,
          mode: 1,
          time_signature: 1,
          loudness: 0.028769999999999997,
          tempo: 0.45996000000000004
        },
        popularity: 63,
        artists: ['TIX'],
        title: 'Brosjan Jesus',
        id: '32lHMgS2XYIaJQPWnY4FAc'
      },
      {
        audioFeatures: {
          danceability: 0.759,
          energy: 0.54,
          speechiness: 0.0287,
          acousticness: 0.037,
          instrumentalness: 0,
          liveness: 0.0945,
          valence: 0.75,
          mode: 0,
          time_signature: 1,
          loudness: 0.06039,
          tempo: 0.584735
        },
        popularity: 96,
        artists: ['Shawn Mendes', 'Camila Cabello'],
        title: 'Señorita',
        id: '0TK2YIli7K1leLovkQiNik'
      },
      {
        audioFeatures: {
          danceability: 0.735,
          energy: 0.583,
          speechiness: 0.0277,
          acousticness: 0.193,
          instrumentalness: 0.00000556,
          liveness: 0.183,
          valence: 0.942,
          mode: 1,
          time_signature: 1,
          loudness: 0.08648,
          tempo: 0.5387
        },
        popularity: 77,
        artists: ['Wham!'],
        title: 'Last Christmas',
        id: '38p8YDx5gepOiK4SnEfoB4'
      },
      {
        audioFeatures: {
          danceability: 0.764,
          energy: 0.686,
          speechiness: 0.212,
          acousticness: 0.0117,
          instrumentalness: 0.0000329,
          liveness: 0.271,
          valence: 0.255,
          mode: 0,
          time_signature: 1,
          loudness: 0.08662,
          tempo: 0.62026
        },
        popularity: 68,
        artists: ['Nick Strand', 'Mio'],
        title: "Can't Get Over You",
        id: '5MvCgyuPop4l4EsV9OoSE4'
      },
      {
        audioFeatures: {
          danceability: 0.477,
          energy: 0.682,
          speechiness: 0.0925,
          acousticness: 0.153,
          instrumentalness: 0,
          liveness: 0.0763,
          valence: 0.345,
          mode: 0,
          time_signature: 1.25,
          loudness: 0.04931,
          tempo: 0.552835
        },
        popularity: 95,
        artists: ['Sam Smith'],
        title: 'How Do You Sleep?',
        id: '6b2RcmUt1g9N9mQ3CbjX2Y'
      },
      {
        audioFeatures: {
          danceability: 0.701,
          energy: 0.425,
          speechiness: 0.375,
          acousticness: 0.328,
          instrumentalness: 0.13,
          liveness: 0.1,
          valence: 0.562,
          mode: 1,
          time_signature: 1,
          loudness: 0.10965,
          tempo: 0.6756399999999999
        },
        popularity: 95,
        artists: ['Billie Eilish'],
        title: 'bad guy',
        id: '2Fxmhks0bxGSBdJ92vM42m'
      },
      {
        audioFeatures: {
          danceability: 0.826,
          energy: 0.79,
          speechiness: 0.126,
          acousticness: 0.0073,
          instrumentalness: 0.0000099,
          liveness: 0.122,
          valence: 0.377,
          mode: 1,
          time_signature: 1,
          loudness: 0.043410000000000004,
          tempo: 0.52016
        },
        popularity: 84,
        artists: ['Stormzy', 'Burna Boy', 'Ed Sheeran'],
        title: 'Own It (feat. Ed Sheeran & Burna Boy)',
        id: '07s9NNOT0sZQp7TyolLLgu'
      },
      {
        audioFeatures: {
          danceability: 0.513,
          energy: 0.144,
          speechiness: 0.0457,
          acousticness: 0.926,
          instrumentalness: 0,
          liveness: 0.117,
          valence: 0.43,
          mode: 1,
          time_signature: 1,
          loudness: 0.15021,
          tempo: 0.670185
        },
        popularity: 62,
        artists: ['Maria Mena'],
        title: 'Home for Christmas',
        id: '3E0fq2gqsNbQo5paAuEcmc'
      },
      {
        audioFeatures: {
          danceability: 0.572,
          energy: 0.385,
          speechiness: 0.0308,
          acousticness: 0.371,
          instrumentalness: 0,
          liveness: 0.231,
          valence: 0.323,
          mode: 1,
          time_signature: 1,
          loudness: 0.06362,
          tempo: 0.47899500000000006
        },
        popularity: 89,
        artists: ['Lady Gaga', 'Bradley Cooper'],
        title: 'Shallow',
        id: '2VxeLyX666F8uXCJ0dZF8B'
      },
      {
        audioFeatures: {
          danceability: 0.893,
          energy: 0.748,
          speechiness: 0.0821,
          acousticness: 0.272,
          instrumentalness: 0.0000162,
          liveness: 0.093,
          valence: 0.867,
          mode: 0,
          time_signature: 1,
          loudness: 0.04299,
          tempo: 0.58979
        },
        popularity: 95,
        artists: ['Regard'],
        title: 'Ride It',
        id: '2tnVG71enUj33Ic2nFN6kZ'
      },
      {
        audioFeatures: {
          danceability: 0.421,
          energy: 0.669,
          speechiness: 0.127,
          acousticness: 0.151,
          instrumentalness: 0,
          liveness: 0.635,
          valence: 0.326,
          mode: 1,
          time_signature: 1,
          loudness: 0.047240000000000004,
          tempo: 0.87894
        },
        popularity: 71,
        artists: ['Justin Jesso', 'Seeb'],
        title: 'Bigger Than',
        id: '5X73AYzzEE5Di0JwcQKt9N'
      },
      {
        audioFeatures: {
          danceability: 0.548,
          energy: 0.816,
          speechiness: 0.0465,
          acousticness: 0.122,
          instrumentalness: 0,
          liveness: 0.335,
          valence: 0.557,
          mode: 1,
          time_signature: 1,
          loudness: 0.042089999999999995,
          tempo: 0.47695
        },
        popularity: 90,
        artists: ['Harry Styles'],
        title: 'Watermelon Sugar',
        id: '1e9oZCCiX42nJl0AcqriVo'
      },
      {
        audioFeatures: {
          danceability: 0.742,
          energy: 0.595,
          speechiness: 0.0792,
          acousticness: 0.00916,
          instrumentalness: 0,
          liveness: 0.0862,
          valence: 0.701,
          mode: 1,
          time_signature: 1,
          loudness: 0.06941,
          tempo: 0.61499
        },
        popularity: 66,
        artists: ['Stina Talling'],
        title: 'BlimE - Mer Enn God Nok',
        id: '2Sk1QwXo0FMb8kwWahCSMW'
      },
      {
        audioFeatures: {
          danceability: 0.64,
          energy: 0.648,
          speechiness: 0.187,
          acousticness: 0.124,
          instrumentalness: 0,
          liveness: 0.0802,
          valence: 0.548,
          mode: 0,
          time_signature: 1,
          loudness: 0.08113,
          tempo: 0.464885
        },
        popularity: 93,
        artists: ['Ed Sheeran', 'Khalid'],
        title: 'Beautiful People (feat. Khalid)',
        id: '4evmHXcjt3bTUHD1cvny97'
      },
      {
        audioFeatures: {
          danceability: 0.682,
          energy: 0.919,
          speechiness: 0.0875,
          acousticness: 0.256,
          instrumentalness: 0,
          liveness: 0.442,
          valence: 0.535,
          mode: 0,
          time_signature: 1,
          loudness: 0.0318,
          tempo: 0.47991
        },
        popularity: 87,
        artists: ['Lizzo'],
        title: 'Good as Hell',
        id: '3Yh9lZcWyKrK9GjbhuS0hR'
      },
      {
        audioFeatures: {
          danceability: 0.652,
          energy: 0.708,
          speechiness: 0.147,
          acousticness: 0.193,
          instrumentalness: 0,
          liveness: 0.0856,
          valence: 0.39,
          mode: 1,
          time_signature: 1,
          loudness: 0.04227,
          tempo: 0.47365999999999997
        },
        popularity: 61,
        artists: ['Katastrofe', 'OnklP', 'Kriss'],
        title: 'Hørt Det Før',
        id: '1YcE6OjlwY3ubaRoacuhKa'
      },
      {
        audioFeatures: {
          danceability: 0.693,
          energy: 0.678,
          speechiness: 0.0324,
          acousticness: 0.0154,
          instrumentalness: 0.00000605,
          liveness: 0.101,
          valence: 0.404,
          mode: 1,
          time_signature: 1,
          loudness: 0.07159,
          tempo: 0.51976
        },
        popularity: 90,
        artists: ['Kygo', 'Whitney Houston'],
        title: 'Higher Love',
        id: '6oJ6le65B3SEqPwMRNXWjY'
      },
      {
        audioFeatures: {
          danceability: 0.891,
          energy: 0.511,
          speechiness: 0.0586,
          acousticness: 0.132,
          instrumentalness: 0,
          liveness: 0.076,
          valence: 0.747,
          mode: 0,
          time_signature: 1,
          loudness: 0.0633,
          tempo: 0.530385
        },
        popularity: 67,
        artists: ['Isah', 'Dutty Dior'],
        title: 'HALLO',
        id: '1WjLQsbfei4kk9OaVxtfIB'
      },
      {
        audioFeatures: {
          danceability: 0.724,
          energy: 0.599,
          speechiness: 0.0546,
          acousticness: 0.205,
          instrumentalness: 0,
          liveness: 0.0712,
          valence: 0.6,
          mode: 1,
          time_signature: 1,
          loudness: 0.05669,
          tempo: 0.399875
        },
        popularity: 66,
        artists: ['Freddy Kalas'],
        title: 'Hey Ho',
        id: '0eekaX32hUmJgcinPCL1iZ'
      },
      {
        audioFeatures: {
          danceability: 0.405,
          energy: 0.646,
          speechiness: 0.0476,
          acousticness: 0.331,
          instrumentalness: 0,
          liveness: 0.103,
          valence: 0.17,
          mode: 0,
          time_signature: 1,
          loudness: 0.03206,
          tempo: 0.65109
        },
        popularity: 65,
        artists: ['Post Malone'],
        title: "Hollywood's Bleeding",
        id: '77Y7tccX9Hx5iClDr39uy9'
      },
      {
        audioFeatures: {
          danceability: 0.299,
          energy: 0.222,
          speechiness: 0.0323,
          acousticness: 0.877,
          instrumentalness: 0,
          liveness: 0.112,
          valence: 0.36,
          mode: 1,
          time_signature: 1,
          loudness: 0.09401,
          tempo: 0.40586
        },
        popularity: 60,
        artists: ['Kurt Nilsen', 'The Norwegian Radio Orchestra'],
        title: 'Himmel På Jord',
        id: '0WFyQgDzbQCfJuxcHW4Zrt'
      }
    ],
    playlistInfo: {
      id: '0owCF7vimN4OuZrrfrN5IL',
      name: 'VG-Lista Topp 40',
      owner: 'VG'
    }
  }
]

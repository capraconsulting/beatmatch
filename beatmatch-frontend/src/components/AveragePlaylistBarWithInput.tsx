import React, { useState } from 'react'
import { VictoryBar } from 'victory'
import InputWithButton from './InputWithButton'
import { PlaylistAverageAudioFeatures } from '../types'

const AveragePlaylistBarWithInput = () => {
  const [playlist, setPlaylist] = useState<PlaylistAverageAudioFeatures | null>(
    null
  )
  return (
    <div>
      <InputWithButton buttonText="Find playlist" onClick={setPlaylist} />
      {playlist && (
        <VictoryBar
          style={{ data: { fill: '#c43a31' } }}
          data={[
            { x: 1, y: playlist['acousticness'], label: 'acousticness' },
            { x: 2, y: playlist['danceability'], label: 'danceability' },
            { x: 3, y: playlist['energy'], label: 'energy' },
            {
              x: 4,
              y: playlist['instrumentalness'],
              label: 'instrumentalness'
            },
            { x: 5, y: playlist['liveness'], label: 'liveness' },
            { x: 6, y: playlist['loudness'], label: 'loudness' },
            { x: 7, y: playlist['mode'], label: 'mode' },
            { x: 8, y: playlist['speechiness'], label: 'speechiness' },
            //{ x: 9, y: playlist['tempo'], label: 'tempo' },
            //{ x: 10, y: playlist['time_signature'], label: 'time_signature' },
            { x: 11, y: playlist['valence'], label: 'valence' }
          ]}
        />
      )}
    </div>
  )
}

export default AveragePlaylistBarWithInput
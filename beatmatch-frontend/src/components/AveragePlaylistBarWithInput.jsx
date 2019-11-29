import React, { useState } from 'react'
import { VictoryChart, VictoryBar } from 'victory'
import InputWithButton from './InputWithButton'
import { calculateAverageDanceability } from '../utils/api'

const AveragePlaylistBarWithInput = props => {
  const [playlist, setPlaylist] = useState([])
  return (
    <div>
      {console.log(playlist)}
      <InputWithButton buttonText="Test" setPlaylist={setPlaylist} />
      {calculateAverage(playlist)}
      <VictoryBar
        style={{ data: { fill: '#c43a31' } }}
        data={[
          { x: 1, y: 2, label: 'danceability' },
          { x: 2, y: 4, label: 'acousticness' },
          { x: 3, y: 1, label: 'duration' }
        ]}
      />
    </div>
  )
}

export default AveragePlaylistBarWithInput

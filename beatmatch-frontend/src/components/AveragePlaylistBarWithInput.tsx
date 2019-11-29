import React, { useState } from 'react'
import { VictoryBar } from 'victory'
import InputWithButton from './InputWithButton'
import { Playlist } from '../types'

const AveragePlaylistBarWithInput = () => {
  const [playlist, setPlaylist] = useState<Playlist>([])
  return (
    <div>
      {console.log(playlist)}
      <InputWithButton buttonText="Find playlist" onClick={setPlaylist} />
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

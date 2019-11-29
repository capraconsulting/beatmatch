import React from 'react'
import { VictoryBar } from 'victory'
import { AudioFeatures } from '../../types'

type Props = {
  audioFeatures: AudioFeatures
}

const AudioFeaturesBarChart = ({ audioFeatures }: Props) => {
  return (
    <div>
      <VictoryBar
        style={{ data: { fill: '#c43a31' } }}
        data={Object.entries(audioFeatures)
          .filter(([key]) => key !== 'tempo')
          .map(([key, value], index) => ({
            x: index + 1,
            y: value,
            label: key
          }))}
      />
    </div>
  )
}

export default AudioFeaturesBarChart
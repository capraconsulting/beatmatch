import React from 'react'
import { VictoryBar } from 'victory'
import { AudioFeatures } from '../../types'
import { mapAudioFeatureToColor } from '../../utils/chartUtils'

type Props = {
  audioFeatures: AudioFeatures
}

const AudioFeaturesBarChart = ({ audioFeatures }: Props) => {
  console.log('audioFeatures', audioFeatures)
  return (
    <div>
      <VictoryBar
        style={{ data: { fill: ({datum}) => mapAudioFeatureToColor(datum.label) }}}
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

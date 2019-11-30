import React from 'react'
import { Playlist } from '../../types'
import AudioFeaturesBarChart from './AudioFeaturesBarChart'

type Props = {
  playlist: Playlist
}
const PlaylistVisualizer = ({ playlist }: Props) => (
  <div>
    <AudioFeaturesBarChart audioFeatures={playlist.aggregatedAudioFeatures} />
  </div>
)

export default PlaylistVisualizer

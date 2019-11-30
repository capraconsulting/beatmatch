import React from 'react'
import { Playlist } from '../types'
/**
 * TODO
 * two playlist ids
 * Show score
 * Update on playlist id change
 */

interface Props {
  playlist1: Playlist
  playlist2: Playlist
}

const Simularity = ({ playlist1, playlist2 }: Props) => {
  console.log(playlist1, playlist2)
  return (
    <div>
      <pre>
        * TODO: Two playlist ids * Show score * Update on playlist id change
      </pre>
    </div>
  )
}

export default Simularity

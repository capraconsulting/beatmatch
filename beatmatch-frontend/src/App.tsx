import React from 'react'
import './App.css'
import { Playlist } from './types'
import PlaylistSelector from './components/PlaylistSelector'
import { Divider } from '@material-ui/core'
import Simularity from './components/Simularity'
import PlaylistVisualizer from './components/charts/PlaylistVisualizer'

function App() {
  const [playlist1, setPlaylist1] = React.useState<Playlist | null>(null)
  const [playlist2, setPlaylist2] = React.useState<Playlist | null>(null)

  return (
    <div className="App">
      <PlaylistSelector
        buttonText="Playlist 1"
        onSelect={res => setPlaylist1(res)}
      />
      <PlaylistSelector
        buttonText="Playlist 2"
        onSelect={res => setPlaylist2(res)}
      />
      <Divider />
      {playlist1 && playlist2 && <Simularity />}
      {playlist1 && <PlaylistVisualizer playlist={playlist1} />}
      {playlist2 && <PlaylistVisualizer playlist={playlist2} />}
    </div>
  )
}

export default App

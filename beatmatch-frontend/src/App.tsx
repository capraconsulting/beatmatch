import React from 'react'
import './App.css'
import { Playlist, getMockPlaylist } from './types'
import PlaylistSelector from './components/PlaylistSelector'
import { Divider, Grid } from '@material-ui/core'
import Simularity from './components/Simularity'
import PlaylistVisualizer from './components/charts/PlaylistVisualizer'

const USE_MOCK1 = true
const USE_MOCK2 = true

function App() {
  const [playlist1, setPlaylist1] = React.useState<Playlist | null>(
    USE_MOCK1 ? getMockPlaylist() : null
  )
  const [playlist2, setPlaylist2] = React.useState<Playlist | null>(
    USE_MOCK2 ? getMockPlaylist() : null
  )

  return (
    <div className="App">
      <Grid container>
        <Grid item>
          <PlaylistSelector
            buttonText="Sett spilleliste 1"
            onSelect={res => setPlaylist1(res)}
          />
        </Grid>
        <Grid item>
          <PlaylistSelector
            buttonText="Sett spilleliste 1"
            onSelect={res => setPlaylist2(res)}
          />
        </Grid>
      </Grid>
      <Divider />

      {!playlist1 && !playlist2 && <div>Select a playlist</div>}

      {playlist1 && playlist2 && (
        <div>
          <Simularity {...{ playlist1, playlist2 }} />
          <Divider />
        </div>
      )}
      <Grid container>
        {playlist1 && (
          <Grid item>
            <PlaylistVisualizer playlist={playlist1} />
          </Grid>
        )}
        {playlist2 && (
          <Grid item>
            <PlaylistVisualizer playlist={playlist2} />
          </Grid>
        )}
      </Grid>
    </div>
  )
}

export default App

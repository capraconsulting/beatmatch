import React from 'react'
import { Playlist, getMockPlaylist } from './types'
import PlaylistSelector from './components/PlaylistSelector'
import { Grid, Container, Typography } from '@material-ui/core'
import Similarity from './components/Similarity'
import PlaylistVisualizer from './components/charts/PlaylistVisualizer'

const USE_MOCK1 = true
const USE_MOCK2 = true

function App() {
  const [playlist1, setPlaylist1] = React.useState<Playlist | null>(
    USE_MOCK1 ? getMockPlaylist()[0] : null
  )
  const [playlist2, setPlaylist2] = React.useState<Playlist | null>(
    USE_MOCK2 ? getMockPlaylist()[1] : null
  )

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <PlaylistSelector
            buttonText="Sett spilleliste 1"
            onSelect={res => setPlaylist1(res)}
          />
        </Grid>
        <Grid item xs={6}>
          <PlaylistSelector
            buttonText="Sett spilleliste 1"
            onSelect={res => setPlaylist2(res)}
          />
        </Grid>

        {!playlist1 && !playlist2 && (
          <Grid item xs={12}>
            Select a playlist
          </Grid>
        )}

        {playlist1 && playlist2 && (
          <Grid item xs={12}>
            <Similarity {...{ playlist1, playlist2 }} />
          </Grid>
        )}
        {playlist1 && (
          <Grid item xs={playlist1 && playlist2 ? 6 : 12}>
            <Typography variant="h4">{playlist1.playlistInfo.name}</Typography>
            <Typography variant="h5">
              {playlist1.playlistInfo.owner}
            </Typography>{' '}
            <div style={{ outline: '2px solid black ' }}>
              <PlaylistVisualizer playlist={playlist1} />
            </div>
          </Grid>
        )}
        {playlist2 && (
          <Grid item xs={playlist1 && playlist2 ? 6 : 12}>
            <Typography variant="h4">{playlist2.playlistInfo.name}</Typography>
            <Typography variant="h5">
              {playlist2.playlistInfo.owner}
            </Typography>{' '}
            <div style={{ outline: '2px solid black ' }}>
              <PlaylistVisualizer playlist={playlist2} />
            </div>
          </Grid>
        )}
      </Grid>
    </Container>
  )
}

export default App

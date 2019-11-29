import React from 'react'
import AudioFeaturesBarChart from './components/charts/AudioFeaturesBarChart'
import './App.css'
import { Provider, Consumer } from './StateContext'
import { getMockPlaylist, Playlist } from './types'
import InputWithButton from './components/InputWithButton'

function App() {
  const [playlist, setPlaylist] = React.useState<Playlist | null>(null)

  return (
    <div className="App">
      <InputWithButton
        buttonText="Sett playlist"
        onClick={res => setPlaylist(res)}
      />
      {playlist && (
        <Provider
          value={{
            playlistOne: playlist,
            playlistTwo: playlist
          }}
        >
          <Consumer>
            {({ playlistOne }) => (
              <AudioFeaturesBarChart
                audioFeatures={playlistOne.aggregatedAudioFeatures}
              />
            )}
          </Consumer>
        </Provider>
      )}
    </div>
  )
}

export default App

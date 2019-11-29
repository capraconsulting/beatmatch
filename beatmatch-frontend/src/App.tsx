import React from 'react'
import AudioFeaturesBarChart from './components/charts/AudioFeaturesBarChart'
import './App.css'
import { Provider, Consumer } from './StateContext'
import { getMockPlaylist } from './types'

function App() {
  return (
    <div className="App">
      <Provider
        value={{
          playlistOne: getMockPlaylist(),
          playlistTwo: getMockPlaylist()
        }}
      >
        <Consumer>
          {({ playlistOne }) => (
            <AudioFeaturesBarChart audioFeatures={playlistOne.average} />
          )}
        </Consumer>
      </Provider>
    </div>
  )
}

export default App

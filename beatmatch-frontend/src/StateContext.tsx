import React from 'react'
import { Playlist, getMockPlaylist } from './types'

interface State {
  playlistOne: Playlist
  playlistTwo: Playlist
}

const initialContextState = {
  playlistOne: getMockPlaylist(),
  playlistTwo: getMockPlaylist()
}

export const { Provider, Consumer } = React.createContext<State>(
  initialContextState
)

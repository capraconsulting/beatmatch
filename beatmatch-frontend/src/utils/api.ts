import { AudioFeatures, Playlist } from '../types'

export async function getPlaylist(playlistId: String): Promise<Playlist> {
  const url = `http://localhost:3000/playlist/${playlistId}`
  const response = await fetch(url)
  const json = await response.json()
  return json
}

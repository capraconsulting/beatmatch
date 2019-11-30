import { Similarity, Playlist } from '../types'

export async function getPlaylist(playlistId: String): Promise<Playlist> {
  const url = `http://localhost:3000/playlist/${playlistId}`
  const response = await fetch(url)
  const json = await response.json()
  return json
}

export async function getSimilarity(
  playlistId1: String,
  playlistId2: String
): Promise<Similarity> {
  const url = `http://localhost:3000/similarity?firstPlaylistId=${playlistId1}&secondPlaylistId=${playlistId2}`
  const response = await fetch(url)
  const json = await response.json()
  return json
}

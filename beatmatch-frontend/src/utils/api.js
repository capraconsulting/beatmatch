export async function getAudioFeaturesForPlaylist(playlistId) {
    const url = `http://localhost:3000/playlist/${playlistId}`;
    const response = await fetch(url)
    const json = await response.json();
    return json;
}
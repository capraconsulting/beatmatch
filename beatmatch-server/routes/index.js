import express from 'express'
import cors from 'cors'
import { getPlaylistWithAudioFeatures } from '../helpers/spotify.js'
import { getAverageAudioFeatures, getSimilarity } from '../helpers/logic.js'

const router = express.Router()
router.use(
  cors({
    origin: '*'
  })
)

/* GET songs for playlist. */
router.get('/playlist/:playlistId', async (req, res, next) => {
  const playlist = await getPlaylistWithAudioFeatures(req.params.playlistId)
  const aggregatedAudioFeatures = getAverageAudioFeatures(playlist)
  return res.send({
    aggregatedAudioFeatures,
    tracks: playlist.tracks,
    playlistInfo: playlist.playlistInfo
  })
})

/* GET similarity score for two playlists */
router.get('/similarity', async (req, res, next) => {
  const ids = [req.query.firstPlaylistId, req.query.secondPlaylistId]

  console.log(`[/similarity]: ${ids[0]} ${ids[1]}`)

  const [p1, p2] = await Promise.all(
    ids.map(async id =>
      getAverageAudioFeatures(await getPlaylistWithAudioFeatures(id))
    )
  )
  const similarity = getSimilarity(p1, p2)
  return res.send({
    similarity
  })
})

module.exports = router

import express from "express";
import cors from "cors";
import { getPlaylist } from "../helpers/spotify.js";
import { getAggregatedAudioFeatures, getSimilarity } from "../helpers/logic.js";

const router = express.Router();
router.use(
  cors({
    origin: "*"
  })
);

/* GET songs for playlist. */
router.get("/playlist/:playlistId", async (req, res, next) => {
  const playlist = await getPlaylist(req.params.playlistId);
  const aggregatedAudioFeatures = getAggregatedAudioFeatures(playlist);
  return res.send({
    aggregatedAudioFeatures,
    tracks: playlist.tracks
  });
});

/* GET similarity score for two playlists */
router.get("/similarity", async (req, res, next) => {
  const ids = [req.query.firstPlaylistId, req.query.secondPlaylistId];
  const [p1, p2] = await Promise.all(
    ids.map(async id => getAggregatedAudioFeatures(await getPlaylist(id)))
  );
  const similarity = getSimilarity(p1, p2);
  return res.send({
    similarity
  });
});

module.exports = router;

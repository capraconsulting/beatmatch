var cosineSimilarity = require("compute-cosine-similarity");
var express = require("express");
var router = express.Router();
var Spotify = require("node-spotify-api");
var config = require("../config.js");
var spotify = new Spotify({
  id: config.spotify.client_id,
  secret: config.spotify.secret
});

/* GET aggregated values for a single playlist. */
router.get("/score/:playlist_id", function(req, res, next) {
  getAggregatedFeaturesForPlaylist(req.params.playlist_id, function(features) {
    return res.send(features);
  });
});

/* GET simmilarity score for two playlists */
router.get("/similarity", function(req, res, next) {
  getAggregatedFeaturesForPlaylist(req.query.firstPlaylistId, function(p1) {
    getAggregatedFeaturesForPlaylist(req.query.secondPlaylistId, function(p2) {
      const similarity = getSimilarity(p1, p2);
      return res.send({ similarity });
    });
  });
});

/* Calculate cosine similarity between two sets of aggregated values */
function getSimilarity(p1, p2) {
  const [s1, s2] = [p1, p2].map(p => Object.values(p));
  return cosineSimilarity(s1, s2);
}

async function getAggregatedFeaturesForPlaylist(playlist_id, cb) {
  spotify
    .request(`${config.spotify.baseUrl}/playlists/${playlist_id}`)
    .then(function(data) {
      var track_ids = getTrackIds(data.tracks.items);
      var track_ids_string = track_ids.join(",");
      spotify
        .request(
          `${config.spotify.baseUrl}/audio-features/?ids=${track_ids_string}`
        )
        .then(function(data2) {
          cb(getAggregatedValues(data2));
        })
        .catch(function(err) {
          console.error("Error occurred: " + err);
        });
    })
    .catch(function(err) {
      console.error("Error occurred: " + err);
    });
}

const getAggregatedValues = playlist => {
  const filtered = playlist["audio_features"].filter(t => t !== null);
  const keys = [
    "danceability",
    "energy",
    "speechiness",
    "acousticness",
    "instrumentalness",
    "liveness",
    "valence"
  ]; // 'tempo'
  return filtered.reduce((acc, curr) => {
    keys.map(key => {
      if (key in acc) {
        acc[key] += curr[key] / filtered.length;
      } else {
        acc[key] = curr[key] / filtered.length;
      }
    });
    return acc;
  }, {});
};

function getTrackIds(track_items) {
  var track_ids = [];
  for (var i = 0; i < track_items.length; i++) {
    var track_id = track_items[i].track.id;
    track_ids.push(track_id);
  }
  return track_ids;
}

module.exports = router;

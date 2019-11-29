var express = require('express');
var router = express.Router();
var Spotify = require('node-spotify-api');
var config = require('../config.js');
var spotify = new Spotify({
  id: config.spotify.client_id,
  secret: config.spotify.secret
});


/* GET songs for playlist. */
router.get('/playlist/:playlist_id', function(req, res, next) {
  spotify
  .request(`${config.spotify.baseUrl}/playlists/${req.params.playlist_id}`)
  .then(function(data) {
    res.send(getTrackIds(data.tracks.items));

  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });
});

/* GET single song */
router.get('/song/:songid', function(req, res, next) {
  getSong(req.params.songid, function(err, data) {
    if (err) {
      throw err;
    }
    return res.send(data);
  });
});

/* GET audio features for song */
router.get('/song/features/:songid', function(req, res, next) {
  getSongFeatures(req.params.songid, function(err, data) {
    if (err) {
      throw err;
    }
    return res.send(data);
  })
});

function getFeaturesForTracks(track_ids, cb) {
  
  async.forEach(track_ids, function(track_id, async_cb) {
    
  }, function(err) {
    if (err) {
      cb(err);
    }
    cb();
  });
}

function getTrackIds(track_items) {
  var track_ids = [];
  for (var i = 0; i < track_items.length; i++) {
    var track_id = track_items[i].track.id;
    console.log(track_id);
    track_ids.push(track_id);
  }
  return track_ids;
}

function getSong(id, cb) {
  spotify
  .request(`${config.spotify.baseUrl}/tracks/${id}`)
  .then(function(data) {
    cb(null, data);
  })
  .catch(function(err) {
    cb(err);
  });
}



function getSongFeatures(id, cb) {
  spotify
  .request(`${config.spotify.baseUrl}/audio-features/${id}`)
  .then(function(data) {
    cb(null, data);
  })
  .catch(function(err) {
    cb(err);
  });
}

module.exports = router;

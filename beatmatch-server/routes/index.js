var express = require('express');
var cors = require('cors');
var router = express.Router();
var Spotify = require('node-spotify-api');
var config = require('../config.js');
var async = require('async');
var spotify = new Spotify({
  id: config.spotify.client_id,
  secret: config.spotify.secret
});

router.use(cors({
  origin: '*'
}));





function splitArrayIntoChunks(array) {
  console.log("array size")
  console.log(array.length)

  var i,j,temparray,chunk = 100;
  var returnarray = [];
  for (i=0,j=array.length; i<j; i+=chunk) {
      temparray = array.slice(i,i+chunk);
      returnarray.push(temparray);
  }
  console.log("returnarray")
  return returnarray;
}


function getPlaylistTrackItems(playlist_id, offset, cb_done) {

  // get the items in the playlist based on offsets, e.g. from 0-99 and 100-136
  var getPlaylistTrackItemsUrl = `${config.spotify.baseUrl}/playlists/${playlist_id}/tracks?offset=${offset * 100}`;
  console.log(getPlaylistTrackItemsUrl);

  spotify
  .request(getPlaylistTrackItemsUrl)
  .then(function(tracks) {
    // track_items is either 100 or 36
    var track_items = tracks.items;
    console.log("track items length")
    console.log(track_items.length)
    track_items = track_items.slice(offset * 100);
    var track_batches = splitArrayIntoChunks(track_items);


    // get audio features in chunks of 100
    var track_items_all = [];
    async.forEach(track_batches, function(track_items, cb) {
      getAudioFeaturesForTracks(track_items, function(err, mergedSongs) {
        if (err) {cb(err);}
        console.log("mergedSongs")
        console.log(mergedSongs.length)
        track_items_all = track_items_all.concat(mergedSongs);
        cb();
      })
    }, function(err) {
      if (err) {throw err;}
      cb_done(null, track_items_all);
    })
  })
  .catch(function(err) {
    cb_done(err);
  });
}

function getPlaylist(playlist_id, cb_done) {
  spotify
  .request(`${config.spotify.baseUrl}/playlists/${playlist_id}`)
  .then(function(tracks) {
    var playlist_data = {};
    playlist_data["total"] = tracks.tracks.total;
    console.log(tracks.tracks.total)
    console.log("playlist_data")

    console.log(playlist_data)
    cb_done(null, playlist_data);
  })
  .catch(function(err) {
    cb_done(err);
  });
}

function getOffsetsFromTotal(total) {
  var offsets = [];
  var totalAmounts = Math.ceil(total/100);
  
  for (var i = 0; i < totalAmounts; i++) {
    offsets.push(i);
  } 
  return offsets;
}


/* GET songs for playlist. */
router.get('/playlist/:playlist_id', function(req, res, next) {

  getPlaylist(req.params.playlist_id, function(err, playlist_data) {
    if (err) {throw err;}

    // Get offsets for lenght of arraylist e.g. offsets for 136 is [0, 1]
    var offsets = getOffsetsFromTotal(playlist_data.total);
    console.log("total number of tracks: ", playlist_data.total)

    var track_items_all = [];
    async.forEach(offsets, function(offset, cb) {
      getPlaylistTrackItems(req.params.playlist_id, offset, function(err, track_items) {
        if (err) {cb(err);}
        track_items_all = track_items_all.concat(track_items);
        cb();
      });
    }, function(err) {
      console.log("total number of non-local tracks: ", track_items_all.length)
      if (err) {throw err;}
      return res.send({
        metadata: playlist_data,
        tracks: track_items_all
      });
    });


    
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

function mergeSongsWithAudioFeatures(track_items, audio_features) {
  var mergedSongs = [];
  for (var i = 0; i < track_items.length; i++) {
    for (var j = 0; j < audio_features.length; j++) {
      if (audio_features[j] && track_items[i].track && (track_items[i].track.id == audio_features[j].id)) {

        var newTrackItem = {};
        newTrackItem["popularity"] = track_items[i].track.popularity;
        newTrackItem["name"] = track_items[i].track.name;
        newTrackItem["artists"] = track_items[i].track.artists;
        var track_data = {
          "track_data": newTrackItem
        }

        var mergedSong = {...track_data, ...audio_features[j]};
        //var mergedSong = {...track_items[i], ...audio_features[j]};
        mergedSongs.push(mergedSong);
      }
    }
  }
  return mergedSongs;
}

function getAudioFeaturesForTracks(track_items, cb) {
  var track_ids = getTrackIds(track_items);
  var track_ids_string = track_ids.join(",");
  spotify
  .request(`${config.spotify.baseUrl}/audio-features/?ids=${track_ids_string}`)
  .then(function(audio_features) {
    var mergedSongs = mergeSongsWithAudioFeatures(track_items, audio_features.audio_features);
    cb(null, mergedSongs);
  })
  .catch(function(err) {
    cb(err);
  });
}

function getTrackIds(track_items) {
  var track_ids = [];
  for (var i = 0; i < track_items.length; i++) {
    if (track_items[i].track) {
      var track_id = track_items[i].track.id;
      track_ids.push(track_id);
    }
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

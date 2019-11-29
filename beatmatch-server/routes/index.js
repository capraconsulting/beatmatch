var express = require('express');
var router = express.Router();
var Spotify = require('node-spotify-api');

/* GET home page. */
router.get('/', function(req, res, next) {

  var spotify = new Spotify({
    id: "***REMOVED***",
    secret: "***REMOVED***"
  });
  
  spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    res.send(data);
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });
});

module.exports = router;

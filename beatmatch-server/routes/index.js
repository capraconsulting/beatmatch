var express = require('express');
var router = express.Router();
var Spotify = require('node-spotify-api');

/* GET home page. */
router.get('/', function(req, res, next) {

  var spotify = new Spotify({
    id: "1996150779af484bbb94f2c7cf30299c",
    secret: "6ccd6ac05a7b404d86ca231449bfbbc8"
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

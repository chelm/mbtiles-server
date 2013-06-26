var app = require('express').createServer(),
  MBTiles = require('mbtiles');

var TILES = '{YOURTILES}.mbtiles';

new MBTiles(__dirname + '/' + TILES, function(err, mbtiles) {
  if (err) throw err;
  app.get('/:z/:x/:y.*', function(req, res) {
    // .getTile() expects XYZ.
    console.log(req.param('y'), req.param('x'), req.param('z'))
    mbtiles.getTile(req.param('z'), req.param('x'), req.param('y'), function(err, tile, headers) {
      if (err) {
        res.send('Tile rendering error: ' + err + '\n');
      } else {
        res.header("Content-Type", "image/png")
        res.send(tile);
      }
    });
  });


console.log('Listening on port: ' + 3000);
app.listen(3000);

});

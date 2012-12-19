var app = require('express').createServer(),
  MBTiles = require('mbtiles');

var TILES = '{YOURTILES}.mbtiles';

new MBTiles(__dirname + '/' + TILES, function(err, mbtiles) {
  if (err) throw err;
  app.get('/:y/:x/:z.*', function(req, res) {
    // .getTile() expects XYZ.
    console.log(req.param('y'), req.param('x'), req.param('z'))
    mbtiles.getTile(req.param('y'), req.param('x'), req.param('z'), function(err, tile, headers) {
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

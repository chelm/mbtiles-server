var express = require("express"),
    app = express(),
    MBTiles = require('mbtiles');

if(process.argv.length < 3) {
  console.log("Error! Missing TILES filename.\nUsage: node server.js TILES");
  process.exit(1);
}

var TILES = String(process.argv[2]).replace(/\.mbtiles/,'') + '.mbtiles';

new MBTiles(__dirname + '/' + TILES, function(err, mbtiles) {
  if (err) throw err;
  app.get('/:y/:x/:z.*', function(req, res) {
    // .getTile() expects XYZ.
    console.log(req.param('z'), req.param('x'), req.param('y'));
    mbtiles.getTile(req.param('z'), req.param('x'), req.param('y'), function(err, tile, headers) {
      if (err) {
        res.send('Tile rendering error: ' + err + '\n');
      } else {
        res.header("Content-Type", "image/png");
        res.send(tile);
      }
    });
  });


  console.log('Listening on port: ' + 3000);
  app.listen(3000);

});

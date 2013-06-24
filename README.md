mbtiles-server
==============

Wow. It's really easy to serve mbtiles files without having to host them with Mapbox, just serve them yourself.

First, just create an mbtiles file (via Tilemill probably cause it's freaking amazing), then:

1. `npm install`
1. `node server.js TILEFILE [PORT]`

Visit [http://localhost:3000/3/1/2.png](http://localhost:3000/3/1/2.png)

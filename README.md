mbtiles-server
==============

Wow. It's really easy to serve mbtiles files without having to host them with Mapbox, just serve them yourself.  

First, just create an mbtiles (via Tilemill probably cause it's freaking amazing) file and change line 4 of server.js to match your mbtile filename. 

Then: 

> >npm install

> >node server.js 

visit [http://localhost:3000/3/1/2.png](http://localhost:3000/3/1/2.png)

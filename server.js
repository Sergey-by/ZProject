var express = require('express'),
	server = express(),
    port = 8558,
    gal = require('./models/gallery.js');;
    
// server.use(express.logger('dev'));
// server.use(express.bodyParser());
// server.use(express.query());
// server.use(express.methodOverride());
// server.use(express.cookieParser());

server.get('/:any_text', function (req,res, next) {
  console.log('Reseived simple get request');
  gal.showGallery(req, res);
});

server.listen(port);
console.log('Listening on port ', port);
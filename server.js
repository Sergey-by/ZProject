var express = require('express'),
    port = 8558;
    
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.query());
app.use(express.methodOverride());
app.use(express.cookieParser());

app.get('/', function (req,res, next) {
  console.log('Entered.');
});

app.listen(port);
console.log('Listening on port ', port);
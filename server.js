var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist'));
app.use(function(req, res){
  res.sendFile('dist/index.html');
});

var server = app.listen(process.env.port || 3000, function() {
  console.log('Listening on port %d', server.address().port);
});

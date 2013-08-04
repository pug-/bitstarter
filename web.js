var express = require('express');
var app = express();
app.use(express.logger());
var string1 = "Hello world from string variable";
app.get('/', function(request, response) {
  response.send(string1);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());
var string1 = "Hello world from string variable";
var buffer1 = fs.readFileSync("index.html");
var string2 = buffer1.toString();
app.get('/', function(request, response) {
  response.send(string2);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

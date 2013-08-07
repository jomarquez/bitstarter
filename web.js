var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs');
var outfile = "index.html";
var encoding = 'utf8';
var content = fs.readFileSync(outfile, encoding);
app.get('/', function(request, response) {
  response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var fs = require('fs');
var outfile = "hello.txt";
var out = "Modify this script to write out something different.\n";
fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);

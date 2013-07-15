var express = require('express');

//var fs = require('fs');

var app = express.createServer(express.logger());

//var buffer = new Buffer(fs.readFileSync("index.html"),"utf-8");

app.get('/', function(request, response) {
  //response.send(buffer.toString("utf-8"));
    response.send("no esta funcionando este bisne");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


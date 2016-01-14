var path = require("path");
var express = require("express");
var app = express();

app.use(express.static(path.join(__dirname, "./client")));

app.listen(8000, function() {
 console.log("listening on port 8000");
})
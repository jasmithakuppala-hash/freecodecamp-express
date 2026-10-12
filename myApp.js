
var express = require("express");
var app = express();

console.log("Hello World");

// Serve static assets from the public folder
app.use("/public", express.static(__dirname + "/public"));

// Serve the HTML page
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

module.exports = app;

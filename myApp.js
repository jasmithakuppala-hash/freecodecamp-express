
var express = require("express");
var app = express();

console.log("Hello World");

// Serve static files
app.use("/public", express.static(__dirname + "/public"));

// Serve HTML page
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// Serve JSON response
app.get("/json", function(req, res) {
  res.json({ message: "Hello json" });
});

module.exports = app;

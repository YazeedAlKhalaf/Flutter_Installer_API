var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var latestRoute = require("./routes/latest.route");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/latest", latestRoute);

module.exports = app;

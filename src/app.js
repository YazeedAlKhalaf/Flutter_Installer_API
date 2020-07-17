var express = require("express");
var path = require("path");
var latestReleaseRoute = require("./routes/latestRelease.route");
var mainRoute = require("./routes/main.route");

var app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.disable("x-powered-by");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/latest_release", latestReleaseRoute);
app.use("", mainRoute);

app.use(function (req, res, next) {
  res.status(404);
  res.json({
    error: {
      message: "Not found",
      statusCode: res.statusCode,
    },
  });
});

module.exports = app;

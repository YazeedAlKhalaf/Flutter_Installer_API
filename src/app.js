var express = require("express");

var latestReleaseRoute = require("./routes/latestRelease.route");

var app = express();

app.disable("x-powered-by");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/latest_release", latestReleaseRoute);

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

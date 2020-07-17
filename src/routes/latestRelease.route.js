var express = require("express");
var router = express.Router();

var latestReleaseController = require("../controllers/latestRelease.controller");

/* GET latest release */
router.get("/", latestReleaseController.getLatestReleases);

module.exports = router;

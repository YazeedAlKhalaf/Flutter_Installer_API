var express = require("express");
var router = express.Router();
var mainController = require("../controllers/main.controller");

/* GET Main Home Page */
router.get("/", mainController.getHomePage);

module.exports = router;

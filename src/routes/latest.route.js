var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({
    latest: {
      android_studio: {
        name: "Android Studio",
        version: "4.1",
        download_links: {
          windows: "",
          linux: "",
          macos: "",
        },
      },
      visual_studio_code: {
        name: "Visual Studio Code",
        version: "1.47",
        download_links: {
          windows: "",
          linux: "",
          macos: "",
        },
      },
      intellij_idea: {
        name: "IntelliJ IDEA",
        version: "2020.1.3",
        download_links: {
          windows: "",
          linux: "",
          macos: "",
        },
      },
    },
  });
});

module.exports = router;

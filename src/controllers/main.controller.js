exports.getHomePage = function (req, res, next) {
  var data = {
    title: "Flutter Installer API",
    about:
      "This website is an API for Flutter Installer. A tool made by Yazeed AlKhalaf to install Flutter easily on any desktop! The API has one endpoint for getting the latest version of Flutter needed software.",
  };
  res.render("index", data);
};

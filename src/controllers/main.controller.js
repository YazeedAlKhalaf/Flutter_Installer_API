exports.getHomePage = function (req, res, next) {
  var data = {
    title: "Flutter Installer API",
    message:
      "This website is an API for Flutter Installer. A tool made by Yazeed AlKhalaf to install Flutter easily on any desktop! The API has one endpoint for getting the latest version of Flutter needed software.",
    apiEndpoint1: "Get Latest Release of Apps: api/v1/latest-release",
  };
  res.render("index", data);
};

const axios = require("axios");

module.exports = {
  transformDependencies() {},
  transformDevDependencies() {},
  returnLatestVersion() {},

  getLatestVersion(event) {
    // Make a request for a user with a given ID
    axios
      .get(`https://api.npms.io/v2/search\?q\=${event.package_name}`)
      .then(function (response) {
        // handle success
        console.log(
          "package name: ",
          response.data.results[0].package.name +
            "  " +
            response.data.results[0].package.version
        );
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  },
};

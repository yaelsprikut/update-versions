const axios = require("axios");

async function callNpmRegistryApi(event) {
  // Make a request for a user with a given ID
  const apiResponse = await axios
    .get(`https://api.npms.io/v2/search\?q\=${event.package_name}`)
    .then(function (response) {
      const updateJsonArray = [];
      updateJsonArray.push({
        [response.data.results[0].package
          .name]: `^${response.data.results[0].package.version}`,
      });
      return response.data.results[0].package.version;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function (response) {
      // always executed
      return response;
    });

  return apiResponse;
}

export function getLatestVersion(event) {
    const updatedDependencyObj = {};
    const updatedDevDependencyObj = {};
    Object.entries(event.dependencies).forEach(async ([key, value]) => {
      const response = await callNpmRegistryApi({ package_name: key });
      updatedDependencyObj[key] = `^${response}`;
    });

    Object.entries(event.devDependencies).forEach(async ([key, value]) => {
      const response = await callNpmRegistryApi({ package_name: key });
      updatedDevDependencyObj[key] = `^${response}`;
    });

    return {
      dependencies: updatedDependencyObj,
      devDependencies: updatedDevDependencyObj,
    };
}
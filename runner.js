const {
  dataTypeValidation,
  dataInputValidation,
  handleFailure,
  dataHandler,
} = require("./method");
const apiFetcher = require("./masterStep");
const testData = require("./testData");

const fetcher = new apiFetcher("https://jsonplaceholder.cypress.io", "/posts");

//Runner
fetcher.getData("/1").then(dataTypeValidation, handleFailure);
fetcher.postData(testData).then(dataInputValidation, handleFailure);

const testData = require("./testData");
const apiFetcher = require("./masterStep");

const fetcher = new apiFetcher("https://jsonplaceholder.cypress.io");

const dataTypeValidation = async (endpoint, params) => {
  fetcher.getData(endpoint, params).then((result) => {
    const { userId, id, title, body } = result;

    const numberData = { userId: userId, id: id };
    const stringData = { title: title, body: body };

    const numberKeys = Object.keys(numberData);
    const stringKeys = Object.keys(stringData);

    for (let index = 0; index < numberKeys.length; index++) {
      //Check type data of number
      let dataType = typeof numberData[numberKeys[index]];
      if (dataType === "number") {
        console.log(`data type of ${numberKeys[index]} is number`);
      } else {
        console.log(
          `expected data type of ${numberKeys[index]} number, instead getting ${dataType}`
        );
      }

      //Check type data of string
      dataType = typeof stringData[stringKeys[index]];
      if (dataType === "string") {
        console.log(`data type of ${stringKeys[index]} is string`);
      } else {
        console.log(
          `expected data type of ${stringKeys[index]} string, instead getting ${dataType}`
        );
      }
    }
  });
};

const dataInputValidation = async (endpoint, payload) => {
  fetcher.postData(endpoint, payload).then((result) => {
    const data = payload;
    delete result.id;

    const actualData = Object.entries(result).toString();
    const expectedData = Object.entries(data).toString();

    if (actualData === expectedData) {
      console.log(`testData and responseMatch`);
    } else {
      console.log(
        `data does not match actual : ${JSON.stringify(
          response
        )}, \n expected : ${JSON.stringify(data)}`
      );
    }
  });
};

module.exports = {
  dataTypeValidation,
  dataInputValidation,
};

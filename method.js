const testData = require("./testData");

const dataTypeValidation = (result) => {
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
};

const dataInputValidation = (result) => {
  const payload = testData;
  delete result.id;

  const response = Object.entries(result).toString();
  const data = Object.entries(payload).toString();

  if (data === response) {
    console.log(`testData and responseMatch`);
  } else {
    console.log(
      `data does not match actual : ${JSON.stringify(
        result
      )}, \n expected : ${JSON.stringify(payload)}`
    );
  }
};

const dataHandler = (data) => {
  return data;
};

const handleFailure = (rejectionReason) => {
  return rejectionReason;
};

module.exports = {
  dataTypeValidation,
  dataInputValidation,
  handleFailure,
  dataHandler,
};

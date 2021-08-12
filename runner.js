const { dataTypeValidation, dataInputValidation } = require("./method");

const { payload } = require("./testData");
//Runner
dataInputValidation("/posts", payload);
dataTypeValidation("/posts", "/1");

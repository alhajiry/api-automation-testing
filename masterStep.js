const fetch = require("node-fetch");

class ApiFetcher {
  constructor(baseUrl, endpoint) {
    this.baseUrl = baseUrl;
    this.endpoint = endpoint;
    this.url = baseUrl + endpoint;
  }

  async getData(params) {
    const data = this.url + params;

    const response = await fetch(data, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((err) => err.message);

    if (response.ok) {
      return response.json();
    } else {
      console.log(`response is ${response.status}!`);
    }
  }

  async postData(payload) {
    const response = await fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).catch((err) => err.message);

    if (response.ok) {
      return response.json();
    } else {
      console.log(`response is ${response.status}!`);
    }
  }
}

module.exports = ApiFetcher;

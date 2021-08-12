const fetch = require("node-fetch");

class ApiFetcher {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async getData(endpoint, params = "") {
    const url = this.baseUrl + endpoint + params;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        return await response.json();
      } else {
        throw new Error(`Fetch failed, response is : ${response.status}`); //had to create new error since fetch method only throw network error
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  async postData(endpoint, payload) {
    const url = this.baseUrl + endpoint;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        return await response.json();
      } else {
        throw new Error(`Fetch failed, response is : ${response.status}`);
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = ApiFetcher;

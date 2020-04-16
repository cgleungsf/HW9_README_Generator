const axios = require("axios");


const api = {
  async getUser(username) {

    const queryUrl = `https://api.github.com/users/${username}`;

    var data = await axios

      .get(queryUrl)

      .then(({ data }) => {
        let gitInfo = {};

        gitInfo.login = data.login;
        gitInfo.avatar_url = data.avatar_url;
        gitInfo.email = "email placeholder";
        return gitInfo;
      });
    return data;
  }
};

module.exports = api;

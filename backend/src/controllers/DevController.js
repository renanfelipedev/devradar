const axios = require('axios');
const Dev = require('../models/Dev');

const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  async store(request, response) {
    const { github_username, techs, latitude, longitude } = request.body;

    try {
      let dev = await Dev.findOne({ github_username });
      if (!dev) {
        const apiResponse = await axios(
          `https://api.github.com/users/${github_username}`
        );

        const { name = login, avatar_url, bio } = apiResponse.data;
        const location = {
          type: 'Point',
          coordinates: [latitude, longitude]
        };

        const techsArray = parseStringAsArray(techs);

        dev = await Dev.create({
          name,
          github_username,
          bio,
          avatar_url,
          techs: techsArray,
          location
        });
      }

      return response.json(dev);
    } catch (error) {
      console.log(error);

      return response.send({ error });
    }
  },

  async index(request, response) {
    try {
      const devs = await Dev.find({});

      return response.json(devs);
    } catch (error) {
      console.log(error);
      return response.send({ error });
    }
  }
};

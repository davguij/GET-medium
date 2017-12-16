const http = require('axios');

const mediumFetcher = async username => {
  const req = await http.get(`https://medium.com/@${username}/latest`, {});
  const posts = req.data;
  const json = JSON.parse(posts.replace('])}while(1);</x>', ''));
  return json.payload;
};

module.exports = { mediumFetcher };

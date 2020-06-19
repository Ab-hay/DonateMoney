require('dotenv').config();

let config = {};
config = {
  accessKeyId: process.env.KEY_ID,
  secretAccessKey: process.env.ACCESS_KEY,
  region: "us-east-2",
};

function load() {
  return Promise.resolve(config);
}

module.exports = {
  default: config,
  config: config,
};
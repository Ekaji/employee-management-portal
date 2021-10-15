const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  mongodbURI: process.env.MONGODB_URI,
  cloudName: process.env.CLOUD_NAME,
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET,
};

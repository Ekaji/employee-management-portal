const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  mongodbURI: process.env.MONGODB_URI,
};

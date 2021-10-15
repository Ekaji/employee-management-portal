const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const { cloudName, apiKey, apiSecret } = require("../config");

cloudinary.config({ cloudName, apiKey, apiSecret });

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "demo",
  },
  allowedFormats: ["jpg", "png"],
  transformation: [{ width: 500, height: 500, crop: "limit" }],
});

const parser = multer({ storage });

module.exports = parser;

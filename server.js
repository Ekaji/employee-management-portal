const express = require("express");
const CORS = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const { mongodbURI } = require("./config"); // set this up in heroku
const employeRoutes = require("./routes/employe");

const app = express();

app.use(CORS());
app.use(express.json());

mongoose
  .connect(`${mongodbURI}`)
  .then(() => {
    console.log("sucessfully connected to mongodb");
  })
  .catch((error) => {
    console.error(error);
  });

const PORT = process.env.PORT || 3001;

app.use(express.static(path.resolve(__dirname, "./client/build")));

app.use("/api/employe", employeRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});

const express = require("express");
const CORS = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const { mongodbURI } = require("./config"); // set this up in heroku
const Employe = require("./models/employe");

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

app.post("/api/employe", (req, res) => {
  const employe = new Employe({
    name: req.body.name,
    address: req.body.address,
    email: req.body.email,
    phone: req.body.phone,
    gender: req.body.gender,
    photo: req.body.photo,
    department: req.body.department,
    employment_date: req.body.employment_date,
    departure_date: req.body.departure_date,
    wage: req.body.wage,
    userID: req.body.userID,
  });
  employe
    .save()
    .then(() => {
      res.status(201).json({ message: "item created sucessfully" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
});

app.get("/api/employe", (req, res) => {
  Employe.find()
    .then((employe) => {
      res.status(200).json({ employe });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
});

app.get("/api/employe/:id", (req, res) => {
  Employe.findOne({
    _id: req.params.id,
  })
    .then((employe) => {
      res.status(200).json({ employe });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
});

app.get("/api", (req, res) => {
  res.json({ message: "hello world" });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});

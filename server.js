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
    name: {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      middle_name: req.body.middle_name,
    },
    address: req.body.address,
    email: req.body.email,
    phone: req.body.phone,
    gender: req.body.gender,
    photo: req.body.photo,
    department: req.body.department,
    employment_date: req.body.employment_date,
    termination_date: req.body.termination_date,
    account_details: {
      account_name: req.body.account_name,
      account_number: req.body.account_number,
      bank_name: req.body.bank_name,
    },
    wage: req.body.wage,
    // userID: req.body.userID,
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

app.delete("/api/employe/:id", (req, res) => {
  Employe.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({ message: "Deleated" }); // Success
    })
    .catch((error) => {
      console.log(error); // Failure
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

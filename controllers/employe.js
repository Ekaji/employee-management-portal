const Employe = require("../models/employe");

exports.createEmploye = (req, res) => {
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
};

exports.fetchEmploye = (req, res) => {
  Employe.find()
    .then((employe) => {
      res.status(200).json({ employe });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.fetchOneEmploye = (req, res) => {
  Employe.findOne({
    _id: req.params.id,
  })
    .then((employe) => {
      res.status(200).json({ employe });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.deleteOneEmploye = (req, res) => {
  Employe.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({ message: "Deleated" }); // Success
    })
    .catch((error) => {
      res.status(200).json({ message: error }); // Failure
    });
};

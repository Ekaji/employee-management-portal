const mongoose = require("mongoose");

const employeSchema = mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  gender: { type: String, required: false },
  photo: { type: String, required: false },
  department: { type: String, required: true },
  employment_date: { type: String, required: true },
  departure_date: { type: String, required: true },
  wage: { type: String, required: true },
  userID: { type: String, required: true },
});

module.exports = mongoose.model("Employe", employeSchema);

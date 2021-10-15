const mongoose = require("mongoose");

const employeSchema = mongoose.Schema({
  name: {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    middle_name: { type: String, required: false },
  },
  address: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  gender: { type: String, required: false },
  photo: { type: String },
  department: { type: String, required: true },
  employment_date: { type: String, required: true },
  termination_date: { type: String, required: true },
  account_details: {
    account_name: { type: String, required: true },
    account_number: { type: String, required: true },
    bank_name: { type: String, required: true },
  },
  wage: { type: String, required: true },
  // userID: { type: String, required: true },
});

module.exports = mongoose.model("Employe", employeSchema);

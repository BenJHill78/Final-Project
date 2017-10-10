const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({
  ctype: { type: String, required: true },
  cname: { type: String, required: true },
  cnumber: { type: String, required: true },
  caddress: { type: String, required: true, default: "pending" }, 
  date: { type: Date, default: Date.now }
});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requestSchema = new Schema({
  neighborhood: { type: String, required: true },
  address: { type: String, required: true },
  requestname: { type: String, required: true },
  status: { type: String, required: true, default: "pending" }, 
  date: { type: Date, default: Date.now }
});

const Request = mongoose.model("Request", requestSchema);

module.exports = Request;
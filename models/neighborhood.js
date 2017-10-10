const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const neighborhoodSchema = new Schema({
  nhname: { type: String, required: true },
  nhclass: { type: String, required: true },
  location: { type: String, required: true },
  nhhousecount: { type: String, required: true },
  nhmonthdues: { type: String, required: true },    
  date: { type: Date, default: Date.now }
});

const Neighborhood = mongoose.model("Neighborhood", neighborhoodSchema);

module.exports = Neighborhood;

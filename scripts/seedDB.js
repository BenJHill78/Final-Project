const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/hoamanagement",
  {
    useMongoClient: true
  }
);

const requestSeed = [
  {
    nhname: "Stone Creekpen",
    address:
      "123 Internet Street Orlando FL 32822",
    request: "New paint - Red",
    status: "pending",
    date: new Date(Date.now()) 
  },
  {
    nhname: "Stone Creekapp",
    address:
      "123 Internet Street Orlando FL 32822",
    request: "New paint - Black",
    status: "approved",
    date: new Date(Date.now()) 
  },  {
    nhname: "Stone Creekden",
    address:
      "123 Internet Street Orlando FL 32822",
    request: "New paint - Orange",
    status: "denied",
    date: new Date(Date.now()) 
  },
    
];

db.request
  .remove({})
  .then(() => db.request.collection.insertMany(requestSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });



const companySeed = [
  {
    ctype: "Plumber",
    cname:
      "Joes Plumbing",
    cnumber: "407-123-4567",
    caddress: "123 Internet Street Orlando FL 32822",
    date: new Date(Date.now()) 
  },
    
];

db.Company
  .remove({})
  .then(() => db.Company.collection.insertMany(companySeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

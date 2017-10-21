const db = require("../models");

// Defining methods for the requestController
module.exports = {
  findAll: function(req, res) {
    if (req.user) {
     db.Request     
      .find(req.query)
      .sort({ date: -1 })
        .then(dbModel => res.json({results: dbModel, sess: req.session}))
      .catch(err => res.status(422).json(err));
  }
       else { res.json({ error: "Please login", statusCode: 401 }) }
  },  
  findById: function(req, res) {
    if (req.user) {     
     db.Request
      .findById(req.params.id)
        .then(dbModel => res.json({results: dbModel, sess: req.session}))
        .catch(err => res.status(422).json(err));
    }
    else { res.json({ error: "Please login", statusCode: 401 }) }
  },      
  create: function(req, res) {
    if (req.user) {
     db.Request
      .create(req.body)
        .then(dbModel => res.json({results: dbModel, sess: req.session}))
        .catch(err => res.status(422).json(err));
            }
    else { res.json({ error: "Please login", statusCode: 401 }) }
  },
  update: function(req, res) {
    if (req.user) {  
     db.Request
      .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json({results: dbModel, sess: req.session}))
        .catch(err => res.status(422).json(err));
  }
        else { res.json({ error: "Please login", statusCode: 401 }) }        
  },
  remove: function(req, res) {
   if (req.user) {
     db.Request
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
        .then(dbModel => res.json({results: dbModel, sess: req.session}))
        .catch(err => res.status(422).json(err));
  }
        else { res.json({ error: "Please login", statusCode: 401 }) }
  }  
};

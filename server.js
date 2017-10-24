const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const passport = require("passport");
const LocalStrategy = require("passport-local");

const index = require("./routes/index");
const api = require("./routes/api/index");
const requests = require("./routes/api/requests");
const auth = require("./routes/api/auth");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view


var databaseUri = "mongodb://localhost/hoamanagement";

if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
} else {
    mongoose.connect(databaseUri);
}

var db = mongoose.connection;

db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
});

db.once("open", function() {
    console.log("Mongoose connection successful.");
});

app.use(require("express-session")({secret: 'makeahome', resave: false, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());

const User = require("./models/user");
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use("/",index);
app.use("/api", api);
app.use("/requests", requests);
app.use("/auth", auth);
// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/hoamanagement",
  {
    useMongoClient: true
  }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
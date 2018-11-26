const db_url = require("./config").db_url;
const mongoose = require("mongoose");
mongoose.connect(
  db_url,
  { useNewUrlParser: true }
);

var db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.on("open", function() {
  console.log("Connection stablished");
});

module.exports = { mongoose };

const express = require("express");
const app = express();
const admin = require("./admin");

app.use("/", admin);

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});

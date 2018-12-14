"use strict";
const config = require("./config/config");
const express = require("express");
const bodyParser = require("body-parser");
const app = express("./middelwares/auth.js");
const UserRoutes = require("./routes/userRoutes");
const mongoose = require("mongoose");
mongoose.connect(
  config.db,
  { useCreateIndex: true, useNewUrlParser: true },
  (err, res) => {
    if (err) return console.log(err);
    console.log(`Connected to database`);
  }
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", UserRoutes);

app.listen(config.port, () => {
  console.log(`API Rest listening in http://localhost:${config.port}`);
});

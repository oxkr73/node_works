"use strict";

const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/userCtrl");
const auth = require("../middelwares/auth");

router.post("/signup", userCtrl.signup);
router.post("/signin", userCtrl.signin);

router.get("/private", auth, (req, res) => {
  res.status(200).send({ message: `Access available` });
});
module.exports = router;

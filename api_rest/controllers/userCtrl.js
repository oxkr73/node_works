"use strict";

const User = require("../models/user");
const service = require("../services/index");
const bcrypt = require("bcrypt");

function signup(req, res) {
  const user = new User({
    email: req.body.email,
    displayName: req.body.displayName,
    password: req.body.password
  });

  user.save(err => {
    if (err)
      return res
        .status(500)
        .send({ message: `Error al crear el usuario: ${err}` });

    return res.status(200).send({ token: service.createToken(user) });
  });
}

function signin(req, res) {
  //let user = { email: req.body.email, password: req.body.password };

  //var username = req.body.username;
  var password = req.body.password;
  //var password = bcrypt.hashSync(req.body.password, 10);

  User.findOne({ email: req.body.email })
    .then(function(user) {
      console.log(password, user.password);
      return bcrypt.compare(password, user.password);
    })
    .then(function(samePassword) {
      console.log(samePassword);
      if (!samePassword) {
        res.status(403).send();
      }
      res.send("No es el mismo pass");
    })
    .catch(function(error) {
      console.log("Error authenticating user: ", error);
      next();
    });

  /*User.findOne({ email: req.body.email, password: user.password })
    .then(user => {
      console.log("then ", user);
    })
    .catch(err => console.log(err));*/
}

module.exports = { signup, signin };

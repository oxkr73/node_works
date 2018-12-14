"use strict";
const services = require("../services");

function isAuth(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).send({ message: `You are not authoritzed` });
  }

  // JWT type Bearer stringconloquesea
  const token = req.headers.authorization.split(" ")[1];
  services
    .decodeToken(token)
    .then(response => {
      req.user = response;
      next();
    })
    .catch(err => console.log(err));
}

module.exports = isAuth;

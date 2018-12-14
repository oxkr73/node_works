"use strict";
const config = require("../config/config");
const jwt = require("jwt-simple");
const moment = require("moment");

function createToken(user) {
  const payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment()
      .add(14, "days")
      .unix()
  };

  return jwt.encode(payload, config.SECRET_TOKEN);
}

function decodeToken(token) {
  return new Promise((resolve, reject) => {
    try {
      const payload = jwt.decode(token, config.SECRET_TOKEN);

      if (payload.exp < moment().unix()) {
        reject({
          status: 401,
          message: `Token out of date`
        });
      }
      resolve(payload.sub);
    } catch {
      reject({ status: 500, message: `Invalid token` });
    }
  });
}

module.exports = { createToken, decodeToken };

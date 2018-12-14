"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  displayName: String,
  password: { type: String, select: true },
  signupDate: { type: Date, default: Date.now() },
  lastLogin: Date
});

UserSchema.pre("save", function(next) {
  let user = this;

  bcrypt
    .genSalt(10)
    .then(salt => {
      bcrypt.hash(user.password, salt).then(hash => {
        user.password = hash;
        next();
      });
    })
    .catch(err => {
      return next(err);
    });

  /*bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err);

      user.password = hash;

      next();
    });
  });*/
});

module.exports = mongoose.model("user", UserSchema);

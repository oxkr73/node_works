var express = require("express");
var router = express.Router();

let isAuth = false;
let userData = {};

function auth(req, res, next) {
  let name = req.query.name;
  let pass = req.query.pass;

  if (Object.keys(req.query).length !== 0) {
    if (name == "oscar" && pass == "1234") {
      isAuth = true;
      userData = { name, pass };
    }
  }

  if (isAuth) {
    req.status_code = "Authorized";
  } else {
    req.status_code = "Not authorized";
  }
  next();
}

// middleware that is specific to this router
router.use(auth);

// define the admin page route
router.post(/admin.*/, function(req, res) {
  if (req.status_code == "Authorized") {
    if (req.url === "/admin") {
      res.send(`Hello you are ADMIN`);
    } else {
      res.send(`Hello you are ${userData.name} with pass ${userData.pass}`);
    }
  } else {
    res.send(`${req.status_code}`);
  }
});

module.exports = router;

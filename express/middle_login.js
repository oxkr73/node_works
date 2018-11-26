const express = require("express");
const bodyParser = require("body-parser");
const app = express();

let isLogged = true;

function login(req, res, next) {
  if (isLogged) {
    next();
  } else {
    res.send("You are not logged");
  }
}

function logUrl(req, res, next) {
  req.logger = `URL: ${req.url} and method: ${req.method}`;
  next();
}

app.use(login, logUrl);

app.get("/user/:user", function(req, res) {
  console.log(req.params);
  let name = req.params.user;
  res.send(`Hello ${name}!`);
});

app.post("/user/:user", function(req, res) {
  let name = req.params.user;
  res.send(`Post ${name}!, ${req.logger}`);
});

app.put("/user/:user", function(req, res) {
  let name = req.params.user;
  res.send(`Put ${name}!`);
});

app.delete("/user/:user", function(req, res) {
  let name = req.params.user;
  res.send(`Delete ${name}!`);
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});

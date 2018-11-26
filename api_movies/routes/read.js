const express = require("express");
const router = express.Router();

let movies = require("../model");

router.get("/:id([0-9]{3,})", function(req, res) {
  console.log(req.method);
  var currMovie = movies.filter(function(movie) {
    if (movie.id == req.params.id) {
      return true;
    }
  });

  if (currMovie.length == 1) {
    res.json(currMovie[0]);
  } else {
    res.status(404); //Set status to 404 as movie was not found
    res.json({ message: "Not Found" });
  }
});

module.exports = router;

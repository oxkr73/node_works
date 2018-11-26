const express = require("express");
const router = express.Router();

router.delete("/:id", function(req, res) {
  console.log(req.method);
  var removeIndex = movies
    .map(function(movie) {
      return movie.id;
    })
    .indexOf(req.params.id); //Gets us the index of movie with given id.

  if (removeIndex === -1) {
    res.json({ message: "Not found" });
  } else {
    movies.splice(removeIndex, 1);
    res.send({ message: "Movie id " + req.params.id + " removed." });
  }
});

module.exports = router;

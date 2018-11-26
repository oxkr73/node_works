const express = require("express");
const router = express.Router();

router.put("/:id", function(req, res) {
  console.log(req.method, req.body);
  //Check if all fields are provided and are valid:
  if (
    !req.body.name ||
    !req.body.year.toString().match(/^[0-9]{4}$/g) ||
    !req.body.rating.toString().match(/^[0-9]\.[0-9]$/g) ||
    !req.params.id.toString().match(/^[0-9]{3,}$/g)
  ) {
    res.status(400);
    res.json({ message: "Bad Request" });
  } else {
    //Gets us the index of movie with given id.
    var updateIndex = movies
      .map(function(movie) {
        return movie.id;
      })
      .indexOf(parseInt(req.params.id));

    if (updateIndex === -1) {
      //Movie not found, create new
      movies.push({
        id: req.params.id,
        name: req.body.name,
        year: req.body.year,
        rating: req.body.rating
      });
      res.json({
        message: "New movie created.",
        location: "/movies/" + req.params.id
      });
    } else {
      //Update existing movie
      movies[updateIndex] = {
        id: req.params.id,
        name: req.body.name,
        year: req.body.year,
        rating: req.body.rating
      };
      res.json({
        message: "Movie id " + req.params.id + " updated.",
        location: "/movies/" + req.params.id
      });
    }
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();

router.post("/", function(req, res) {
  console.log(req.method);
  //Check if all fields are provided and are valid:
  if (
    !req.body.name ||
    !req.body.year.toString().match(/^[0-9]{4}$/g) ||
    !req.body.rating.toString().match(/^[0-9]\.[0-9]$/g)
  ) {
    res.status(400);
    res.json({ message: "Bad Request" });
  } else {
    var newId = movies[movies.length - 1].id + 1;
    movies.push({
      id: newId,
      name: req.body.name,
      year: req.body.year,
      rating: req.body.rating
    });
    res.json({ message: "New movie created.", location: "/movies/" + newId });
  }
});

module.exports = router;

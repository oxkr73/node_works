const update = (req, res) => {
    //Check if all fields are provided and are valid:
    if(!req.body.name ||
       !req.body.year.toString().match(/^[0-9]{4}$/g) ||
       !req.body.rating.toString().match(/^[0-9]\.[0-9]$/g) ||
       !req.params.id.toString().match(/^[0-9]{3,}$/g)){
       res.sendStatus(400);
      // res.send(`${req.body.name},${req.body.year},${req.params.id}`)
    } else {
       //Gets us the index of movie with given id.
       var updateIndex = movies.map(movie=>{
          return movie.id;
       }).indexOf(parseInt(req.params.id));
       
       if(updateIndex === -1){
          //Movie not found, create new
          movies.push({
             id: req.params.id,
             name: req.body.name,
             year: req.body.year,
             rating: req.body.rating
          });
          res.json({
             message: "New movie created.", location: "/movies/" + req.params.id});
       } else {
          //Update existing movie
          movies[updateIndex] = {
             id: req.params.id,
             name: req.body.name,
             year: req.body.year,
             rating: req.body.rating
          };
          res.json({message: "Movie id " + req.params.id + " updated.",
             location: "/movies/" + req.params.id});
       }
    }
 };
 
 module.exports= update
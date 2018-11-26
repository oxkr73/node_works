const model = require('../models/model')

const create = (req, res)=>{
    //Check if all fields are provided and are valid:
    if(!req.body.name ||
       !req.body.year.toString().match(/^[0-9]{4}$/g) ||
       !req.body.rating.toString().match(/^[0-9]\.[0-9]$/g)){
      res.sendStatus(400);
      //res.send(`${req.body.name},${req.body.year},${req.body.rating}`)
    } else {
       let newId = movies[movies.length-1].id+1;
       movies.push({
          id: newId,
          name: req.body.name,
          year: req.body.year,
          rating: req.body.rating
       });
       res.json({message: "New movie created.", 
                 location: "/movies/" + newId});
    }
};

 
 module.exports = create
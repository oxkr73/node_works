const read = (req, res)=>{
    var currMovie = movies.filter(movie => {
       if(movie.id == req.params.id){
          return true;
       }
    });
    
    if(currMovie.length == 1){
       res.json(currMovie[0])
    } else {
       res.sendStatus(404);  //Set status to 404 as movie was not found
       
    }
 };

 module.exports= read
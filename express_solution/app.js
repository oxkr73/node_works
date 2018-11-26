let express = require("express");
let bodyParser = require("body-parser");
let cookieParser = require('cookie-parser')

let multer = require("multer");
let upload = multer();

let app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());

//Require the Router we defined in movies.js
//let movies = require("./movies.js");
let movies = require('./routes/MovieController.js')
//Use the Router on the sub route /movies
app.use('/movies', movies);

app.listen(3000);

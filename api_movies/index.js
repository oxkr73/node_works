const express = require("express");
const router = express.Router();
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require("./routes/routes");
//const read = require("./routes/read");

/*
let movies = require("./model");
console.log(movies);
*/

app.use(router);
routes.mount(app);
//app.use("/", mount);

app.listen(3000, () => console.log("Listening in port 3000"));

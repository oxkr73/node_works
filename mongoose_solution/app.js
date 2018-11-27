const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const studentsRoutes = require('./routes/studentsRoutes')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use('/', studentsRoutes)

app.listen(3000);
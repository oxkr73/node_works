const express = require('express')
const app = express();
const bodyParser = require('body-parser')
//const auth = require('./config/auth')
const fs = require('fs')
const https = require('https')

const studentsRoutes = require('./routes/studentsRoutes')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use('/', studentsRoutes)

https.createServer({
key: fs.readFileSync('server.key'),
cert: fs.readFileSync('server.cert')
}, app)
.listen(3000, function () {
console.log('Example app listening on port 3000! Go to https://localhost:3000/') })
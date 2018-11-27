const mongoose = require('mongoose')

const connectionDB = mongoose.connect('mongodb://localhost/test',/* {useNewUrlParser=true} */)
    .then(()=>console.log('connection established'))
    .catch(console.error.bind(console, 'error: '))

exports=connectionDB

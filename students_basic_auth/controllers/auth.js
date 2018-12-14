const auth = require('basic-auth')
const Credentials = require('../models/schema').Person

module.exports = function(request, response, next)
{   
    let user = auth(request);
    if(user===undefined) response.status(403).send('Tienes que autenticarte')
    pass = Buffer.from(user.pass).toString('base64')
    Credentials.findOne({n: user.name, password: pass})
        .then((p)=>{
            if(!p.name) Promise.reject;

            response.set('www-Authenticate', 'Basic realm="person"');
            return next()
        })
        .catch((err)=>{response.sendStatus(401);})
}
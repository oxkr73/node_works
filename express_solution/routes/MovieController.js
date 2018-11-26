const express = require('express');
const router = express.Router();

const create = require("./MovieCreate");
const read = require("./MovieRead");
const update = require("./MovieUpdate");
const del = require("./MovieDelete");


    router.post('/', create);

    router.get('/:id', read);

    router.put("/:id", update);
    
    router.delete("/:id", del);

    module.exports = router

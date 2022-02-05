'use strict';
const { Router } = require('express');
const { Type} = require('../db.js');
const router = Router();


router.get('/', async (req, res, next) => {
try{
    const typeFinal = await Type.findAll();
    res.status(200).send(typeFinal);
} 
catch(error){next(error)}
  })

  module.exports = router;
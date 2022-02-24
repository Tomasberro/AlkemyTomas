'use strict';
const { Router } = require('express');
const { Category} = require('../db.js');
const router = Router();


router.get('/', async (req, res, next) => {
try{
    const categoryFinal = await Category.findAll();
    res.status(200).send(categoryFinal);
} 
catch(error){next(error)}
  })

  module.exports = router;
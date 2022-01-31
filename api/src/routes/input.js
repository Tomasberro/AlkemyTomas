'use strict';
const { Router } = require('express');
const router = Router();

router.get('/', async (req, res, next) => {
   try{
    res.send('prueba tomi');
    } catch (error) { next(error) }
  })

  
  module.exports = router;
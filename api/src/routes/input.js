'use strict';
const { Router } = require('express');
const { Input} = require('../models/Input');
const { Type} = require('../models/Type');
const router = Router();

router.get('/', async (req, res, next) => {
   try{
    res.send('prueba tomi');
    } catch (error) { next(error) }
  })

  router.post('/', async (req, res, next) => {
    let {
      concept,
      amount,
      date
    } = req.body;
    try {
      const pokemonCreated = await Input.create({
        concept,
        amount,
        date
      });
      let tipoDb = await Type.findAll({
        where: { name: type }
      })
      pokemonCreated.addType(tipoDb);
  
      res.send('soy el post de pokemons')
    }
    catch (error) { next(error) }
  })
  
  module.exports = router;
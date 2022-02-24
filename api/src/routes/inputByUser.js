'use strict';
const { Router } = require('express');
const { Input} = require('../db.js');
const { Type, User} = require('../db.js');
const router = Router();

router.get('/:userId', async (req, res, next) => {
    const { userId } = req.params;
    try{
      const inputFind= await Input.findAll({
        where: {
          UserId: userId
        },
        include: {
          model: Type,
          attributes: ['type'],
      },
      order: [
       [ 'createdAt'],
      ],
      });
      res.status(200).send(inputFind)
    } catch (error) { next(error) }
  });

  module.exports = router;
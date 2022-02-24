'use strict';
const { Router } = require('express');
const { Input} = require('../db.js');
const { Type, User, Category} = require('../db.js');
const router = Router();

router.get('/', async (req, res, next) => {
   try{
     console.log(Type)
    const getInput= await Input.findAll({
      include:[
         {
          // raw: true, formato json
          model: Type,
          attributes: ['type'],
      },
      {
        model:Category,
        attributes: ['name'],
      }
    ],
      order: [
       [ 'createdAt'],
      ],
  })
    res.status(200).send(getInput);
    } catch (error) { next(error) }
  })

  router.post('/', async (req, res, next) => {
    let {
      concept,
      amount,
      TypeId,
      CategoryId,
      UserId,
    } = req.body;
    try {
      const inputCreated = await Input.create({
        concept,
        amount,
        date: new Date().toLocaleString()
      });
       let tipoDb = await Type.findOne({
         where: { id: TypeId }
       })
       let userId = await User.findOne({
          where: { id: UserId }
       })
       let categoryDb = await Category.findOne({
        where: { id: CategoryId }
      })

       console.log(inputCreated)
     inputCreated.setType(tipoDb);
  inputCreated.setUser(userId);
  inputCreated.setCategory(categoryDb);
      res.send('soy el post de input nuevo');
    }
    catch (error) { next(error) }
  })

  router.put('/:id', async (req, res, next) => {
    const { concept, amount } = req.body;
    const { id } = req.params;
  try{
     const inputUpdate= await Input.update({concept: concept,
    amount: amount
  },{
       where: {
         id: id
       }
     });
    res.status(200).send("Input update succesfull")
  } catch (error) { next(error) }
  });

  router.delete('/:id', async (req, res, next) => {
    const { id } = req.params;
    try{
      const inputDelete= await Input.destroy({
        where: {
          id: id
        }
      });
      res.status(200).send("Input delete succesfull")
    } catch (error) { next(error) }
  });
  


  module.exports = router;
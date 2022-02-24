const { Router } = require('express');
const express = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
 const inputRouter = require('./input');
 const typeRouter = require('./type.js');
 const userRegisterRouter = require('./userRegister.js');
const userLoginRouter = require('./userLogin.js');
const inputByUserRouter = require('./inputByUser.js');
const categoryRouter = require('./category.js');

const router = express.Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/input', inputRouter);
router.use('/type', typeRouter);
router.use('/userRegister', userRegisterRouter);
router.use('/userLogin', userLoginRouter);
router.use('/inputByUser', inputByUserRouter);
router.use('/category', categoryRouter);


module.exports = router;
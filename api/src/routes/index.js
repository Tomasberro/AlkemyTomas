const { Router } = require('express');
const express = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
 const inputRouter = require('./input');
// const typesRouter = require('./types')

const router = express.Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
 router.use('/input', inputRouter);
// router.use('/types', typesRouter);

module.exports = router;
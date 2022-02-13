'use strict';
const { Router } = require('express');
const { User} = require('../db.js');
const router = Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const authConfing = require('../utils/authConfig');

router.post('/', async (req, res, next) => {
        try {
          let {
            name,
            mail,
            password,
          } = req.body;
      
          let userData = await User.findOne({
            where: {
              mail: mail,
            },
          });
      
          if (!userData) {
            if (password.length < 6) {
              return res.json({
                msg: "La contraseña debe tener mas de 6 caracteres",
              });
            } else {
              let passHash = await bcrypt.hash(password, +authConfing.rounds);
              let user = await User.create({
                name,
                mail,
                password: passHash,
              });
              if (user) {
                let token = jwt.sign({ user: user }, authConfing.secret, {
                  expiresIn: "9999 days",
                });
                res.status(200).json({
                  msg: "Usuario registrado correctamente",
                  user: user,
                  token: token,
                });
              }
            }
          }
          if(userData){
            res.json({msg:"Este mail ya se encuentra asociado a un usuario. Por favor intentar con otro"})
          }
          if (!password) {
            return res.json({ msg: "Debe ingresar una contraseña" });
          }
        } catch (err) {
          console.log("rompo en el register controller", err);
        }
    }
)


  module.exports = router;
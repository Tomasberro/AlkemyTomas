'use strict';
const { Router } = require('express');
const { User} = require('../db.js');
const router = Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const authConfing = require('../utils/authConfig');

router.post('/', async (req, res, next) => {
        try {
    let { mail, password } = req.body;
    let user = await User.findOne({
      where: {
        mail: mail,
      },
    });
  
     if (!user) {
        res.json({ msg: "Este usuario no coincide con uno existente" });
      }
    else {
        let match = await bcrypt.compare(password, user.password) || (user.password === password);
        console.log("este es el resultado del match", match);
        // console.log("este es el password", user.password, password);
        if (match) {
          let token = jwt.sign({ user: user }, authConfing.secret, {
            expiresIn: "999days",
          });
          return res.status(200).json({ auth: true, token: token });
        } else {
          return res.json({
            auth: false,
            id: user.id,
            msg: "La contraseña o el mail no coinciden con nuestros registros. Por favor intenete de nuevo",
          });
        }
      }
    } catch (err) {
      console.log("rompo en el login controller", err);
    }
});

module.exports = router;
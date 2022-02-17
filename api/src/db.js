require('dotenv').config();
const { Sequelize } = require('sequelize');
// const fs = require('fs');
// const path = require('path');
const inputModel = require("./models/Input.js");
const categoryModel = require("./models/Category.js");
const typeModel = require("./models/Type.js");
const userModel = require("./models/User.js");
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT
} = process.env;

const sequelize = process.env.NODE_ENV === "production"
? new Sequelize({
    database: DB_NAME,
    dialect: "postgres",
    host: DB_HOST,
    port: 5432,
    username: DB_USER,
    password: DB_PASSWORD,
    pool: {
      max: 3,
      min: 1,
      idle: 10000,
    },
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
      keepAlive: true,
    },
  })
: new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});


inputModel(sequelize);
categoryModel(sequelize);
typeModel(sequelize);
userModel(sequelize);
// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
 const { Category, Type, Input, User } = sequelize.models;
User.hasMany(Input);
Input.belongsTo(User);

 Input.belongsTo(Type);//trough tabla intermedia
  Type.hasMany(Input);// creo dos foreign key category page id

     Input.belongsTo(Category);//trough tabla intermedia
     Category.hasMany(Input);// creo dos foreign key category page id


// Aca vendrian las relaciones
// Product.hasMany(Reviews);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
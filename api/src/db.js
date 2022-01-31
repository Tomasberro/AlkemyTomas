require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const inputModel = require("./models/Input.js");
const categoryModel = require("./models/Category.js");
const typeModel = require("./models/Type.js");
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
// const basename = path.basename(__filename);

// const modelDefiners = [];

// // Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
// fs.readdirSync(path.join(__dirname, '/models'))
//   .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
//   .forEach((file) => {
//     modelDefiners.push(require(path.join(__dirname, '/models', file)));
//   });

// // Injectamos la conexion (sequelize) a todos los modelos
// modelDefiners.forEach(model => model(sequelize));
// // Capitalizamos los nombres de los modelos ie: product => Product
// let entries = Object.entries(sequelize.models);
// let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
// sequelize.models = Object.fromEntries(capsEntries);

inputModel(sequelize);
categoryModel(sequelize);
typeModel(sequelize);
// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
 const { Category, Type, Input } = sequelize.models;

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
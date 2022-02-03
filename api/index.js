const server = require('./src/app.js');
const { conn } = require('./src/db.js');

const {Input, Category, Type} = require('./src/db.js');

const {categoryLogicData} = require('./src/utils/CategoryMock.js');
const { inputLogicData } = require("./src/utils/inputMock.js");
const { typeLogicData } = require("./src/utils/typeMock.js");

const port = process.env.PORT || 3001;

conn.sync({ force: true}).then( () => {// force true borra bd c/vez q levanto el back y cierrols
  server.listen(port, async () => {
    console.log(`Server listen in ${process.env.NODE_ENV} port ${port}`); // eslint-disable-line no-console
    
    await categoryLogicData();
     await typeLogicData();
     await inputLogicData();
  });
}).catch((e) => console.log("connection failed", e));
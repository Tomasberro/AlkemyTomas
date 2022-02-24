const server = require('./src/app.js');
const { conn } = require('./src/db.js');

const {categoryLogicData} = require('./src/utils/CategoryMock.js');
const { inputLogicData } = require("./src/utils/inputMock.js");
const { typeLogicData } = require("./src/utils/typeMock.js");
const { userData } = require('./src/utils/userMock.js');

const port = process.env.PORT || 3001;

conn.sync({ force: true}).then( () => {
  server.listen(port, async () => {
    console.log(`Server listen in ${process.env.NODE_ENV} port ${port}`); 
    await userData();
    await categoryLogicData();
     await typeLogicData();
     await inputLogicData();
  });
}).catch((e) => console.log("connection failed", e));
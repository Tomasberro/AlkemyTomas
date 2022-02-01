const { Type } = require("../db.js");
const typeData = [
    {
      type: "Ingreso",
    },
    {
      type: "Egreso",
    },
]

const typeLogicData = async () => {
  for (let item of typeData) {
    await Type.create({
      type: item.type,
    });
  }
};

module.exports = { typeLogicData };
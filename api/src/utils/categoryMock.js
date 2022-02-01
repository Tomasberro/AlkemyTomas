const { Category } = require("../db.js");
const categoryData = [
    {
      name: "Sueldo",
    },
    {
        name: "Supermercado",
    },
    {      
      name: "Ropa",
    },
    {      
        name: "Servicios e impuestos",
      },
      {      
        name: "Otros ingresos",
      },
]

const categoryLogicData = async () => {
  for (let item of categoryData) {
    await Category.create({
      name: item.name,
    });
  }
};

module.exports = { categoryLogicData };
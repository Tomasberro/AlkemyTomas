const { Input } = require("../db.js");
const inputData = [
    {
      concept: "Salario",
      amount: 1000,  
      date: new Date().toLocaleString(),
      categoryId: 1,
      typeId: 1, 
      UserId: 1, 
    },
    {
        concept: "Supermercado",
        amount: 100,  
        date: new Date().toLocaleString(),
        categoryId: 2,
        typeId: 2, 
        UserId: 1,  
      },
]
const inputLogicData = async () => {
    for (let item of inputData) {
      await Input.create({
        concept: item.concept,
        amount: item.amount,
        date: item.date,
         CategoryId: item.categoryId,
        TypeId: item.typeId,
        UserId: item.UserId,
      });
    }
  };

module.exports = { inputLogicData };
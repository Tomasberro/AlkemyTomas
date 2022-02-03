const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Input', {
        concept:{
            type: DataTypes.STRING,
        },
        amount: {
            type: DataTypes.INTEGER,
        },
        date:{
            type: DataTypes.DATE,
            // get() {
            //     return new Date(this.getDataValue('date'));
            //   }
        },
       
    })
}
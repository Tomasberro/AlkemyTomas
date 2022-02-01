const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Type', {
        type:{
            type: DataTypes.ENUM('Egreso', 'Ingreso'),
        },
    })
}
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Type', {
        concept:{
            type: DataTypes.ENUM('Output', 'Input'),
        },
    })
}
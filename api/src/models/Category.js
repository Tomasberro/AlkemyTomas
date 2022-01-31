const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Category', {
        concept:{
            type: DataTypes.STRING,
        },
    })
}
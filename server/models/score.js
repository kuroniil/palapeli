const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../util/db')

class Score extends Model {}

Score.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    mode: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    score: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize, 
    underscored: true,
    timestamps: false,
    modelName: 'score'
})

module.exports = Score
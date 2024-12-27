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
        allowNull: false,
        validate: {
            len: [3, 5]
        }
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            len: [1, 20]
        }
        
    },
    score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            len: [1, 6]
        }
    }
}, {
    sequelize, 
    underscored: true,
    timestamps: false,
    modelName: 'score'
})

module.exports = Score
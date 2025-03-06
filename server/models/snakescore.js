const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../util/db')

class SnakeScore extends Model {}

SnakeScore.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            len: [1, 20]
        }
        
    },
    character: {
        type:DataTypes.TEXT,
        allowNull: false,
        validate: {
            is: /^(default|orange|green)$/
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
    modelName: 'snakescore'
})

module.exports = SnakeScore
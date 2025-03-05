const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../util/db')

class PuzzleScore extends Model {}

PuzzleScore.init({
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
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
            len: [1, 6]
        }
    }
}, {
    sequelize, 
    underscored: true,
    timestamps: false,
    modelName: 'puzzlescore'
})

module.exports = PuzzleScore
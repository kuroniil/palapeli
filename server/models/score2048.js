const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../util/db')

class Score2048 extends Model {}

Score2048.init({
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
    score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            len: [1, 10]
        }
    }
}, {
    sequelize, 
    underscored: true,
    timestamps: false,
    modelName: 'score2048'
})

module.exports = Score2048
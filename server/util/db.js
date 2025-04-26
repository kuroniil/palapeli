const Sequelize = require('sequelize')
const { DATABASE_URL, DOCKER_ENV } = require('./config')

let sequelize
DOCKER_ENV === 'true'
  ? sequelize = new Sequelize(DATABASE_URL, {
    host: 'db',
    dialect: 'postgres'
  })
  : sequelize = new Sequelize(DATABASE_URL)

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate()
    console.log('database connected')
  } catch (err) {
    console.log(err)
    console.log('connecting database failed')
    return process.exit(1)
  }

  return null
}

module.exports = { connectToDatabase, sequelize }
require('dotenv').config()

const timers = {}

module.exports = {
    DATABASE_URL: process.env.DATABASE_URL,
    PORT: process.env.PORT || 3001,
    timers: timers
}
require('dotenv').config()

const timers = {}

const DOCKER_ENV = process.env.DOCKER_ENV || null

const DATABASE_URL = process.env.NODE_ENV === "test"
    ? process.env.TEST_DATABASE_URL
    : process.env.DATABASE_URL

module.exports = {
    DATABASE_URL: DATABASE_URL,
    PORT: process.env.PORT || 3001,
    timers: timers,
    DOCKER_ENV: DOCKER_ENV
}
const express = require('express')
const cors = require('cors')

const app = express()

const puzzleScoresRouter = require('./controllers/puzzlescores')
const snakeScoresRouter = require('./controllers/snakescores')
const timersRouter = require('./controllers/timers')
const scores2048Router = require('./controllers/scores2048')

app.use(express.json())
app.use(express.static('dist'))
app.use(cors())

app.use('/api/puzzlescores', puzzleScoresRouter)
app.use('/api/snakescores', snakeScoresRouter)
app.use('/api/timer', timersRouter)
app.use('/api/scores2048', scores2048Router)


module.exports = {
    app
}
const express = require('express')

const cors = require('cors')

const app = express()

const { PORT } = require('./util/config')
const { connectToDatabase } = require('./util/db')

const puzzleScoresRouter = require('./controllers/puzzlescores')
const snakeScoresRouter = require('./controllers/snakescores')
const timersRouter = require('./controllers/timers')

app.use(express.json())
app.use(express.static('dist'))
app.use(cors())

app.use('/api/puzzlescores', puzzleScoresRouter)
app.use('/api/snakescores', snakeScoresRouter)
app.use('/api/timer', timersRouter)



const start = async () => {
    await connectToDatabase()
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
}

start()

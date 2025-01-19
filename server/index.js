const express = require('express')

const cors = require('cors')

const app = express()

const { PORT } = require('./util/config')
const { connectToDatabase } = require('./util/db')

const scoresRouter = require('./controllers/scores')
const timersRouter = require('./controllers/timers')

app.use(express.json())
app.use(express.static('dist'))
app.use(cors())

app.use('/api/scores', scoresRouter)
app.use('/api/timer', timersRouter)


const start = async () => {
    await connectToDatabase()
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
}

start()

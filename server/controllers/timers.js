const router = require('express').Router()
const { timerStart, timerStop } = require('../util/timer')

router.get('/', async (request, response) => {
  const id = Math.floor(Math.random()*1000000)
  timerStart(id)
  response.json(id)
})

router.get('/:id', async (request, response) => {
  const id = request.params.id
  const finishTime = timerStop(id)
  response.json(finishTime)
})

module.exports = router
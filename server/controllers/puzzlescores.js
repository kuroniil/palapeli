const router = require('express').Router()
const PuzzleScore  = require('../models/puzzlescore')

PuzzleScore.sync()

router.get('/', async (request, response) => {
    const scores = await PuzzleScore.findAll()
    response.json(scores)
})

router.get('/:mode', async (request, response) => {
    const mode = request.params.mode
    const scoresByMode = await PuzzleScore.findAll({
        where: {"mode": mode}
    })
    scoresByMode.sort((first, second) => first.score - second.score)
    response.json(scoresByMode)
  })

router.post('/', async (request, response) => {
    try {
        const score = await PuzzleScore.create(request.body)
        response.json(score)
    } catch(error) {
        return response.status(400).json({ error })
    }
})

module.exports = router
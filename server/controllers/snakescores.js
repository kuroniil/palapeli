const router = require('express').Router()
const SnakeScore  = require('../models/snakescore')

SnakeScore.sync()

router.get('/', async (request, response) => {
    const scores = await SnakeScore.findAll()
    scores.sort((first, second) =>  second.score - first.score)
    response.json(scores)
})

router.get('/:character', async (request, response) => {
    const character = request.params.character
    const scoresByCharacter = await SnakeScore.findAll({
        where: {"character": character}
    })
    scoresByCharacter.sort((first, second) => second.score - first.score)
    response.json(scoresByCharacter)
  })

router.post('/', async (request, response) => {
    try {
        const score = await SnakeScore.create(request.body)
        response.json(score)
    } catch(error) {
        return response.status(400).json({ error })
    }
})

module.exports = router
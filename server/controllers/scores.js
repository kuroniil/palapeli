const router = require('express').Router()

const  Score  = require('../models/score')

Score.sync()

router.get('/', async (request, response) => {
    const scores = await Score.findAll()
    response.json(scores)
})

router.get('/:mode', async (request, response) => {
    const mode = request.params.mode
    const scoresByMode = await Score.findAll({
        where: {"mode": mode}
    })
    scoresByMode.sort((first, second) => first.score - second.score)
    response.json(scoresByMode)
  })

router.post('/', async (request, response) => {
    try {
        const score = await Score.create(request.body)
        response.json(score)
    } catch(error) {
        return response.status(400).json({ error })
    }
})


//router.get('/:mode/:id', (request, response) => {
//    const mode = request.params.mode
//    const id = request.params.id
//    const scoresByMode = scores.filter(score => score.mode === mode)
//    const score = scoresByMode.find(score => score.id === id)
//    if (score) {
//        response.json(score)
//    } else {
//        response.status(404).end()
//    }
//  })
//
//router.get('/:id', (request, response) =>  {
//    const id = request.params.id
//    const score = scores.find(score => score.id === id)
//    if (score) {
//        response.json(score)
//    } else {
//        response.status(404).end()
//    }
//})
//
//router.put('/:id', (request, response) => {
//    const id = request.params.id
//    const score = request.body
//    scores.filter(scores => scores.id !== id)
//    scores.concat(scores, score)
//    response.json(score)
//})

module.exports = router
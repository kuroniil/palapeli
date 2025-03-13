const { test, after, beforeEach } = require('node:test')
const assert = require('assert')
const supertest = require('supertest')
const { app } = require('../app')
const PuzzleScore = require('../models/puzzlescore')
const { sequelize } = require('../util/db')

const api = supertest(app)

PuzzleScore.sync()

const initialScores = [{
    id: 1,
    mode: "3x3",
    name: "jari",
    score: 30.0
    },
    {
    id: 2,
    mode: "4x4",
    name: "timo",
    score: 15.1
    }]

beforeEach(async () => {
    await PuzzleScore.truncate()
    let scoreObject = new PuzzleScore(initialScores[0])
    await scoreObject.save()
    scoreObject = new PuzzleScore(initialScores[1])
    await scoreObject.save()
})

test('puzzle scores are returned as json', async () => {
    await api
        .get('/api/puzzlescores')
        .expect(200)
        .expect('Content-type', /application\/json/)
})

test('correct number of scores are returned', async () => {
    const response = await api.get('/api/puzzlescores')
    assert.strictEqual(response.body.length, 2)
})

test('querying puzzlescores by mode works', async () => {
    const response = await api.get('/api/puzzlescores/3x3')
    assert.strictEqual(response.body.length, 1)
    const score = response.body[0]
    assert.strictEqual(score.name, "jari")
})

test('posting a new score works', async () => {
    const score = {name: "ilkka", mode: "5x5", score: 19.2}
    await api
        .post('/api/puzzlescores')
        .send(score)
        .expect(200)
    const response = await api.get('/api/puzzlescores')
    assert.strictEqual(response.body.length, 3)
    const scoreNames = response.body.map(s => s.name)
    assert.strictEqual(scoreNames.includes('ilkka'), true)
})

test('posting with missing mode fails', async () => {
    const score = {name: "ilkka", score: 19.2}
    await api
        .post('/api/puzzlescores')
        .send(score)
        .expect(400)
})

after(() => {
  sequelize.close()
})
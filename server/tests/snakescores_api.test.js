const { test, after, beforeEach } = require('node:test')
const assert = require('assert')
const supertest = require('supertest')
const { app } = require('../app')
const SnakeScore = require('../models/snakescore')
const { sequelize } = require('../util/db')

const api = supertest(app)

SnakeScore.sync()

const initialScores = [{
    id: 1,
    character: "green",
    name: "jari",
    score: 15
    },
    {
    id: 2,
    character: "default",
    name: "timo",
    score: 20
    }]

beforeEach(async () => {
    await SnakeScore.truncate()
    let scoreObject = new SnakeScore(initialScores[0])
    await scoreObject.save()
    scoreObject = new SnakeScore(initialScores[1])
    await scoreObject.save()
})

test('puzzle scores are returned as json', async () => {
    await api
        .get('/api/snakescores')
        .expect(200)
        .expect('Content-type', /application\/json/)
})

test('correct number of scores are returned', async () => {
    const response = await api.get('/api/snakescores')
    assert.strictEqual(response.body.length, 2)
})

test('correct scores are returned', async () => {
    const response = await api.get('/api/snakescores')
    const scores = response.body.map(s => s.score)
    assert.strictEqual(scores.includes(15), true)
    assert.strictEqual(scores.includes(20), true)
})

test('querying snakecores by character works', async () => {
    const response = await api.get('/api/snakescores/default')
    assert.strictEqual(response.body.length, 1)
    const score = response.body[0]
    assert.strictEqual(score.name, "timo")
})

test('posting a new score works', async () => {
    const score = {name: "tapio", character: "orange", score: 42}
    await api
        .post('/api/snakescores')
        .send(score)
        .expect(200)
    const response = await api.get('/api/snakescores')
    assert.strictEqual(response.body.length, 3)
    const scoreNames = response.body.map(s => s.name)
    assert.strictEqual(scoreNames.includes('tapio'), true)
})

test('posting with undefined character fails', async () => {
    const score = {name: "ilkka", score: 20, character: "koira"}
    await api
        .post('/api/snakescores')
        .send(score)
        .expect(400)
})

after(() => {
  sequelize.close()
})
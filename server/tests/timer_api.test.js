const { test, after, beforeEach } = require('node:test')
const assert = require('assert')
const supertest = require('supertest')
const { app } = require('../app')
const { sequelize } = require('../util/db')
const PuzzleScore = require('../models/puzzlescore')

const api = supertest(app)

PuzzleScore.sync()

beforeEach(async () => {
    await PuzzleScore.truncate()
})

test('timers are returned as json', async () => {
    const response = await api.get('/api/timer')
    const id = response.body
    const res2 = await api.get(`/api/timer/${id}`)
        .expect(200)
        .expect('Content-type', /application\/json/)
    console.log(res2.body)
})

test('timing in the server is accurate', async () => {
    const delay = (delay) => {
        return new Promise(resolve => setTimeout(() => {
            resolve()
        }, [delay]))
    }
    const response = await api.get('/api/timer')
    const id = response.body
    const startTime = Date.now()

    await delay(2000)
    const res = await api.get(`/api/timer/${id}`)
    const finishTime = res.body

    const finishTimeCorrect = (Date.now() - startTime) / 1000

    assert.strictEqual((Math.abs(finishTime - finishTimeCorrect) < 0.1), true)
})

after(() => {
    sequelize.close()
})
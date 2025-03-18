const { test, after, beforeEach } = require('node:test')
const assert = require('assert')
const supertest = require('supertest')
const { app } = require('../app')
const { sequelize } = require('../util/db')

const api = supertest(app)


test('timers are returned as json', async () => {
    const response = await api.get('/api/timer')
    const id = response.body
    const res2 = await api.get(`/api/timer/${id}`)
        .expect(200)
        .expect('Content-type', /application\/json/)
    console.log(res2.body)
})

//test('timing in the server is accurate', async () => {
//    const response = await api.get('/api/timer')
//    const id = response.body
//    const startTime = Date.now()
//
//    var finishTime = -1
//    setTimeout(() => {
//        const res = api.get(`/api/timer/${id}`)
//        finishTime = res.body
//    }, [10000])
//    const finishTimeCorrect = (Date.now() - startTime) / 1000
//    console.log(finishTime, finishTimeCorrect)
//    assert.strictEqual((Math.abs(finishTime - finishTimeCorrect) < 0.5), true)
//})

after(() => {
    sequelize.close()
})
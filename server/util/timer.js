const { timers } = require('./config')

const timerStart = (id) => {
  timers[id] = Date.now()
}

const timerStop = (id) => {
  const finishTime = Date.now() - timers[id]
  delete timers[id]
  return Math.round(finishTime / 100) / 10
}

module.exports = { timerStart, timerStop }

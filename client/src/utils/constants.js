// eslint-disable-next-line no-undef
const serverUrl = process.env.NODE_ENV === 'production' ? 'palapeli.onrender.com' : 'localhost:3001'

const apiBaseUrl = `${serverUrl}/api`

export const timerBaseUrl = `${apiBaseUrl}/timer`

export const snakeScoresBaseUrl = `${apiBaseUrl}/snakescores`

export const puzzleScoresBaseUrl = `${apiBaseUrl}/puzzlescores`

export const scores2048BaseUrl = `${apiBaseUrl}/scores2048`

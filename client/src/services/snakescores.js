import axios from 'axios'
import { snakeScoresBaseUrl } from '../utils/constants'

const getAll = () => (
  axios.get(snakeScoresBaseUrl)
)

const getByCharacter = (character) => (
  axios.get(`${snakeScoresBaseUrl}/${character}`)
)

const create = (scoreObject) => (
  axios.post(snakeScoresBaseUrl, scoreObject)
)

export default {
  getAll: getAll,
  getByCharacter: getByCharacter,
  create: create
}
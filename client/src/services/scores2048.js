import axios from 'axios'
import { scores2048BaseUrl } from '../utils/constants'

const getAll = () => (
  axios.get(scores2048BaseUrl)
)

const create = (scoreObject) => (
  axios.post(scores2048BaseUrl, scoreObject)
)

export default {
  getAll: getAll,
  create: create
}
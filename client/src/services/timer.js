import axios from 'axios'
import { timerBaseUrl } from '../utils/constants'

const timerStart = () => (
  axios.get(`${timerBaseUrl}`)
)

const timerStop = (id) => (
  axios.get(`${timerBaseUrl}/${id}`)
)

export default {
  timerStart: timerStart,
  timerStop: timerStop
}
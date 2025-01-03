import axios from "axios"
const baseUrl = 'http://localhost:3001/api/timer'

const timerStart = () => (
    axios.get(`${baseUrl}`)
)

const timerStop = (id) => (
    axios.get(`${baseUrl}/${id}`)
)

export default {
    timerStart: timerStart,
    timerStop: timerStop
}
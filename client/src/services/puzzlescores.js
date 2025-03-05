import axios from "axios"
const baseUrl = 'http://localhost:3001/api/puzzlescores'

const getByMode = (mode) => (
    axios.get(`${baseUrl}/${mode}`)
)

const create = (scoreObject) => (
    axios.post(baseUrl, scoreObject)
)

export default {
    getByMode: getByMode,
    create: create
}
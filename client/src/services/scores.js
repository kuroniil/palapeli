import axios from "axios"
const baseUrl = '/api/scores'

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
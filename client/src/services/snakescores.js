import axios from "axios"
const baseUrl = 'http://localhost:3001/api/snakescores'

const getAll = () => (
    axios.get(baseUrl)
)

const getByCharacter = (character) => (
    axios.get(`${baseUrl}/${character}`)
)

const create = (scoreObject) => (
    axios.post(baseUrl, scoreObject)
)

export default {
    getAll: getAll,
    getByCharacter: getByCharacter,
    create: create
}
import axios from "axios"
import { puzzleScoresBaseUrl } from "../utils/constants"

const getByMode = (mode) => (
    axios.get(`${puzzleScoresBaseUrl}/${mode}`)
)

const create = (scoreObject) => (
    axios.post(puzzleScoresBaseUrl, scoreObject)
)

export default {
    getByMode: getByMode,
    create: create
}
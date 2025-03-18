import snakeScoreService from '../../services/snakescores'
import { useState } from 'react'

const ScoreSubmitForm = (props) => {
    const [name, setName] = useState('')
    
        const handleNameChange = (event) => {
            setName(event.target.value)
        }
    
        const submitScore = (event) => {
            event.preventDefault()
            if (!props.submitted) {
                const scoreObject = {
                    "character": props.character,
                    "score": props.score,
                    "name": name
                }
                snakeScoreService
                    .create(scoreObject)
                    .then(response => {                
                        setName('')
                        props.setErrorMessage('')
                        props.setSubmitted(true)
                        props.setHighlightId(parseInt(response.data.id))
                        props.setLeaderboardState(props.character)
                        setTimeout(() => {props.setLeaderboardVisible(true)}, [500])
                })
                .catch(error => {
                    props.setErrorMessage("Unknown error submitting the score.")
                    if (error.response.data.error.name === 'SequelizeValidationError') {
                        props.setErrorMessage("Name must be 20 characters or less.")
                    }
                })
            }
        }
    
    return (
        <form onSubmit={submitScore}>
            Enter Nickname (20 characters or less)
            <br></br>
            <br></br>
            <input required placeholder="nickname" onChange={handleNameChange} value={name} />
            <button type="submit">submit</button>
            {props.errorMessage && <span style={{marginLeft: "1em", color: "red"}}>{props.errorMessage}</span>}
        </form>
    )
}

export default ScoreSubmitForm
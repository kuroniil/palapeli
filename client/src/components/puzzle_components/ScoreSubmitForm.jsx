import { useState } from "react"
import scoreService from '../../services/puzzlescores'

const ScoreSubmitForm = (props) => {
    const [name, setName] = useState('')

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const submitScore = async (event) => {
        event.preventDefault()
        if (!props.submitted) {
            const scoreObject = {
                "mode": props.mode,
                "score": props.time,
                "name": name
            }
            scoreService
            .create(scoreObject)
            .then(response => {                
                props.updateLeaderboardMode(props.mode)
                setName('')
                props.setErrorMessage('')
                props.setSubmitted(true)
                props.setHighlightId(parseInt(response.data.id))
            })
            .catch(error => {
                props.setErrorMessage("Name must be 20 characters or less.")
            })
        }
    }
    
    return (
        <div className="submit-form">
            <form onSubmit={submitScore}>
            Enter Nickname (20 characters or less)
            <br></br>
            <br></br>
                <input required placeholder="nickname" value={name} onChange={handleNameChange}/>
                <button type="submit">submit</button>
                {props.errorMessage && <span style={{marginLeft: "1em", color: "red"}}>{props.errorMessage}</span>}
            </form>
        </div>            
    )
}

export default ScoreSubmitForm
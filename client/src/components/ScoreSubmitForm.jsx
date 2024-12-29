import { useState } from "react"
import scoreService from '../services/scores'

const ScoreSubmitForm = (props) => {
    const [name, setName] = useState('')

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const submitScore = (event) => {
        event.preventDefault()
        const scoreObject = {
            "mode": props.mode,
            "score": props.time,
            "name": name
        }
        if (!props.submitted) {
            scoreService
            .create(scoreObject)
            .then(response => {                
                props.updateLeaderboardMode(props.mode)
                setName('')
                props.setSubmitted(true)
                props.setHighlightId(parseInt(response.data.id))
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
            </form>
        </div>            
    )
}

export default ScoreSubmitForm
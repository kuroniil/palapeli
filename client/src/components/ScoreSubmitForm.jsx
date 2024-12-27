import { useState } from "react"
import scoreService from '../services/scores'
import axios from "axios"


const ScoreSubmitForm = ({ mode, time, updateLeaderboardMode, submitted, setSubmitted }) => {
    const [name, setName] = useState('')

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const submitScore = (event) => {
        event.preventDefault()
        const scoreObject = {
            "mode": mode,
            "score": time,
            "name": name
        }
        if (!submitted) {
            scoreService
            .create(scoreObject)
            .then(response => {                
                updateLeaderboardMode(mode)
                setName('')
                setSubmitted(true)
            })
        }
    }
    
    return (
        <div className="submit-form">
            <form onSubmit={submitScore}>
            Enter Nickname (9 characters or less)
            <br></br>
            <br></br>
                <input required placeholder="nickname" value={name} onChange={handleNameChange}/>
                <button type="submit">submit</button>
            </form>
        </div>            
    )
}

export default ScoreSubmitForm
import { useState } from "react"


const ScoreSubmitForm = ({ mode, time, totalMoves }) => {
    const [name, setName] = useState('')
    
    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const submitScore = (event) => {
        event.preventDefault()
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
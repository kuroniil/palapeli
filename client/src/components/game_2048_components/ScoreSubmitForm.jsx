import { useState } from "react"
import scoreService from "../../services/scores2048"

const ScoreSubmitForm = ({ score }) => {
  const [submitMessage, setSubmitMessage] = useState('...')
  const [scoreMessageColor, setScoreMessageColor] = useState('transparent')
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  
  const handleScoreSubmit = (event) => {
    event.preventDefault()
    if (!submitted) {
      setScoreMessageColor("white")
      const newScore = {
        name: name,
        score: score
      }
      try {
        scoreService.create(newScore)
        setSubmitMessage("Score submitted!")
        setSubmitted(true)
        setName('')
      } catch (error) {
        setSubmitMessage('Submitting score failed')
      }
    }
  }

  return (
    <div>
      <h1 style={{color: "white"}}>Save Score</h1>
      <p>Your score:&nbsp;
        <span style={{textDecoration: "underline"}}>{score}</span>
      </p>
      <p>Save your score with a name</p>
      <form onSubmit={handleScoreSubmit}>
        <input onChange={(t) => setName(t.target.value)} value={name}/>
        &nbsp;
        <button className="game-2048-icon-clickable"
        style={{fontSize: "45%"}}>save</button>
      </form>
      <p style={{color: scoreMessageColor, padding: "0.7em", userSelect: "none"}}>{submitMessage}</p>
    </div>
  )
}

export default ScoreSubmitForm
import { useEffect, useState } from 'react'
import ScoreSubmitForm from './ScoreSubmitForm'

const GridFinished = (props) => {
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const mode = `${Math.sqrt(props.gridSize)}x${Math.sqrt(props.gridSize)}`

  useEffect(() => {
    if (submitted) {
      setTimeout(() => {
        props.setLeaderboardVisible(true)
        const element = document.getElementById(props.highlightId)
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 750)

    }
  }, [submitted])

  return (
    <div className="game-over">
      <h2>{mode} Grid Completed</h2>
      <p>Submit your score to get on the leaderboard</p>
      <div className="submit-form">
                Your Time: <span style={{ color: 'white', textDecoration: 'underline' }}>{props.finishTime} seconds</span>
      </div>
      <div className="submit-form">
                Total Moves Made: <span style={{ color: 'white', textDecoration: 'underline' }}>{props.totalMoves}</span>
      </div>
      <ScoreSubmitForm mode={mode} time={props.finishTime} totalMoves={props.totalMoves}
        updateLeaderboardMode={props.updateLeaderboardMode} submitted={submitted} setSubmitted={setSubmitted}
        setHighlightId={props.setHighlightId} setErrorMessage={setErrorMessage} errorMessage={errorMessage} />
      {submitted && <p>Score submitted!</p>}
    </div>
  )
}

export default GridFinished
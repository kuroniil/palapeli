import ScoreSubmitForm from './ScoreSubmitForm'
import { useState } from 'react'

const GameOver = (props) => {
  const [errorMessage, setErrorMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const characterParts = props.characterSkin.split('-')
  const character = characterParts[characterParts.length - 1]
  return (
    <div className="game-over">
      <h2>Game over</h2>
      <p>Submit your score to get on the leaderboard</p>
      <div className="submit-form">
                Your Score: <span style={{ color: 'white', textDecoration: ' underline' }}>{props.pointCount} points</span>
      </div>
      <div className="submit-form">
                Your character: <span style={{ color: 'white', textDecoration: 'underline' }}>{character}</span>
      </div>
      <div className="submit-form">
        <ScoreSubmitForm setErrorMessage={setErrorMessage} errorMessage={errorMessage}
          setSubmitted={setSubmitted} character={character} score={props.pointCount}
          setHighlightId={props.setHighlightId} setLeaderboardState={props.setLeaderboardState}
          setLeaderboardVisible={props.setLeaderboardVisible}/>
      </div>
      {submitted && <p>Score submitted!</p>}
    </div>
  )}

export default GameOver
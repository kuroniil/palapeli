import { useState } from 'react'
import Grid from './game_2048_components/Grid'
import Score from './game_2048_components/Score'
import ScoreSubmitForm from './game_2048_components/ScoreSubmitForm'
import Leaderboard from './game_2048_components/Leaderboard'

const Game2048 = (props) => {
  const [gridSize, setGridSize] = useState(4)
  const [currentScore, setCurrentScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [scoreFormVisible, setScoreFormVisible] = useState(false)
  const [scoreSubmitted, setScoreSubmitted] = useState(false)
  const [leaderboardVisible, setLeaderboardVisible] = useState(false)
  const [highlightId, setHighlightId] = useState(-1)

  const handleScoreSaveClick = () => {
    setScoreFormVisible(!scoreFormVisible)
  }

  return (
    <div className="game-2048">
      <h1
        className="main-header"
        style={{
          marginTop: '0.5em',
          marginBottom: '0.75em',
          fontSize: '500%' }}
      >
            2048_peli
      </h1>
      <div className="main-buttons" style={{ marginBottom: '2em' }}>
        <button style={{ padding: '0.25em' }} id="menu" onClick={(t) => props.changeAppState(t)}>main menu</button>
        <button style={{ padding: '0.25em' }} onClick={() => setLeaderboardVisible(!leaderboardVisible)}>leaderboard</button>
        <Score currentScore={currentScore}/>
      </div>
      <Grid gridSize={gridSize} currentScore={currentScore} setCurrentScore={setCurrentScore}
        gameOver={gameOver} setGameOver={setGameOver} setScoreFormVisible={setScoreFormVisible}
        setScoreSubmitted={setScoreSubmitted} leaderboardVisible={leaderboardVisible} highlightId={highlightId} />
      <div style={{ marginTop: '1em', alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 'medium', fontFamily: 'Times New Roman' }}>Restart - press Esc</span>
        {gameOver &&
        <button className="game-2048-icon-clickable" onClick={handleScoreSaveClick}>
          Save score
        </button>}
      </div>
      <div className={`game-2048-score-form ${scoreFormVisible ? 'visible' : 'hidden'}`}>
        <ScoreSubmitForm score={currentScore} submitted={scoreSubmitted} setSubmitted={setScoreSubmitted}
          scoreFormVisible={scoreFormVisible} setHighlightId={setHighlightId} />
      </div>
    </div>
  )
}

export default Game2048
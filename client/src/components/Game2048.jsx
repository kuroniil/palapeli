import { useState, useEffect } from 'react'
import { startGrid, startPieces } from '../utils/game2048Utils'
import Grid from './game_2048_components/Grid'
import Score from './game_2048_components/Score'
import ScoreSubmitForm from './game_2048_components/ScoreSubmitForm'
import Footer from './game_2048_components/Footer'

const Game2048 = (props) => {
  const [gridSize, setGridSize] = useState(4)
  const [grid, setGrid] = useState(JSON.parse(JSON.stringify(startGrid)))
  const [pieces, setPieces] = useState(JSON.parse(JSON.stringify(startPieces)))
  const [currentScore, setCurrentScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [scoreFormVisible, setScoreFormVisible] = useState(false)
  const [scoreSubmitted, setScoreSubmitted] = useState(false)
  const [leaderboardVisible, setLeaderboardVisible] = useState(false)
  const [highlightId, setHighlightId] = useState(-1)
  const [loadGameVisible, setLoadGameVisible] = useState(false)

  const handleScoreSaveClick = () => {
    setScoreFormVisible(!scoreFormVisible)
  }

  useEffect(() => {
    const savedGrid = localStorage.getItem('grid')
    const savedPieces = localStorage.getItem('pieces')
    const savedScore = localStorage.getItem('score')
    if (savedGrid && savedPieces && savedScore) {
      setGrid(JSON.parse(savedGrid))
      setPieces(JSON.parse(savedPieces))
      setCurrentScore(parseInt(savedScore))
      setLoadGameVisible(true)
    }
  }, [])

  return (
    <div className="game-2048">
      <h1 className='main-header'>2048_peli</h1>
      <div className="main-buttons" style={{ marginBottom: '2em' }}>
        <button style={{ padding: '0.25em' }} id="menu" onClick={(t) => props.changeAppState(t)}>main menu</button>
        <button style={{ padding: '0.25em' }} onClick={() => setLeaderboardVisible(!leaderboardVisible)}>leaderboard</button>
        <Score currentScore={currentScore}/>
      </div>
      <Grid gridSize={gridSize} currentScore={currentScore} setCurrentScore={setCurrentScore}
        gameOver={gameOver} setGameOver={setGameOver} setScoreFormVisible={setScoreFormVisible}
        setScoreSubmitted={setScoreSubmitted} leaderboardVisible={leaderboardVisible} highlightId={highlightId}
        setLeaderboardVisible={setLeaderboardVisible} grid={grid} setGrid={setGrid} pieces={pieces}
        setPieces={setPieces} loadGameVisible={loadGameVisible} setLoadGameVisible={setLoadGameVisible}
        submitted={scoreSubmitted} scoreFormVisible={scoreFormVisible} setHighlightId={setHighlightId} />
      <Footer setNotification={props.setNotification} handleScoreSaveClick={handleScoreSaveClick}
        grid={grid} pieces={pieces} gameOver={gameOver} score={currentScore} />
    </div>
  )
}

export default Game2048
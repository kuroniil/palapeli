import { useState, useEffect } from 'react'
import Header from './puzzle_components/Header'
import puzzleScoreService from '../services/puzzlescores'
import snakeScoreService from '../services/snakescores'
import scoreService2048 from '../services/scores2048'
import Score from './leaderboard_components/Score'
import SnakeButtons from './leaderboard_components/SnakeButtons'
import PuzzleButtons from './leaderboard_components/PuzzleButtons'


const Leaderboards = ({ changeAppState }) => {
  const [currLeaderboard, setCurrLeaderboard] = useState('puzzle')
  const [scores, setScores] = useState([])
  const [currGameMode, setCurrGameMode] = useState('4x4')

  const getScores = () => {
    const currService = currLeaderboard === 'puzzle'
      ? puzzleScoreService
      : currLeaderboard === '2048'
        ? scoreService2048
        : snakeScoreService

    if (currLeaderboard === 'puzzle') {
      return currService.getByMode(currGameMode)
    } else if (currLeaderboard === 'snake' && currGameMode !== 'all') {
      return currService.getByCharacter(currGameMode)
    }
    return currService.getAll()
  }

  useEffect(() => {
    if (currLeaderboard === 'puzzle') {
      setCurrGameMode('4x4')
    }
    else if (currLeaderboard === 'snake') {
      setCurrGameMode('all')
    }
    else {
      setCurrGameMode('4x4 mode')
    }
  }, [currLeaderboard])

  useEffect(() => {
    getScores()
      .then((response) => {
        setScores(response.data)
      })
  }, [currLeaderboard, currGameMode])

  return (
    <div>
      <Header title="Leaderboards" />
      <select
        onChange={(event) => setCurrLeaderboard(event.target.value)}
        style={{ margin: '1em', padding: '0.5em' }}>
        <option>puzzle</option>
        <option>snake</option>
        <option>2048</option>
      </select>
      <div className="leaderboard" style={{ height: '70vh', marginBottom: '30vh', position: 'relative' }}>
        <div
          id="menu"
          onClick={changeAppState}
          className="exit-button"
        >
          ×
        </div>
        <h2>{currLeaderboard} scores</h2>
        <div className="buttons">
          {currLeaderboard === 'snake'
            ? <SnakeButtons leaderboardState={currGameMode} setLeaderboardState={setCurrGameMode} />
            : currLeaderboard === 'puzzle' &&
              <PuzzleButtons leaderboardState={currGameMode} setLeaderboardState={setCurrGameMode} />
          }
        </div>
        <h3>{currGameMode}</h3>
        <div className="leaderboard-table-container">
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Score</th>
                {currLeaderboard === 'snake'
                  ? <th>Character</th>
                  : currLeaderboard === 'puzzle' && <th>Mode</th>
                }
              </tr>
            </thead>
            <tbody>
              {scores.map((score, index) =>
                <Score key={score.id} score={score} index={index} type={currLeaderboard} />)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Leaderboards
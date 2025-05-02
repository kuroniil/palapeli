import { useEffect, useState } from 'react'
import scoreService from '../../services/snakescores'
import Score from './Score'

const Leaderboard = (props) => {
  const [scores, setScores] = useState([])

  const handleClick = (event) => {
    switch (event.target.id) {
    case 'all':
      props.setLeaderboardState('all')
      break
    case 'default':
      props.setLeaderboardState('default')
      break
    case 'orange':
      props.setLeaderboardState('orange')
      break
    case 'green':
      props.setLeaderboardState('green')
      break
    }
  }

  useEffect(() => {
    props.leaderboardState === 'all'
      ? scoreService
        .getAll()
        .then((response) => {
          setScores(response.data)
        })
      : scoreService
        .getByCharacter(props.leaderboardState)
        .then((response) => {
          setScores(response.data)
        })
  }, [props.leaderboardState, props.leaderboardVisible])

  return (
    <div className={`leaderboard-wrapper ${props.leaderboardVisible ? 'visible' : 'hidden'}`}>
      <div className="leaderboard">
        <div onClick={() => props.setLeaderboardVisible(false)} className="exit-button">×</div>
        <h2>Leaderboard</h2>
        <div className="buttons">
          <button className={props.leaderboardState === 'all' ? 'selected' : ''} id="all" onClick={handleClick}>
            all
          </button>
          <button className={props.leaderboardState === 'default' ? 'selected' : ''} id="default" onClick={handleClick}>
            default
          </button>
          <button className={props.leaderboardState === 'orange' ? 'selected' : ''} id="orange" onClick={handleClick}>
            orange</button>
          <button className={props.leaderboardState === 'green' ? 'selected' : ''} id="green" onClick={handleClick}>
            green
          </button>
        </div>
        <h3>{props.leaderboardState === 'all' ? 'all' : `${props.leaderboardState} character`}</h3>
        <div className="leaderboard-table-container">
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Score</th>
                <th>Character</th>
              </tr>
            </thead>
            <tbody>
              {scores.map((score, index) =>
                <Score key={score.id} score={score} index={index} id={score.id} character={score.character} highlightId={props.highlightId}/>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Leaderboard
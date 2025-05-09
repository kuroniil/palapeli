import Score from './Score'

const Leaderboard = ({ scores, leaderboardMode, updateLeaderboardMode, setLeaderboardVisible, highlightId }) => {
  const handle3x3Click = () => {
    updateLeaderboardMode('3x3')
  }

  const handle4x4Click = () => {
    updateLeaderboardMode('4x4')
  }


  const handle5x5Click = () => {
    updateLeaderboardMode('5x5')
  }
  return (
    <div className="leaderboard">
      <div onClick={() => setLeaderboardVisible(false)} className="exit-button">×</div>
      <h2>Leaderboard</h2>
      <div className="buttons">
        <button className={leaderboardMode === '3x3' ? 'selected' : ''} onClick={handle3x3Click}>
          3x3
        </button>
        <button className={leaderboardMode === '4x4' ? 'selected' : ''} onClick={handle4x4Click}>
          4x4
        </button>
        <button className={leaderboardMode === '5x5' ? 'selected' : ''} onClick={handle5x5Click}>
          5x5
        </button>
      </div>
      <h3>Mode: {leaderboardMode}</h3>
      <div className="leaderboard-table-container">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((score, index) =>
              <Score key={score.id} score={score} index={index} id={score.id} highlightId={highlightId} />)}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Leaderboard
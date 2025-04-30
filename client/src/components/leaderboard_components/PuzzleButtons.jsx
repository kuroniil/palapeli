const PuzzleButtons = ({ leaderboardState, setLeaderboardState }) => {
  const handleClick = (event) => {
    setLeaderboardState(event.target.id)
  }

  return (
    <>
      <button className={leaderboardState === '3x3' ? 'selected' : ''} id="3x3" onClick={handleClick}>
          3x3
      </button>
      <button className={leaderboardState === '4x4' ? 'selected' : ''} id="4x4" onClick={handleClick}>
          4x4
      </button>
      <button className={leaderboardState === '5x5' ? 'selected' : ''} id="5x5" onClick={handleClick}>
          5x5
      </button>
    </>
  )
}

export default PuzzleButtons
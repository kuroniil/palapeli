const LeaderboardButton = (props) => {
  const handleClick = () => {
    props.handleMenuClick()
    props.setLeaderboardVisible(!props.leaderboardVisible)
    props.setMenuVisible(false)
  }

  return (
    <button onClick={handleClick}>
            Leaderboard
    </button>
  )
}

export default LeaderboardButton
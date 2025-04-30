const LeaderboardIcon = (props) => {
  const handleLeaderboardClick = () => {
    props.handleMenuClick()
    props.setMenuVisible(false)
    props.setLeaderboardVisible(!props.leaderboardVisible)
  }

  return (
    <button onClick={handleLeaderboardClick}>Leaderboard</button>
  )
}

export default LeaderboardIcon
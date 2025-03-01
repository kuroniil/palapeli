const LeaderboardButton = (props) => {
    const handleClick = () => {
        props.setLeaderboardVisible(!props.leaderboardVisible)
    }
    
    return (
        <button onClick={handleClick}>
            Leaderboard
        </button>
    )
}

export default LeaderboardButton
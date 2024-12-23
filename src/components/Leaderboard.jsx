    import Score from "./Score"

const Leaderboard = ({ scores, leaderboardMode, setLeaderboardMode }) => {
    const handle3x3Click = () => {
        setLeaderboardMode("3x3")
    }
    
    const handle4x4Click = () => {
        setLeaderboardMode("4x4")
    }

    
    const handle5x5Click = () => {
        setLeaderboardMode("5x5")
    }

    return (
        <div className="leaderboard">
            <h2>Leaderboard</h2>
            <div className="buttons">
                <button onClick={handle3x3Click}>3x3</button>
                <button onClick={handle4x4Click}>4x4</button>
                <button onClick={handle5x5Click}>5x5</button>
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
                        <Score key={score.id} score={score} index={index} />)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Leaderboard
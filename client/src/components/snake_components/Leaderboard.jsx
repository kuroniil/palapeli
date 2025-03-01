const Leaderboard = (props) => {
    return (
        <div className="snake-leaderboard">
            <div className={`leaderboard-wrapper ${props.leaderboardVisible ? 'visible' : 'hidden'}`}>
                <button onClick={() => props.setLeaderboardVisible(false)} className="exit-leaderboard">×</button>
                <h2>Leaderboard</h2>
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
                            placeholder
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Leaderboard
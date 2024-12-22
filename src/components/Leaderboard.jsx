import Score from "./Score"

const Leaderboard = ({ scores }) => {
    return (
        <div className="leaderboard">
            <h2>Leaderboard</h2>
            {scores.map(score => 
                <Score score={score} />
            )}
        </div>
    )
}

export default Leaderboard
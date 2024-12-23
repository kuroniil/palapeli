import ScoreSubmitForm from './ScoreSubmitForm'

const GridFinished = ({ finishTime, gridSize, totalMoves }) => {
    const mode = `${Math.sqrt(gridSize)}x${Math.sqrt(gridSize)}`
    
    return (
        <div className="grid-finished">
            <h2>{mode} Grid Completed</h2>
            <p>Submit your score to get on the leaderboard</p>
            <div className="submit-form">
                Your Time: {finishTime} seconds
            </div>
            <div className="submit-form">
                Total Moves Made: {totalMoves}
            </div>
            <ScoreSubmitForm mode={mode} time={finishTime} totalMoves={totalMoves} />
        </div>
    )
}

export default GridFinished
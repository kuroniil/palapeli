import ScoreSubmitForm from './ScoreSubmitForm'

const GridFinished = (props) => {
    const mode = `${Math.sqrt(props.gridSize)}x${Math.sqrt(props.gridSize)}`
    
    return (
        <div className="grid-finished">
            <h2>{mode} Grid Completed</h2>
            <p>Submit your score to get on the leaderboard</p>
            <div className="submit-form">
                Your Time: {props.finishTime} seconds
            </div>
            <div className="submit-form">
                Total Moves Made: {props.totalMoves}
            </div>
            <ScoreSubmitForm mode={mode} time={props.finishTime} totalMoves={props.totalMoves} 
            updateLeaderboardMode={props.updateLeaderboardMode} />
        </div>
    )
}

export default GridFinished
const GridFinished = ({ finishTime, gridSize, totalMoves }) => {
    const mode = `${Math.sqrt(gridSize)}x${Math.sqrt(gridSize)}`
    
    return (
        <div className="grid-finished">
            <h2>{mode} Grid Completed</h2>
            <p>Your time: {finishTime} seconds</p>
            <p>Total moves made: {totalMoves}</p>
        </div>
    )
}

export default GridFinished
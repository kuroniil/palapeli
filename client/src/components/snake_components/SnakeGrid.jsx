const SnakeGrid = (props) => {
    return (
    <div className="snake-grid">
        {props.snakeGrid.map((row, rowIndex) => (
            <div className="snake-row" key={rowIndex}>
                {row.map((cell, colIndex) => (
                    cell === 0
                    ?
                    <div className="snake-cell" key={colIndex}>
                        {cell}
                    </div>
                    : cell === 1 && props.playerPosition[0] === rowIndex && props.playerPosition[1] === colIndex
                    ? <div className="snake-player-head" key={colIndex}>
                        s
                    </div>
                    : cell === 1
                    ? <div className="snake-player" key={colIndex}>
                        s
                    </div>
                    : cell === 2 
                    ? <div className="point" key={colIndex}>
                        #
                    </div>
                    :
                    <div></div>
                ))}
            </div>
        ))}
    </div>
)}
export default SnakeGrid
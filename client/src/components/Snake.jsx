import { useState } from "react"

const Snake = () => {
    const defaultGrid = Array.from( {length: 20 }, () => Array(20).fill(0))
    defaultGrid[5][5] = 1
    const [snakeGrid, setSnakeGrid] = useState(defaultGrid)
    
    return (
        <div className="snake">
            <div className="snake-grid">
                {snakeGrid.map((row, rowIndex) => (
                    <div className="snake-row" key={rowIndex}>
                        {row.map((cell, colIndex) => (
                            cell === 1
                            ? <div className="snake-player">
                                s
                            </div>
                            : <div className="snake-cell" key={colIndex}>
                                {cell}
                            </div>
                            
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Snake
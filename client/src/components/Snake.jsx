import { useState, useEffect } from "react"

const Snake = () => {
    const defaultGrid = Array.from( {length: 20 }, () => Array(20).fill(0))
    const [gridSize, setGridSize] = useState([20, 20])
    const [point, setPoint] = useState([Math.floor(Math.random()*gridSize[0]), Math.floor(Math.random()*gridSize[1])])
    defaultGrid[5][5] = 1
    defaultGrid[4][5] = 1
    defaultGrid[3][5] = 1
    defaultGrid[point[0]][point[1]] = 2
    const [snakeGrid, setSnakeGrid] = useState(defaultGrid)
    const [playerPosition, setPlayerPosition] = useState([5,5])
    const [tailPosition, setTailPosition] = useState([[3,5], [4,5], [5,5]])
    const [direction, setDirection] = useState('D')
    const [lastMovePos, setLastMovePos] = useState([5,5])
    const [pointCount, setPointCount] = useState(0)
    const [tailUpdating, setTailUpdating] = useState(false)

    const collectPoint = () => {
        const newPointCount = pointCount + 1
        setPointCount(newPointCount)
        const newPoint = [Math.floor(Math.random()*gridSize[0]), Math.floor(Math.random()*gridSize[1])]
        setPoint(newPoint)
        updateGrid("pointCollect", newPoint, 2)
        setTailUpdating(true)
    } 
    
    const updateGrid = (event, newPos, newVal) => {
        const updatedGrid = snakeGrid
        updatedGrid[newPos[0]][newPos[1]] = newVal
        var newTail  = tailPosition
        if (!tailUpdating) {
            updatedGrid[tailPosition[0][0]][tailPosition[0][1]] = 0
            const spliced = tailPosition.splice(0, 1)
            newTail = tailPosition.filter(t => t !== spliced)
        }
        newTail.push(newPos)
        if (event === "playerMove") {
            setTailPosition(newTail)
            setTailUpdating(false)
        }
        setSnakeGrid(updatedGrid)
    }
    const updatePlayerPosition = (direction) => {
        const oldPos = playerPosition
        var newPos = -1
        switch (direction) {
            case "R":
                if (oldPos[1] !== gridSize[1] - 1) {
                    newPos = [oldPos[0], oldPos[1] + 1]
                } else {
                    newPos = [oldPos[0], 0]
                }
                break
            case "L":
                if (oldPos[1] !== 0) {
                    newPos = [oldPos[0], oldPos[1] - 1]
                } else {
                    newPos = [oldPos[0], gridSize[1] - 1]
                }
                break
            case "U":
                if (oldPos[0] !== 0) {
                    newPos = [oldPos[0] - 1, oldPos[1]]
                } else {
                    newPos = [gridSize[0] - 1, oldPos[1]]
                }
                break
            case "D":
                if (oldPos[0] !== gridSize[0] - 1) {
                    newPos = [oldPos[0] + 1, oldPos[1]]
                } else {
                    newPos = [0, oldPos[1]]
                }
                break
        }
        setPlayerPosition(newPos)
        updateGrid("playerMove", newPos, 1)
        if (newPos[0] === point[0] && newPos[1] === point[1]) {
            collectPoint()
        }
    }

    useEffect(() => {
        const handleKeyboardInput = (event) => {
            if (playerPosition !== lastMovePos) {
                switch (event.key) {
                    case "ArrowUp":
                        if (direction !== 'D') {
                            setLastMovePos(playerPosition)
                            setDirection('U')
                        }
                        break
                    case "ArrowDown":
                        if (direction !== 'U') {
                            setLastMovePos(playerPosition)
                            setDirection('D')
                        }
                        break
                    case "ArrowLeft":
                        if (direction !== 'R') {
                            setLastMovePos(playerPosition)
                            setDirection('L')
                        }
                        break
                    case "ArrowRight":
                        if (direction !== 'L') {
                            setLastMovePos(playerPosition)
                            setDirection('R')
                        }
                        break
                    default:
                        break
                }
            }
        }
        document.addEventListener("keydown", handleKeyboardInput)

        return () => {
            document.removeEventListener("keydown", handleKeyboardInput)
        }
    }, [playerPosition])

    useEffect(() => {
        const interval = setInterval(() => {
            updatePlayerPosition(direction)
        }, 80)
        
        return () => clearInterval(interval)
        }, [direction, playerPosition])
    
    return (
        <div className="snake">
            <div className="snake-grid">
                {snakeGrid.map((row, rowIndex) => (
                    <div className="snake-row" key={rowIndex}>
                        {row.map((cell, colIndex) => (
                            cell === 1
                            ? <div className="snake-player" key={colIndex}>
                                s
                            </div>
                            : cell === 2 
                            ? <div className="point" key={colIndex}>
                                ×
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
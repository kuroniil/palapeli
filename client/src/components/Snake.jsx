import { useState, useEffect } from "react"
import SnakeGrid from "./snake_components/SnakeGrid"
import GameOver from "./snake_components/GameOver"
import SnakeScore from "./snake_components/SnakeScore"

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
    const [gameOver, setGameOver] = useState(false)

    const collectPoint = () => {
        const newPointCount = pointCount + 1
        setPointCount(newPointCount)
        
        while (true) {
            var newPosition = [Math.floor(Math.random()*gridSize[0]), Math.floor(Math.random()*gridSize[1])]
            if (!isSnake(newPosition)) {
                break
            }
        }
        const newPoint = newPosition
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
        if (isSnake(newPos)) {
            setGameOver(true)
        }
        
        updateGrid("playerMove", newPos, 1)
        if (newPos[0] === point[0] && newPos[1] === point[1]) {
            collectPoint()
        }
    }

    const isSnake = (newPos) => (
        tailPosition.some((pos) => pos[0] === newPos[0] && pos[1] === newPos[1])
    )

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
            {gameOver
                ? <GameOver pointCount={pointCount} />
                : 
                <div>
                  <SnakeScore pointCount={pointCount} />
                  <SnakeGrid snakeGrid={snakeGrid} />
                </div>
            }
        </div>
    )
}
export default Snake
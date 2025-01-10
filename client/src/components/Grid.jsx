/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { formCorrectGrid } from '../utils/gridUtils'
import timerService from '../services/timer'

const Grid = (props) => {
    const [correctGrid, setCorrectGrid] = useState(formCorrectGrid(props.gridSize))

    useEffect(() => {
        setCorrectGrid(formCorrectGrid(props.gridSize))
        props.setTimerVisible(true)
    }, [props.gridSize])

    useEffect(() => {
        const handleKeyboardInput = (event) => {
            switch (event.key) {
                case "ArrowUp":
                    if (props.empty[0] + 1 < Math.sqrt(props.gridSize) && props.grid[props.empty[0] + 1][props.empty[1]] !== '0') {
                        updateGrid(props.empty[0] + 1, props.empty[1])
                    }
                    break
                case "ArrowDown":
                    if (props.empty[0] - 1 >= 0 && props.grid[props.empty[0] - 1][props.empty[1]] !== '0') {
                        updateGrid(props.empty[0] - 1, props.empty[1])    
                    }
                    break
                case "ArrowLeft":
                    if (props.empty[1] + 1 < Math.sqrt(props.gridSize) && props.grid[props.empty[0]][props.empty[1] + 1] !== '0') {
                        updateGrid(props.empty[0], props.empty[1] + 1)
                    }
                    break
                case "ArrowRight":
                    if (props.empty[1] - 1 >= 0 && props.grid[props.empty[0]][props.empty[1] - 1] !== '0') {
                        updateGrid(props.empty[0], props.empty[1] - 1)
                    }
                    break
                default:
                    break
            }
        }
        document.addEventListener("keydown", handleKeyboardInput)

        return () => {
            document.removeEventListener("keydown", handleKeyboardInput)
        }
    }, [props.empty, props.time])

    const checkGrid = (size) => {
        formCorrectGrid(size)
        if (JSON.stringify(props.grid) === correctGrid) {
            timerService
                .timerStop(props.timerId)
                .then(response => {
                    props.setFinishTime(response.data)
                })
            setTimeout(() => {
                props.setGridComplete(true)
                props.setTimerVisible(false)
            }, 200)
        }
    }
    
    const updateGrid = (rowIndex, colIndex) => {
        const cellValue = props.grid[rowIndex][colIndex]
        const updatedGrid = props.grid.map(g => g)
        for (let i = 0; i < props.grid.length; i++) {
            for (let j = 0; j < props.grid[0].length; j++) {
                if (props.grid[i][j] === '0') {
                    if ((Math.abs(rowIndex - i) == 1 && colIndex == j) || (Math.abs(colIndex - j) == 1 && rowIndex == i)) {
                        updatedGrid[i][j] = cellValue
                        updatedGrid[rowIndex][colIndex] = '0'
                        props.setEmpty([rowIndex, colIndex])
                        const moves = props.totalMoves + 1
                        props.setTotalMoves(moves)
                    }
                }
            }
        }
        props.setGrid(updatedGrid)
        checkGrid(props.gridSize)
    }

    return (
            <div className="grid">
                {props.grid.map((row, rowIndex) => (
                    <div className="row" key={rowIndex}>
                        {row.map((cell, colIndex) => (
                            cell !== '0'
                            ? <div className="cell" key={colIndex} onClick={() => updateGrid(rowIndex, colIndex)}>
                                {cell}
                              </div>
                            : <div className="emptyCell" key={colIndex}></div>
                        ))}
                    </div>
                ))}
            </div>)
    
}

export default Grid
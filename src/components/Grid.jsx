/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { formCorrectGrid } from '../utils/gridUtils'
import GridFinished from "./GridFinished"

const Grid = (props) => {
    const [correctGrid, setCorrectGrid] = useState(formCorrectGrid(props.gridSize))

    useEffect(() => {
        setCorrectGrid(formCorrectGrid(props.gridSize))
        props.setTimerVisible(true)
    }, [props.gridSize])

    const checkGrid = (size) => {
        formCorrectGrid(size)
        if (JSON.stringify(props.grid) === correctGrid) {
            setTimeout(() => {
                props.setFinishTime(props.time)
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
        <div>
            <div className="grid">
            {props.grid.map((row, rowIndex) => (
                <div className="row" key={rowIndex}>
                    {row.map((cell, colIndex) => (
                        cell !== '0'
                        ?
                        <div className="cell" key={colIndex} onClick={() => updateGrid(rowIndex, colIndex)}>
                            {cell}
                        </div>
                        :
                        <div className="emptyCell" key={colIndex}></div>
                    ))}
                </div>
            ))}
            </div>
        </div>)
    
}

export default Grid
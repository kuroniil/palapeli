/* eslint-disable react/prop-types */
import { useState } from "react"
import { formCorrectGrid } from '../utils/gridUtils'

const Grid = ({ grid, setGrid, gridSize, gridComplete, setGridComplete }) => {
    const [correctGrid, setCorrectGrid] = useState(formCorrectGrid(gridSize))

    const checkGrid = (size) => {
        formCorrectGrid(size)
        if (JSON.stringify(grid) === correctGrid) {
            setGridComplete(true)
        }
    }
    
    const updateGrid = (rowIndex, colIndex) => {
        const cellValue = grid[rowIndex][colIndex]
        const updatedGrid = grid.map(g => g)
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === '0') {
                    if ((Math.abs(rowIndex - i) == 1 && colIndex == j) || (Math.abs(colIndex - j) == 1 && rowIndex == i)) {
                        updatedGrid[i][j] = cellValue
                        updatedGrid[rowIndex][colIndex] = '0'
                    }
                }
            }
        }
        setGrid(updatedGrid)
        checkGrid(gridSize)
    }
    return (
        <div>
        {!gridComplete 
        ? 
        <div className="grid">
        {grid.map((row, rowIndex) => (
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
        :
        <div>
            koira
        </div>
        }</div>)
    
}

export default Grid
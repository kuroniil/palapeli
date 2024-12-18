import { useState } from "react"
import randomizeGrid from '../utils/gridUtils'

const Grid = () => {
    const [gridSize, setGridSize] = useState(16)
    const [grid, setGrid] = useState(randomizeGrid(gridSize))
    const [gridComplete, setGridComplete] = useState(false)

    const formCorrectGrid = (size) => {
        let corrArr = [...Array(size).keys()].map(a => a + 1)
        corrArr[size - 1] = 0
        let corrGrid = []
        let j = 0
        for (let i = 1; i <= Math.sqrt(size); i++) {
            corrGrid.push(corrArr.slice(j, Math.sqrt(size)*i))
            j = i * Math.sqrt(size)
        }
        corrGrid = corrGrid.map(grid => grid.map(array => array.toString()))
        return JSON.stringify(corrGrid)
    }

    const [correctGrid, setCorrectGrid] = useState(formCorrectGrid(gridSize))

    const checkGrid = (size) => {
        formCorrectGrid(16)
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
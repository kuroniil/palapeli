import { useState } from "react"
import { startGrid, pieceColors } from "../../utils/game2048Utils"
import { move } from "../../utils/gridLogic"

const Grid = ({gridSize}) => {
  const [grid, setGrid] = useState(startGrid)
  
  console.log(grid)
  console.log(move(grid, "up"))
  let currx = 0
  const handleClick = () => {
    const target = document.getElementById("cell-2-3")
    currx -= 103.9  
    target.style.transform = `translateX(${currx}%)`
  }

  const handleClick2 = () => {
    const target = document.getElementById("cell-2-3")
    currx += 103.9  
    target.style.transform = `translateX(${currx}%)`
  }

  return (
    <div className="grid-2048">
      <button onClick={handleClick}>aaaaaaaaaaa</button>
      <button onClick={handleClick2}>bbbbbbbbbbb</button>

      {grid.map((row, rowIndex) => (
        <div className="game-row" key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <div id={`cell-${rowIndex}-${cellIndex}`}
              key={cellIndex}
              className="game-cell"
              style={pieceColors[cell]}>
                {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Grid
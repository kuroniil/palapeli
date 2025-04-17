import { pieceColors } from "../../utils/game2048Utils"

const BaseGrid = ({ gridSize }) => {
  const baseGrid = Array.from(
    { length: gridSize }, _ => Array.from({ length: gridSize}, _ => 0)
  )

  return (
  <div className="grid-2048">
    {baseGrid.map((row, rowIndex) => (
      <div className="game-row" key={rowIndex}>
        {row.map((cell, colIndex) => (
            <div 
              id={`cell-${rowIndex}-${colIndex}`}
              key={colIndex}
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

export default BaseGrid
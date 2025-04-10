import { useState } from "react"
import { startGrid, pieceColors, startPieces } from "../../utils/game2048Utils"
import { move } from "../../utils/gridLogic"

const Grid = ({ gridSize }) => {
  const [grid, setGrid] = useState(startGrid)
  const [grid2, setGrid2] = useState([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]])
  const [pieces, setPieces] = useState(startPieces)

  const handleClick = () => {
    const newGrid = move(grid, "up")
    const newPieces = []
    for (const cell of newGrid.flat()) {
      if (cell.value !== 0) {
        const piece = pieces.find((p) => p.name === cell.name)
        piece.x = cell.x
        piece.y = cell.y
        newPieces.push(piece)
      }
    }
    setPieces(newPieces.reverse())
  }

  return (
    <div>
      <button onClick={handleClick}>aaaaaaaaaaaa</button>
    <div className="container">
      <div className="grid-2048">
        {grid2.map((row, rowIndex) => (
              <div className="game-row" key={rowIndex}>
                {row.map((cell, colIndex) => (
                  <div id={`cell-${rowIndex}-${colIndex}`}
                    key={colIndex}
                    className="game-cell"
                    style={pieceColors[cell]}>
                      {cell}
                  </div>
                ))}
              </div>
            ))}
      </div>
      {pieces.map((piece, index) => (
          <div 
            key={index} 
            className="game-piece"
            style={{
              top: `${-0.05*piece.y}em`,
              left: `-0.01em`,
              transform: `translateX(${3*piece.x}em) translateY(${3*piece.y}em)`,
              transition: 'transform 0.1s ease-out',
              background: pieceColors[piece.value]["background"]
            }}
            >
            {piece.value}
          </div>
      ))}
    </div>
    </div>
  )
}

export default Grid

//let currx = 103.9

//<div className="grid-2048">
//      <button onClick={handleClick}>cccccccccc</button>
//      <div className="container">
//        {grid.map((row, rowIndex) => (
//          <div className="game-row" key={rowIndex}>
//            {row.map((cell, colIndex) => (
//              <div id={`cell-${rowIndex}-${colIndex}`}
//                key={colIndex}
//                className="game-cell"
//                style={{transform: `translateY(${cell.y*100}px)`}}>
//                  {cell.value}
//              </div>
//            ))}
//          </div>
//        ))}

//const movePiece = (name, oldLoc, newLoc) => {
//  const target = document.getElementById(name)
//  if (oldLoc > newLoc) {
//    target.style.transform = `translateY(${-(oldLoc[1]-newLoc[1])*currx}%)`
//  }
//}
//
//const handleClick = () => {
//  //const oldGrid = JSON.parse(JSON.stringify(grid))
//  const newGrid = move(grid, "up")
//  //const oldPieces = oldGrid.flat()
//  //const newPieces = newGrid.flat()
//  //for (let i = 0; i < oldPieces.length; i++) {
//  //  if (oldPieces[i].value !== 0) {
//  //    const newPiece = newPieces.find(p => p.name === oldPieces[i].name)
//  //    const newLocation = [newPiece.x, newPiece.y]
//  //    const oldLocation = [oldPieces[i].x, oldPieces[i].y]
//  //    movePiece(newPiece.name, oldLocation, newLocation)
//  //  }
//  //}
//  setGrid(newGrid)
//}
import { useState, useEffect } from "react"
import { startGrid, pieceColors, startPieces } from "../../utils/game2048Utils"
import { move } from "../../utils/gridLogic"

const Grid = ({ gridSize }) => {
  const [grid, setGrid] = useState(startGrid)
  const [grid2, setGrid2] = useState([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]])
  const [newPieceName, setNewPieceName] = useState('')
  const [pieces, setPieces] = useState(JSON.parse(JSON.stringify(startPieces)))
  const [scaled, setScaled] = useState(0.0)

  useEffect(() => {
    const handleKeyboardInput = (event) => {
        switch (event.key) {
            case "ArrowUp":
              moveUp()
              break
            case "ArrowDown":
              break
            case "ArrowLeft":
              break
            case "ArrowRight":
              break
            default:
              break
        }
    }
    document.addEventListener("keydown", handleKeyboardInput)

    return () => {
        document.removeEventListener("keydown", handleKeyboardInput)
    }
}, [grid, pieces, newPieceName, scaled])

  const moveUp = () => {
  setScaled(0.0)
  const [updatedGrid, addedPiece] = move(grid, "up")
  setNewPieceName(addedPiece.name)
  const newPieces = []
  let flatGrid = updatedGrid.flat()
  
  for (const piece of pieces) {
      const newPiece = flatGrid.find(p => p.name === piece.name)
      newPieces.push(newPiece)
  }
  if (!newPieces.map(p => p.name).includes(addedPiece.name)) newPieces.push(addedPiece)
  
  setPieces(newPieces)
  setGrid(updatedGrid.map((_, i) => updatedGrid.map(row => row[i])))
    
    setTimeout(() => {
      setScaled(1.0)
    }, 10)
  }

  return (
    <div>
    <button onClick={moveUp}>aaaaaaaaaaaa</button>
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
      {pieces.map(piece => (
          <div 
            key={`${piece.id}`} 
            className="game-piece"
            style={{
              top: `${-0.05*piece.y}em`,
              left: "-0.01em",
              transform: 
                piece.name === newPieceName
                  ? `translateX(${3*piece.x}em) translateY(${3*piece.y}em) scale(${scaled})`
                  : `translateX(${3*piece.x}em) translateY(${3*piece.y}em)`,
              transition:
                piece.name === newPieceName
                  ? 'transform 0.05s ease'
                  : 'transform 0.1s ease',
              background: piece.value !== 0 ? pieceColors[piece.value]["background"] : "transparent",
              color: pieceColors[piece.value]["color"],
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


//const index = flatGrid.findIndex(p => p.name === piece.name)
      //const newPiece = {name: JSON.parse(JSON.stringify(piece.name))}
      //newPiece.y = Math.floor(index / 4)
      //newPiece.x = index % 4
      //newPiece.value = parseInt(JSON.parse(JSON.stringify(piece.value)))

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

    //const newPieces = []
    //const flatGrid = firstStage.flat()
//
    //for (const piece of pieces) {
    //  const newPiece = JSON.parse(JSON.stringify(flatGrid.find(p => p.name === piece.name && p.name !== addedPiece.name)))
    //  newPieces.push(newPiece)
    //}    
    //setPieces(newPieces)

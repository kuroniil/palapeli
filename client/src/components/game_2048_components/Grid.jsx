import { useState } from "react"
import { startGrid, pieceColors, startPieces } from "../../utils/game2048Utils"
import { move } from "../../utils/gridLogic"

const Grid = ({ gridSize }) => {
  const [grid, setGrid] = useState(startGrid)
  const [grid2, setGrid2] = useState([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]])
  const [newPiecePos, setNewPiecePos] = useState({x: 5, y: 5})
  const [pieces, setPieces] = useState(JSON.parse(JSON.stringify(startPieces)))

  const handleClick = () => {
    const gridGeneration = move(grid, "up")
    //console.log(gridGeneration.next().value)
    //console.log(gridGeneration.next().value)

    const newGrid = gridGeneration.next().value
    const newGrid2 = gridGeneration.next().value

    const newPieces = []
    const flatGrid = newGrid.flat()
    for (const piece of pieces) {
      const index = flatGrid.findIndex(p => p.name === piece.name)
      const newPiece = {name: JSON.parse(JSON.stringify(piece.name))}
      newPiece.y = Math.floor(index / 4)
      newPiece.x = index % 4
      newPiece.value = parseInt(JSON.parse(JSON.stringify(piece.value)))
      newPieces.push(newPiece)
    }    
    setPieces(newPieces)
    
    const newPieces2 = []
    console.log(newPieces)
    console.log(newGrid2)

    let flatGrid2 = JSON.parse(JSON.stringify(newGrid2.flat()
      .filter(p => p.value !== 0 || newPieces.map(obj => obj.name).includes(p.name))))
    for (const piece of newPieces) {
      console.log(piece, flatGrid2)
      const newPiece = JSON.parse(JSON.stringify(flatGrid2.find(p => p.name === piece.name)))
      flatGrid2 = flatGrid2.filter(p => p.name !== piece.name)
      newPieces2.push(newPiece)
    }
    setNewPiecePos({x: flatGrid2[0].x, y: flatGrid2[0].y})
    //const gridNewPieceAdded = newGrid2[flatGrid2[0].y][flatGrid2[0].x].name
    setPieces(newPieces2.concat({...flatGrid2[0], name: newGrid2[flatGrid2[0].y][flatGrid2[0].x].name}))
    setGrid(newGrid2.map((_, i) => newGrid2.map(row => row[i])))
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
              transform: piece.x === newPiecePos.x && piece.y === newPiecePos.y ?
              "scale(0.8)"
              :`translateX(${3*piece.x}em) translateY(${3*piece.y}em)`,
              transition: 'transform 0.1s ease-out',
              background: piece.value !== 0 ? pieceColors[piece.value]["background"] : "transparent",
              color: pieceColors[piece.value]["color"]
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
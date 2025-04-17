import { useState, useEffect } from "react"
import { startGrid, pieceColors, startPieces } from "../../utils/game2048Utils"
import { move } from "../../utils/gridLogic"
import BaseGrid from "./BaseGrid"
import Pieces from "./Pieces"

const Grid = ({ gridSize, currentScore, setCurrentScore }) => {
  const [grid, setGrid] = useState(startGrid)
  const [newPieceName, setNewPieceName] = useState('')
  const [pieces, setPieces] = useState(JSON.parse(JSON.stringify(startPieces)))
  const [scaled, setScaled] = useState(0.0)

  useEffect(() => {
    const handleKeyboardInput = (event) => {
        switch (event.key) {
            case "ArrowUp":
              moveAnimations("up")
              break
            case "ArrowDown":
              moveAnimations("down")
              break
            case "ArrowLeft":
              moveAnimations("left")
              break
            case "ArrowRight":
              moveAnimations("right")
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

  const moveAnimations = (direction) => {
    setScaled(0.0)
    const [updatedGrid, addedPiece, scoreIncrement] = move(grid, direction)
    const updatedScore = currentScore + scoreIncrement
    setCurrentScore(updatedScore)
    setNewPieceName(addedPiece.name)
    const newPieces = []
    let flatGrid = updatedGrid.flat()
    
    for (const piece of pieces) {
        const newPiece = flatGrid.find(p => p.name === piece.name)
        newPieces.push(newPiece)
    }
    if (!newPieces.map(p => p.name).includes(addedPiece.name)) {
      newPieces.push(addedPiece)
    }
    
    setPieces(newPieces)
    setGrid(updatedGrid.map((_, i) => updatedGrid.map(row => row[i])))
      
      setTimeout(() => {
        setScaled(1.0)
      }, 10)
    }

  return (
    <div className="container">
      <BaseGrid gridSize={gridSize}/>
      <Pieces pieces={pieces} newPieceName={newPieceName} scaled={scaled} />
    </div>
  )
}

export default Grid

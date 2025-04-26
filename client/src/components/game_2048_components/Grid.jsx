import { useState, useEffect } from "react"
import { startGrid, startPieces, gameOverPieces } from "../../utils/game2048Utils"
import { move } from "../../utils/gridLogic"
import BaseGrid from "./BaseGrid"
import Pieces from "./Pieces"

const Grid = ({ gridSize, currentScore, setCurrentScore, gameOver, setGameOver, setScoreFormVisible }) => {
  const [grid, setGrid] = useState(JSON.parse(JSON.stringify(startGrid)))
  const [newPieceName, setNewPieceName] = useState('')
  const [pieces, setPieces] = useState(JSON.parse(JSON.stringify(startPieces)))
  const [scaled, setScaled] = useState(0.0)

  useEffect(() => {
    if (gameOver){
      handleGameOver()
    }
  }, [gameOver])

  useEffect(() => {
    const handleKeyboardInput = (event) => {
      if (gameOver && ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]
        .includes(event.key)) {
          return
        }
      switch (event.key) {
        case "Escape":
          restartGame()
          break
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
}, [grid, pieces, newPieceName, scaled, gameOver])

  const moveAnimations = (direction) => {
    setScaled(0.0)
    const [updatedGrid, addedPiece, scoreIncrement, gridChanged, gameIsOver] = move(grid, direction)
    setGameOver(gameIsOver)
    if (gridChanged) {
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
    } else {
      setScaled(1.0)
    }
  }

  const handleGameOver = () => {
      pieces.forEach((piece, i) => {
        setScaled(0.0)
        const index = gameOverPieces.findIndex(p => p.x === piece.x && p.y === piece.y)
        setTimeout(() => {
          if (index !== -1) {
            pieces.splice(i, 1, {...gameOverPieces[index]})
            const newPieces = [...pieces]
            setPieces(newPieces)
            setNewPieceName(gameOverPieces[index].name)
          } else {
            pieces.splice(i, 1, {...piece, value: 0})
            const newPieces = [...pieces]
            setPieces(newPieces)
            setNewPieceName(...pieces[i].name)
          }
          setScaled(1.0)
        }, i*25)
    })
  }

  const restartGame = () => {
    setGrid(JSON.parse(JSON.stringify(startGrid)))
    setPieces(JSON.parse(JSON.stringify(startPieces)))
    setCurrentScore(0)
    setGameOver(false)
    setScoreFormVisible(false)
  }

  return (
    <div className="container">
      <BaseGrid gridSize={gridSize}/>
      <Pieces pieces={pieces} newPieceName={newPieceName} scaled={scaled} />
    </div>
  )
}

export default Grid

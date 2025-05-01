import { useState, useEffect } from 'react'
import { v1 } from 'uuid'
import { startGrid, startPieces, gameOverPieces } from '../../utils/game2048Utils'
import { move } from '../../utils/gridLogic'
import BaseGrid from './BaseGrid'
import Pieces from './Pieces'
import Leaderboard from './Leaderboard'
import LoadGame from './LoadGame'

const Grid = (props) => {
  const [newPieceName, setNewPieceName] = useState('')
  const [scaled, setScaled] = useState(0.0)

  useEffect(() => {
    if (props.gameOver){
      handleGameOver()
    }
  }, [props.gameOver])

  useEffect(() => {
    const handleKeyboardInput = (event) => {
      if (props.gameOver && ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']
        .includes(event.key)) {
        return
      }
      if (props.loadGameVisible) return
      switch (event.key) {
      case 'Escape':
        restartGame()
        break
      case 'ArrowUp':
        moveAnimations('up')
        break
      case 'ArrowDown':
        moveAnimations('down')
        break
      case 'ArrowLeft':
        moveAnimations('left')
        break
      case 'ArrowRight':
        moveAnimations('right')
        break
      default:
        break
      }
    }
    document.addEventListener('keydown', handleKeyboardInput)

    return () => {
      document.removeEventListener('keydown', handleKeyboardInput)
    }
  }, [props.grid, props.pieces, newPieceName, scaled, props.gameOver, props.loadGameVisible])

  const moveAnimations = (direction) => {
    setScaled(0.0)
    const [updatedGrid, addedPiece, scoreIncrement, gridChanged, gameIsOver] = move(props.grid, direction)
    props.setGameOver(gameIsOver)
    if (gridChanged) {
      const updatedScore = props.currentScore + scoreIncrement

      props.setCurrentScore(updatedScore)
      setNewPieceName(addedPiece.name)
      const newPieces = []
      let flatGrid = updatedGrid.flat()

      for (const piece of props.pieces) {
        const newPiece = flatGrid.find(p => p.name === piece.name)
        newPieces.push(newPiece)
      }
      if (!newPieces.map(p => p.name).includes(addedPiece.name)) {
        newPieces.push(addedPiece)
      }

      props.setPieces(newPieces)
      props.setGrid(updatedGrid.map((_, i) => updatedGrid.map(row => row[i])))

      setTimeout(() => {
        setScaled(1.0)
      }, 10)
    } else {
      setScaled(1.0)
    }
  }

  const handleGameOver = () => {
    props.pieces.forEach((piece, i) => {
      setScaled(0.0)
      const index = gameOverPieces.findIndex(p => p.x === piece.x && p.y === piece.y)
      setTimeout(() => {
        if (index !== -1) {
          props.pieces.splice(i, 1, { ...gameOverPieces[index], id: v1() })
          const newPieces = JSON.parse(JSON.stringify(props.pieces))
          props.setPieces(newPieces)
          setNewPieceName(gameOverPieces[index].name)
        } else {
          props.pieces.splice(i, 1, { ...piece, value: 0, id: v1() })
          const newPieces = JSON.parse(JSON.stringify(props.pieces))
          props.setPieces(newPieces)
          setNewPieceName(props.pieces[i].name)
        }
        setScaled(1.0)
      }, i*25)
    })
  }

  const restartGame = () => {
    props.setGrid(JSON.parse(JSON.stringify(startGrid)))
    props.setPieces(JSON.parse(JSON.stringify(startPieces)))
    props.setCurrentScore(0)
    props.setGameOver(false)
    props.setScoreFormVisible(false)
    props.setScoreSubmitted(false)
    props.setLeaderboardVisible(false)
  }

  return (
    <div className="container">
      <BaseGrid gridSize={props.gridSize}/>
      <Pieces pieces={props.pieces} newPieceName={newPieceName} scaled={scaled} />
      <Leaderboard highlightId={props.highlightId} leaderboardVisible={props.leaderboardVisible} />
      {props.loadGameVisible && <LoadGame
        restartGame={restartGame} score={props.currentScore} setLoadGameVisible={props.setLoadGameVisible} />
      }
    </div>
  )
}

export default Grid

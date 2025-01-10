import { useState } from 'react'
import PuzzleGame from './components/Puzzlegame'
import Snake from './components/Snake'

function App() {
  const [gameState, setGameState] = useState(true)

  return (
    <div>
          {gameState
          ? <PuzzleGame />
          : <Snake />
          }
      <button style={{position: "absolute", top: "1px"}}
      onClick={() => setGameState(!gameState)}>
        Change Game
      </button>
    </div>
  )
}

export default App

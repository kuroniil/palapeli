import { useState } from 'react'
import PuzzleGame from './components/Puzzlegame'
import Snake from './components/Snake'

function App() {
  const [gameState, setGameState] = useState(true)

  return (
    <div>
        <button onClick={() => setGameState(!gameState)}>jjjjjjjj</button>
          {gameState
          ? <PuzzleGame />
          : <Snake />
          }
    </div>
  )
}

export default App

import { useState } from "react"
import Header from "./puzzle_components/Header"
import Grid from "./game_2048_components/Grid"

const Game2048 = (props) => {
  const [gridSize, setGridSize] = useState(4)
  
  return (
    <div>
      <Header title="2048_peli" />
      <button id="menu" onClick={(t) => props.changeAppState(t)}>main menu</button>
      <Grid gridSize={gridSize} />
    </div>
  )
}

export default Game2048
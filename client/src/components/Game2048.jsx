import { useState } from "react"
import Header from "./puzzle_components/Header"
import Grid from "./game_2048_components/Grid"
import Score from "./game_2048_components/Score"

const Game2048 = (props) => {
  const [gridSize, setGridSize] = useState(4)
  const [currentScore, setCurrentScore] = useState(0)

  return (
    <div>
      <h1 
        className="main-header"
        style={{
          marginTop: "0.5em",
          marginBottom: "1.1em", 
          fontSize: "500%"}}
          >
            2048_peli
      </h1>
      <div className="main-buttons" style={{marginBottom: "2em"}}>
        <button style={{padding: "0.25em"}} id="menu" onClick={(t) => props.changeAppState(t)}>main menu</button>
        <button style={{padding: "0.25em"}}>leaderboard</button>
        <Score currentScore={currentScore}/>
      </div>
      <Grid gridSize={gridSize} currentScore={currentScore} setCurrentScore={setCurrentScore} />
    </div>
  )
}

export default Game2048
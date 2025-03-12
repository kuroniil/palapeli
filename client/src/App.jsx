import { useState } from 'react'
import PuzzleGame from './components/Puzzlegame'
import Snake from './components/Snake'
import MainMenu from './components/MainMenu'

function App() {
  const [appState, setAppState] = useState("menu")

  const changeAppState = (event) => {
    setAppState(event.target.id)
  }

  return (
    <div>
      {appState === "puzzle" ?
        <div className="games">
          <PuzzleGame changeAppState={changeAppState}/>
        </div>
      : appState === "snake" ?
      <div className="games">
        <Snake changeAppState={changeAppState}/>
      </div>
      : appState === "menu" ?
      <MainMenu changeAppState={changeAppState}/>
      : ""
      }
    </div>
  )
}

export default App

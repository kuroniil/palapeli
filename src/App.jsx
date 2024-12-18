import Grid from './components/Grid'
import Header from './components/Header'
import Menu from './components/Menu'
import Timer from './components/Timer'
import { useState } from 'react'
import { randomizeGrid } from './utils/gridUtils'

function App() {
  const [gridSize, setGridSize] = useState(16)
  const [grid, setGrid] = useState([])
  const [gridComplete, setGridComplete] = useState(false)
  const [startTime, setStartTime] = useState(Date.now())
  const [time, setTime] = useState('')

  return (
    <div>
    <Header title="pala_peli" />
    <Menu setGrid={setGrid} setGridComplete={setGridComplete} setStartTime={setStartTime}/>
    <Timer time={time} setTime={setTime} startTime={startTime} />
    <Grid grid={grid} setGrid={setGrid} gridSize={gridSize}
    gridComplete={gridComplete} setGridComplete={setGridComplete} />
    </div>
  )
}

export default App

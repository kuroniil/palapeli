import Grid from './components/Grid'
import Header from './components/Header'
import Menu from './components/Menu'
import Timer from './components/Timer'
import { useState } from 'react'
import { randomizeGrid, defaultGrid } from './utils/gridUtils'

function App() {
  const [gridSize, setGridSize] = useState(16)
  const [grid, setGrid] = useState(defaultGrid)
  const [gridComplete, setGridComplete] = useState(false)
  const [startTime, setStartTime] = useState(Date.now())
  const [time, setTime] = useState('')

  return (
    <div>
    <Header title="pala_peli" />
    <Menu setGrid={setGrid} setGridComplete={setGridComplete} 
    setStartTime={setStartTime} setGridSize={setGridSize} gridSize={gridSize}/>
    <Timer time={time} setTime={setTime} startTime={startTime} />
    <Grid grid={grid} setGrid={setGrid} gridSize={gridSize}
    gridComplete={gridComplete} setGridComplete={setGridComplete} />
    </div>
  )
}

export default App

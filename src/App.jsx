import Grid from './components/Grid'
import Header from './components/Header'
import Menu from './components/Menu'
import Timer from './components/Timer'
import GridFinished from './components/GridFinished'
import { useState } from 'react'
import { defaultGrid } from './utils/gridUtils'

function App() {
  const [gridSize, setGridSize] = useState(16)
  const [grid, setGrid] = useState(defaultGrid)
  const [gridComplete, setGridComplete] = useState(false)
  const [startTime, setStartTime] = useState(Date.now())
  const [time, setTime] = useState('')
  const [finishTime, setFinishTime] = useState('')
  const [timerVisible, setTimerVisible] = useState(true)

  return (
    <div>
      <Header title="pala_peli" />
      <Menu setGrid={setGrid} setGridComplete={setGridComplete} 
      setStartTime={setStartTime} setGridSize={setGridSize} gridSize={gridSize}/>
      {timerVisible && <Timer time={time} setTime={setTime} startTime={startTime} />}
      {!gridComplete ?
      <Grid grid={grid} setGrid={setGrid} gridSize={gridSize}
      setGridComplete={setGridComplete} setFinishTime={setFinishTime} 
      time={time} setTimerVisible={setTimerVisible} />
      : <GridFinished finishTime={finishTime} />
      }
    </div>
  )
}

export default App

import Grid from './components/Grid'
import Header from './components/Header'
import Menu from './components/Menu'
import Timer from './components/Timer'
import Leaderboard from './components/Leaderboard'
import GridFinished from './components/GridFinished'
import { useEffect, useState } from 'react'
import { defaultGrid } from './utils/gridUtils'
import axios from 'axios'

function App() {
  const [gridSize, setGridSize] = useState(16)
  const [grid, setGrid] = useState(defaultGrid)
  const [gridComplete, setGridComplete] = useState(false)
  const [startTime, setStartTime] = useState(Date.now())
  const [time, setTime] = useState('')
  const [finishTime, setFinishTime] = useState('')
  const [timerVisible, setTimerVisible] = useState(true)
  const [totalMoves, setTotalMoves] = useState(0)
  const [scores, setScores] = useState([])
  const [leaderboardMode, setLeaderboardMode] = useState('3x3')

  const url = "http://localhost:3001/api/scores"

  useEffect(() => {
    axios
      .get(`${url}/${leaderboardMode}`)
      .then(response => {
        setScores(response.data)
      })
  }, [leaderboardMode])


  return (
    <div>
      <Header title="pala_peli" />
      <Menu setGrid={setGrid} setGridComplete={setGridComplete} setTotalMoves={setTotalMoves}
      setStartTime={setStartTime} setGridSize={setGridSize} gridSize={gridSize} />
      {timerVisible && <Timer time={time} setTime={setTime} startTime={startTime} />}
      <Leaderboard scores={scores} leaderboardMode={leaderboardMode} setLeaderboardMode={setLeaderboardMode}/>
      {!gridComplete ? <Grid grid={grid} setGrid={setGrid} gridSize={gridSize}
      setGridComplete={setGridComplete} setFinishTime={setFinishTime} 
      time={time} setTimerVisible={setTimerVisible} totalMoves={totalMoves}
      setTotalMoves={setTotalMoves} />
      : <GridFinished finishTime={finishTime} gridSize={gridSize} totalMoves={totalMoves}
      setLeaderboardMode={setLeaderboardMode} />
      }
    </div>
  )
}

export default App

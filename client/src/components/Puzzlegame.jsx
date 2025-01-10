import Grid from './puzzle_components/Grid'
import Header from './puzzle_components/Header'
import Menu from './puzzle_components/Menu'
import Timer from './puzzle_components/Timer'
import Leaderboard from './puzzle_components/Leaderboard'
import GridFinished from './puzzle_components/GridFinished'
import MenuIcon from './puzzle_components/MenuIcon'
import LeaderboardIcon from './puzzle_components/LeaderboardIcon'
import { useEffect, useState } from 'react'
import { defaultGrid, gridFont, findEmptyCell } from '../utils/gridUtils'
import scoreService from '../services/scores'
import timerService from '../services/timer'

const PuzzleGame = () => {
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
  const [LBModeTrigger, setLBModeTrigger] = useState(true)
  const [leaderboardVisible, setLeaderboardVisible] = useState(false)
  const [menuVisible, setMenuVisible] = useState(false)
  const [modesTabVisible, setModesTabVisible] = useState(false)
  const [guideVisible, setGuideVisible] = useState(false)
  const [highlightId, setHighlightId] = useState(-1)
  const [empty, setEmpty] = useState(findEmptyCell(grid, gridSize))
  const [timerId, setTimerId] = useState(null)

  const updateLeaderboardMode = (mode) => {
    setLeaderboardMode(mode)
    setLBModeTrigger(!LBModeTrigger)
  }

  useEffect(() => {
    if (gridSize === 25) {
      gridFont(5)
    } else {
      gridFont(6)
    }

  }, [gridSize, gridComplete])
  
  useEffect(() => {
    const oldTimerId = sessionStorage.getItem("timerId")
    if (oldTimerId) {
      timerService
        .timerStop(oldTimerId)
    }
    timerService
      .timerStart()
      .then(response => {
          setTimerId(response.data)
          sessionStorage.setItem("timerId", response.data)
      })
  }, [])

  useEffect(() => {
    scoreService
      .getByMode(leaderboardMode)
      .then(response => {
        setScores(response.data)
      })
  }, [LBModeTrigger])

  const handleMenuClick = () => {
    setModesTabVisible(false)
    setGuideVisible(false)
    const menuState = !menuVisible
    setMenuVisible(menuState)
  }

  return (
    <div>
      <Header title="pala_peli" />
      <div className="main-buttons">
        <MenuIcon handleMenuClick={handleMenuClick} leaderboardVisible={leaderboardVisible} 
        setLeaderboardVisible={setLeaderboardVisible} menuVisible={menuVisible} />
        <LeaderboardIcon setLeaderboardVisible={setLeaderboardVisible} handleMenuClick={handleMenuClick}
        setMenuVisible={setMenuVisible} leaderboardVisible={leaderboardVisible} menuVisible={menuVisible} />
        {timerVisible && <Timer time={time} setTime={setTime} startTime={startTime} />}
      </div>
      <Menu setGrid={setGrid} setGridComplete={setGridComplete} setTotalMoves={setTotalMoves}
        setStartTime={setStartTime} setGridSize={setGridSize} gridSize={gridSize} 
        handleMenuClick={handleMenuClick} setGuideVisible={setGuideVisible} modesTabVisible={modesTabVisible}
        guideVisible={guideVisible} menuVisible={menuVisible} setModesTabVisible={setModesTabVisible} 
        empty={empty} setEmpty={setEmpty} setTimerId={setTimerId} />
      <div className={`leaderboard-wrapper ${leaderboardVisible ? "visible" : "hidden"}`}>
          <Leaderboard scores={scores} leaderboardMode={leaderboardMode} updateLeaderboardMode={updateLeaderboardMode}
          setLeaderboardVisible={setLeaderboardVisible} highlightId={highlightId}/>
      </div>
      {!gridComplete ? <Grid grid={grid} setGrid={setGrid} gridSize={gridSize} empty={empty}
      setGridComplete={setGridComplete} setFinishTime={setFinishTime} setEmpty={setEmpty}
      time={time} setTimerVisible={setTimerVisible} totalMoves={totalMoves}
      setTotalMoves={setTotalMoves} timerId={timerId} />
      : <GridFinished finishTime={finishTime} gridSize={gridSize} totalMoves={totalMoves}
      updateLeaderboardMode={updateLeaderboardMode} setLeaderboardVisible={setLeaderboardVisible}
      setHighlightId={setHighlightId} highlightId={highlightId} />}
    </div>
  )
}

export default PuzzleGame

import MenuDetails from './MenuDetails'
import ModesTab from './ModesTab'
import Guide from './Guide'
import { randomizeGrid, findEmptyCell } from '../../utils/gridUtils'
import timerService from '../../services/timer'

const Menu = (props) => {
  const handleGuideClick = () => {
    props.setGuideVisible(true)
  }

  const handleModeClick = (event) => {
    const gridSize = parseInt(event.target.id)
    props.setGridSize(gridSize)
    handleRestart(gridSize)
  }

  const handleRestartClick = () => {
    handleRestart(props.gridSize)
  }

  const handleRestart = (size) => {
    const oldTimerId = sessionStorage.getItem('timerId')
    if (oldTimerId) {
      timerService
        .timerStop(oldTimerId)
    }
    timerService
      .timerStart()
      .then(response => {
        props.setTimerId(response.data)
        sessionStorage.setItem('timerId', response.data)
      })
    props.handleMenuClick()
    props.setGridComplete(false)
    props.setTotalMoves(0)
    const builtGrid = randomizeGrid(size)
    props.setGrid(builtGrid)
    props.setEmpty(findEmptyCell(builtGrid, size))
    props.setStartTime(Date.now())
  }

  const handleExitClick = () => {
    props.setModesTabVisible(false)
    props.setGuideVisible(false)
  }

  const handleModesClick = () => {
    props.setModesTabVisible(true)
  }

  return (
    <div className="menu-base">
      <div className={`menu-details-wrapper ${props.menuVisible ? 'visible' : 'hidden'}`}>
        <MenuDetails handleRestartClick={handleRestartClick} handleModesClick={handleModesClick}
          handleGuideClick={handleGuideClick} handleMenuClick={props.handleMenuClick}
          changeAppState={props.changeAppState} />
        <div className={`modes-details-wrapper ${props.modesTabVisible ? 'visible' : 'hidden'}`}>
          <ModesTab
            handleExitClick={handleExitClick}
            handleModeClick={handleModeClick} />
        </div>
        <div className={`guide-details-wrapper ${props.guideVisible ? 'visible' : 'hidden'}`}>
          <Guide handleExitClick={handleExitClick}/>
        </div>
      </div>
    </div>
  )
}

export default Menu
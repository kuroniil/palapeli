/* eslint-disable react/prop-types */
import MenuDetails from './MenuDetails' 
import ModesTab from './ModesTab'
import Guide from './Guide'
import { randomizeGrid, findEmptyCell } from '../utils/gridUtils'
import timerService from '../services/timer'

const Menu = (props) => {
    const handleGuideClick = () => {
        props.setGuideVisible(true)
    }

    const handleThreeByThreeClick = () => {
        props.setGridSize(9)
        handleRestart(9)
    }

    const handleFourByFourClick = () => {
        props.setGridSize(16)
        handleRestart(16)
    }

    const handleFiveByFiveClick = () => {
        props.setGridSize(25)
        handleRestart(25)
        }

    const handleRestartClick = () => {
        handleRestart(props.gridSize)
    }

    const handleRestart = (size) => {
        timerService
        .timerStart()
        .then(response => {
            props.setTimerId(response.data)
        })
        props.handleMenuClick()
        props.setGridComplete(false)
        props.setTotalMoves(0)
        let gridBuilt = false
        while (!gridBuilt) {
            gridBuilt = randomizeGrid(size)
        }
        props.setGrid(gridBuilt)
        props.setEmpty(findEmptyCell(gridBuilt, size))
        props.setStartTime(Date.now())
    }

    const handleExitClick = () => {
        props.setModesTabVisible(false)
        props.setGuideVisible(false)
    }

    const handleModeClick = () => {
        props.setModesTabVisible(true)
    }

    return (
        <div className="menu-base">
            <div className={`menu-details-wrapper ${props.menuVisible ? 'visible' : 'hidden'}`}>
                <MenuDetails handleRestartClick={handleRestartClick} handleModeClick={handleModeClick}
                handleGuideClick={handleGuideClick} handleMenuClick={props.handleMenuClick} />
                <div className={`modes-details-wrapper ${props.modesTabVisible ? 'visible' : 'hidden'}`}>
                    <ModesTab handleExitClick={handleExitClick} 
                    handleThreeByThreeClick={handleThreeByThreeClick}
                    handleFourByFourClick={handleFourByFourClick}
                    handleFiveByFiveClick={handleFiveByFiveClick}/>
                </div>
                <div className={`guide-details-wrapper ${props.guideVisible ? 'visible' : 'hidden'}`}>
                    <Guide handleExitClick={handleExitClick}/>
                </div>
            </div>
        </div>
    )
}

export default Menu
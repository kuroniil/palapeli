import { useState } from 'react'
import MenuIcon from './MenuIcon'
import MenuDetails from './MenuDetails' 
import ModesTab from './ModesTab'
import Guide from './Guide'
import { randomizeGrid } from '../utils/gridUtils'

const Menu = ({ setGrid, setGridComplete, setStartTime, setGridSize, gridSize }) => {
    const [menuVisible, setMenuVisible] = useState(false)
    const [modesTabVisible, setModesTabVisible] = useState(false)
    const [guideVisible, setGuideVisible] = useState(false)

    const handleMenuClick = () => {
        setModesTabVisible(false)
        setGuideVisible(false)
        const menuState = !menuVisible
        setMenuVisible(menuState)
    }

    const handleGuideClick = () => {
        setGuideVisible(true)
    }

    const handleThreeByThreeClick = () => {
        setGridSize(9)
        handleRestart(9)
    }

    const handleFourByFourClick = () => {
        setGridSize(16)
        handleRestart(16)
    }

    const handleFiveByFiveClick = () => {
        setGridSize(25)
        handleRestart(25)
        document.body.style.zoom = "95%"
        }

    const handleRestartClick = () => {
        handleRestart(gridSize)
    }

    const handleRestart = (size) => {
        handleMenuClick()
        setGridComplete(false)
        let gridBuilt = false
        while (!gridBuilt) {
            gridBuilt = randomizeGrid(size)
        }
        setGrid(gridBuilt)
        setStartTime(Date.now())
    }

    const handleExitClick = () => {
        setModesTabVisible(false)
        setGuideVisible(false)
    }

    const handleModeClick = () => {
        setModesTabVisible(true)
    }

    return (
        <div>
            <MenuIcon onClick={handleMenuClick} />
            <div className={`menu-details-wrapper ${menuVisible ? 'visible' : 'hidden'}`}>
                <MenuDetails handleRestartClick={handleRestartClick} handleModeClick={handleModeClick}
                handleGuideClick={handleGuideClick} />
                <div className={`modes-details-wrapper ${modesTabVisible ? 'visible' : 'hidden'}`}>
                    <ModesTab handleExitClick={handleExitClick} 
                    handleThreeByThreeClick={handleThreeByThreeClick}
                    handleFourByFourClick={handleFourByFourClick}
                    handleFiveByFiveClick={handleFiveByFiveClick}/>
                </div>
                <div className={`guide-details-wrapper ${guideVisible ? 'visible' : 'hidden'}`}>
                    <Guide handleExitClick={handleExitClick}/>
                </div>
            </div>
        </div>
    )
}

export default Menu
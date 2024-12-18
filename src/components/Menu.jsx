import { useState } from 'react'
import MenuIcon from './MenuIcon'
import MenuDetails from './MenuDetails' 
import { randomizeGrid } from '../utils/gridUtils'

const Menu = ({ setGrid, setGridComplete, setStartTime }) => {
    const [menuVisible, setMenuVisible] = useState(false)
    
    const handleMenuClick = () => {
        const menuState = !menuVisible
        setMenuVisible(menuState)
    }

    const handleRestartClick = () => {
        handleMenuClick()
        setGridComplete(false)
        setGrid(randomizeGrid(16))
        setStartTime(Date.now())
    }

    return (
        <div>
            <MenuIcon onClick={handleMenuClick} />
            <div className={`menu-details-wrapper ${menuVisible ? 'visible' : 'hidden'}`}>
                <MenuDetails handleRestartClick={handleRestartClick}/>
            </div>
        </div>
    )
}

export default Menu
import { useState } from 'react'
import MenuIcon from './MenuIcon'
import MenuDetails from './MenuDetails' 
import randomizeGrid from '../utils/gridUtils'

const Menu = () => {
    const [menuVisible, setMenuVisible] = useState(false)
    
    const handleMenuClick = () => {
        const menuState = !menuVisible
        setMenuVisible(menuState)
    }

    const handleRestartClick = () => {
        handleMenuClick()
        randomizeGrid(16)
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
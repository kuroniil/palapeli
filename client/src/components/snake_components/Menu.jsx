import { useState } from "react"
import CharactersMenu from "./CharactersMenu"

const Menu = (props) => {
    const handleRestartClick = () => {
        props.setGameOver(false)
        props.setPointCount(0)
        props.setSnakeGrid(props.defaultGrid)
        props.setTailPosition(props.defaultPlayer)
        props.setPlayerPosition(props.defaultPlayer[props.defaultPlayer.length-1])
        props.setMenuVisible(false)
        props.setDirection('D')
    }

    const handleChangeCharacterClick = () => {
        props.setCharactersMenuVisible(!props.charactersMenuVisible)
    }
    
    return (
        <div className="menu-base">
            <div className={`menu-details-wrapper ${props.menuVisible ? 'visible' : 'hidden'}`}>
                <div className="menu">
                    <h1>menu</h1>
                    <button onClick={handleRestartClick}>restart game</button>
                    <button onClick={handleChangeCharacterClick}>change character</button>
                    <button id="menu" onClick={props.changeAppState}>main menu</button>
                    <div onClick={props.handleMenuClick} className="exit-modes" style={{bottom: "4%", right: "14%"}}>×</div>
                </div>
                <CharactersMenu charactersMenuVisible={props.charactersMenuVisible} 
                setCharactersMenuVisible={props.setCharactersMenuVisible} 
                setCharacterSkin={props.setCharacterSkin} setMenuVisible={props.setMenuVisible}/>
            </div>
        </div>
    )
}

export default Menu
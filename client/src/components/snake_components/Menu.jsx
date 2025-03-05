import { useState } from "react"
import CharactersMenu from "./CharactersMenu"

const Menu = (props) => {
    const handleRestartClick = () => {
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
                    <h1>Menu</h1>
                    <button onClick={handleRestartClick}>restart game</button>
                    <button onClick={handleChangeCharacterClick}>change character</button>
                    <button>j</button>
                </div>
                <CharactersMenu charactersMenuVisible={props.charactersMenuVisible} 
                setCharactersMenuVisible={props.setCharactersMenuVisible} 
                setCharacterSkin={props.setCharacterSkin} setMenuVisible={props.setMenuVisible}/>
            </div>
        </div>
    )
}

export default Menu
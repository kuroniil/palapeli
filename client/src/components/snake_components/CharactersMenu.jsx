const CharactersMenu = ({ charactersMenuVisible, setCharactersMenuVisible, setCharacterSkin, setMenuVisible }) => {
    const handleCharacterClick = (event) => {
        switch (event.target.id) {
            case "1":
                setCharacterSkin("snake-player-default")
                break
            case "2":
                setCharacterSkin("snake-player-orange")
                break
            case "3":
                setCharacterSkin("snake-player-green")
                break
            default:
                break
        }
        setCharactersMenuVisible(false)
        setMenuVisible(false)
    }
    
    return (
        <div className={`characters-wrapper ${charactersMenuVisible ? 'visible' : 'hidden'}`}>
            <div onClick={() => setCharactersMenuVisible(false)} className="exit-button">×</div>
            <div className="menu">
                <h1>change character</h1>
                <button id="1" onClick={handleCharacterClick}>default</button>
                <button id="2" onClick={handleCharacterClick}>orange</button>
                <button id="3" onClick={handleCharacterClick}>green</button>
            </div>
            
        </div>
    )
}

export default CharactersMenu
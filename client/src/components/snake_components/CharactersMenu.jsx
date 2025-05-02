const CharactersMenu = ({ charactersMenuVisible, setCharactersMenuVisible, setCharacterSkin, setMenuVisible, setNotification }) => {
  const handleCharacterClick = (event) => {
    setCharacterSkin(`snake-player-${event.target.id}`)
    setNotification(`Character changed to ${event.target.id}`)
    setTimeout(() => {
      setNotification('')
    }, 1500)
    setCharactersMenuVisible(false)
    setMenuVisible(false)
  }

  return (
    <div className={`characters-wrapper ${charactersMenuVisible ? 'visible' : 'hidden'}`}>
      <div onClick={() => setCharactersMenuVisible(false)} className="exit-button">×</div>
      <div className="menu">
        <h1>change character</h1>
        <button id="default" onClick={handleCharacterClick}>default</button>
        <button id="orange" onClick={handleCharacterClick}>orange</button>
        <button id="green" onClick={handleCharacterClick}>green</button>
      </div>

    </div>
  )
}

export default CharactersMenu
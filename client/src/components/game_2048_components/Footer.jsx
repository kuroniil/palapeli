const Footer = ({ setNotification, gameOver, handleScoreSaveClick, grid, pieces, score }) => {
  const handleSave = () => {
    try {
      localStorage.setItem('grid', JSON.stringify(grid))
      localStorage.setItem('pieces', JSON.stringify(pieces))
      localStorage.setItem('score', score)
      setNotification('Game saved in browser storage')
    } catch (error) {
      setNotification('Saving game failed')
    }
    setTimeout(() => {
      setNotification('')
    }, 2000)
  }
  return (
    <div style={{ marginTop: '1em', alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
      <span style={{ fontSize: 'medium', fontFamily: 'Times New Roman' }}>Restart - press Esc</span>
      {gameOver ?
        <button className="game-2048-icon-clickable" onClick={handleScoreSaveClick}>
          Save score
        </button>
        : <button onClick={handleSave} className="game-2048-icon-clickable">
            Save
        </button>}
    </div>
  )
}

export default Footer
const Guide = ({ handleExitClick }) => {
    return (
        <div className="menu">
            <div className="exit-modes" onClick={handleExitClick}>×</div>
            <h2>Järjestä palat numerojärjestykseen</h2>
            <img src="grid.png" alt="grid" />
            </div>
        
    )
}

export default Guide
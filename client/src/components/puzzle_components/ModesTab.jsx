const ModesTab = ({ handleExitClick, handleThreeByThreeClick, handleFourByFourClick, handleFiveByFiveClick }) => {
    return (
        <div className="menu">
            <div className="exit-modes" onClick={handleExitClick}>×</div>
            <h1 className="mode-h1">valitse moodi</h1>
            <button onClick={handleThreeByThreeClick}>3x3</button>
            <button onClick={handleFourByFourClick}>4x4</button>
            <button onClick={handleFiveByFiveClick}>5x5</button>
        </div>
    )
}

export default ModesTab
const MenuDetails = ({ handleRestartClick, handleModeClick, handleGuideClick }) => {
    return (
        <div className="menu">
            <h1>valikko</h1>
            <button onClick={handleRestartClick}>restart game</button>
            <button onClick={handleModeClick}>change mode</button>
            <button onClick={handleGuideClick}>guide</button>
        </div>    
    )
}

export default MenuDetails
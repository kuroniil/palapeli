const MenuDetails = ({ handleRestartClick, handleModeClick, handleGuideClick, handleMenuClick, changeAppState }) => {


    return (
        <div className="menu">
            <div onClick={handleMenuClick} className="exit-button">×</div>
            <h1>menu</h1>
            <button onClick={handleRestartClick}>restart game</button>
            <button onClick={handleModeClick}>change mode</button>
            <button onClick={handleGuideClick}>guide</button>
            <button onClick={changeAppState} id="menu">main menu</button>
        </div>    
    )
}

export default MenuDetails
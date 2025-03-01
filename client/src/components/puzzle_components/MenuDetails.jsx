const MenuDetails = ({ handleRestartClick, handleModeClick, handleGuideClick, handleMenuClick }) => {


    return (
        <div className="menu">
            <div onClick={handleMenuClick} className="exit-modes">×</div>
            <h1>menu</h1>
            <button onClick={handleRestartClick}>restart game</button>
            <button onClick={handleModeClick}>change mode</button>
            <button onClick={handleGuideClick}>guide</button>
            
        </div>    
    )
}

export default MenuDetails
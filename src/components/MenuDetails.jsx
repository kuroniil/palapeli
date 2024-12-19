const MenuDetails = ({ handleRestartClick, handleModeClick }) => {
    return (
        <div className="menu">
            <h1>valikko</h1>
            <button onClick={handleRestartClick}>restart game</button>
            <button onClick={handleModeClick}>change mode</button>
        </div>    
    )
}

export default MenuDetails
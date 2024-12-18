const MenuDetails = ({handleRestartClick}) => {
    return (
        <div className="menu">
            <h1>valikko</h1>
            <button onClick={handleRestartClick}>restart game</button>
            <button>to main menu</button>
        </div>    
    )
}

export default MenuDetails
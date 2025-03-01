const Menu = (props) => {
    return (
        <div className="menu-base">
            <div className={`menu-details-wrapper ${props.menuVisible ? 'visible' : 'hidden'}`}>
                <div className="menu">
                    <h1>Menu</h1>
                    <button>restart game</button>
                    <button>j</button>
                    <button>j</button>
                </div>
            </div>
            
        </div>
    )
}

export default Menu
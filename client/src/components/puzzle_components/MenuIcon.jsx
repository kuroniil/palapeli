const MenuIcon = (props) => {
    const handleClick = () => {
        props.setLeaderboardVisible(false)
        props.handleMenuClick()
    }

    return (
        <div className="menuicon" onClick={handleClick}>
            Menu
        </div>
    )
}

export default MenuIcon
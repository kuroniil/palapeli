const MenuButton = (props) => {
    const handleClick = () => {
        props.setMenuVisible(!props.menuVisible)
    }
    return (
        <button onClick={handleClick}>
            Menu
        </button>
    )
}

export default MenuButton
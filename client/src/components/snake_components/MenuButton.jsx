const MenuButton = ({ handleMenuClick, setLeaderboardVisible }) => {
  const handleClick = () => {
    handleMenuClick()
    setLeaderboardVisible(false)
  }
  return (
    <button onClick={handleClick}>
            Menu
    </button>
  )
}

export default MenuButton
const MenuIcon = (props) => {
  const handleClick = () => {
    props.setLeaderboardVisible(false)
    props.handleMenuClick()
  }

  return (
    <button onClick={handleClick}>Menu</button>
  )
}

export default MenuIcon
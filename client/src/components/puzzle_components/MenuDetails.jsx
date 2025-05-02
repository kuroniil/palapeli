const MenuDetails = ({ handleRestartClick, handleModesClick, handleGuideClick, handleMenuClick, changeAppState }) => (
  <div className="menu">
    <div onClick={handleMenuClick} className="exit-button">×</div>
    <h1>menu</h1>
    <button onClick={handleRestartClick}>restart game</button>
    <button onClick={handleModesClick}>change mode</button>
    <button onClick={handleGuideClick}>guide</button>
    <button onClick={changeAppState} id="menu">main menu</button>
  </div>
)

export default MenuDetails
import CharactersMenu from "./CharactersMenu";
import { copyArray } from "../../utils/snakeUtils";

const Menu = (props) => {
  const handleRestartClick = () => {
    const defaultGrid = copyArray(props.defaultGrid);
    const defaultPlayer = copyArray(props.defaultPlayer);
    props.setGameOver(false);
    props.setPointCount(0);
    props.setPoint([10, 10]);
    props.setSnakeGrid(defaultGrid);
    props.setTailPosition(defaultPlayer);
    props.setPlayerPosition(defaultPlayer[defaultPlayer.length - 1]);
    props.setMenuVisible(false);
    props.setDirection("D");
  };

  const handleChangeCharacterClick = () => {
    props.setCharactersMenuVisible(!props.charactersMenuVisible);
  };

  return (
    <div className="menu-base">
      <div
        className={`menu-details-wrapper ${
          props.menuVisible ? "visible" : "hidden"
        }`}
      >
        <div onClick={props.handleMenuClick} className="exit-button">
          ×
        </div>
        <div className="menu">
          <h1>menu</h1>
          <button onClick={handleRestartClick}>restart game</button>
          <button onClick={handleChangeCharacterClick}>change character</button>
          <button id="menu" onClick={props.changeAppState}>
            main menu
          </button>
        </div>
        <CharactersMenu
          charactersMenuVisible={props.charactersMenuVisible}
          setCharactersMenuVisible={props.setCharactersMenuVisible}
          setCharacterSkin={props.setCharacterSkin}
          setMenuVisible={props.setMenuVisible}
          setNotification={props.setNotification}
        />
      </div>
    </div>
  );
};

export default Menu;

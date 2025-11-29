import icon2048 from "/images/2048.png";
import grid from "/images/grid2.png";
import snake from "/images/snake.png";
import leadedboardIcon from "/images/leaderboard.png";

const MainMenu = (props) => {
  const buttonStyle = {
    display: "flex",
    justifyContent: "flex-start",
    paddingLeft: "20%",
    alignItems: "center",
    backgroundSize: "2em 2em",
    backgroundPosition: "90%",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="main-menu">
      <h1 className="main-header">Main Menu</h1>
      <div className="main-menu-container">
        <button
          id="2048"
          onClick={props.changeAppState}
          style={{ ...buttonStyle, backgroundImage: `url(${icon2048})` }}
        >
          2048
        </button>
        <button
          id="puzzle"
          onClick={props.changeAppState}
          style={{ ...buttonStyle, backgroundImage: `url(${grid})` }}
        >
          puzzle
        </button>
        <button
          id="snake"
          onClick={props.changeAppState}
          style={{
            ...buttonStyle,
            backgroundImage: `url(${snake})`,
            backgroundSize: "2em 0.5em",
          }}
        >
          snake
        </button>
        <button
          id="leaderboards"
          onClick={props.changeAppState}
          style={{ ...buttonStyle, backgroundImage: `url(${leadedboardIcon})` }}
        >
          leaderboards
        </button>
      </div>
    </div>
  );
};

export default MainMenu;

import { useState } from "react";
import PuzzleGame from "./components/Puzzlegame";
import Snake from "./components/Snake";
import MainMenu from "./components/MainMenu";
import Game2048 from "./components/Game2048";
import Leaderboards from "./components/Leaderboards";
import Notification from "./components/game_2048_components/Notification";

function App() {
  const [appState, setAppState] = useState("menu");
  const [notification, setNotification] = useState("");

  const changeAppState = (event) => {
    setAppState(event.target.id);
  };

  return (
    <div>
      {notification && <Notification message={notification} />}
      {appState === "puzzle" ? (
        <div className="games">
          <PuzzleGame appState={appState} changeAppState={changeAppState} />
        </div>
      ) : appState === "snake" ? (
        <div className="games">
          <Snake
            changeAppState={changeAppState}
            setNotification={setNotification}
          />
        </div>
      ) : appState === "menu" ? (
        <MainMenu changeAppState={changeAppState} />
      ) : appState === "2048" ? (
        <Game2048
          changeAppState={changeAppState}
          setNotification={setNotification}
        />
      ) : (
        <Leaderboards changeAppState={changeAppState} />
      )}
    </div>
  );
}

export default App;

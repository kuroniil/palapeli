import { useState, useEffect } from "react";
import SnakeGrid from "./snake_components/SnakeGrid";
import GameOver from "./snake_components/GameOver";
import SnakeScore from "./snake_components/SnakeScore";
import MenuButton from "./snake_components/MenuButton";
import LeaderboardButton from "./snake_components/LeaderboardButton";
import Menu from "./snake_components/Menu";
import Leaderboard from "./snake_components/Leaderboard";
import { defaultGrid, defaultPlayer, copyArray } from "../utils/snakeUtils";

const Snake = ({ changeAppState, setNotification }) => {
  const [gridSize, setGridSize] = useState([20, 20]);
  const [point, setPoint] = useState([10, 10]);
  const [snakeGrid, setSnakeGrid] = useState(copyArray(defaultGrid));
  const [playerPosition, setPlayerPosition] = useState([5, 5]);
  const [tailPosition, setTailPosition] = useState([
    [3, 5],
    [4, 5],
    [5, 5],
  ]);
  const [direction, setDirection] = useState("D");
  const [lastMovePos, setLastMovePos] = useState([5, 5]);
  const [pointCount, setPointCount] = useState(0);
  const [tailUpdating, setTailUpdating] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [leaderboardVisible, setLeaderboardVisible] = useState(false);
  const [characterSkin, setCharacterSkin] = useState("snake-player-green");
  const [charactersMenuVisible, setCharactersMenuVisible] = useState(false);
  const [highlightId, setHighlightId] = useState(-1);
  const [leaderboardState, setLeaderboardState] = useState("all");

  const collectPoint = () => {
    const newPointCount = pointCount + 1;
    setPointCount(newPointCount);

    while (true) {
      var newPosition = [
        Math.floor(Math.random() * gridSize[0]),
        Math.floor(Math.random() * gridSize[1]),
      ];
      if (!isSnake(newPosition)) {
        break;
      }
    }
    const newPoint = newPosition;
    setPoint(newPoint);
    updateGrid("pointCollect", newPoint, 2);
    setTailUpdating(true);
  };

  const updateGrid = (event, newPos, newVal) => {
    const updatedGrid = snakeGrid;
    updatedGrid[newPos[0]][newPos[1]] = newVal;
    var newTail = tailPosition;
    if (!tailUpdating) {
      updatedGrid[tailPosition[0][0]][tailPosition[0][1]] = 0;
      const spliced = tailPosition.splice(0, 1);
      newTail = tailPosition.filter((t) => t !== spliced);
    }
    newTail.push(newPos);
    if (event === "playerMove") {
      setTailPosition(newTail);
      setTailUpdating(false);
    }
    setSnakeGrid(updatedGrid);
  };
  const updatePlayerPosition = (direction) => {
    const oldPos = playerPosition;
    var newPos = -1;
    switch (direction) {
      case "R":
        if (oldPos[1] !== gridSize[1] - 1) {
          newPos = [oldPos[0], oldPos[1] + 1];
        } else {
          newPos = [oldPos[0], 0];
        }
        break;
      case "L":
        if (oldPos[1] !== 0) {
          newPos = [oldPos[0], oldPos[1] - 1];
        } else {
          newPos = [oldPos[0], gridSize[1] - 1];
        }
        break;
      case "U":
        if (oldPos[0] !== 0) {
          newPos = [oldPos[0] - 1, oldPos[1]];
        } else {
          newPos = [gridSize[0] - 1, oldPos[1]];
        }
        break;
      case "D":
        if (oldPos[0] !== gridSize[0] - 1) {
          newPos = [oldPos[0] + 1, oldPos[1]];
        } else {
          newPos = [0, oldPos[1]];
        }
        break;
    }
    setPlayerPosition(newPos);
    if (isSnake(newPos)) {
      setGameOver(true);
    }
    updateGrid("playerMove", newPos, 1);
    if (newPos[0] === point[0] && newPos[1] === point[1]) {
      collectPoint();
    }
  };

  const isSnake = (newPos) =>
    tailPosition.some((pos) => pos[0] === newPos[0] && pos[1] === newPos[1]);

  useEffect(() => {
    const handleKeyboardInput = (event) => {
      if (playerPosition !== lastMovePos) {
        switch (event.key) {
          case "ArrowUp":
            if (direction !== "D") {
              setLastMovePos(playerPosition);
              setDirection("U");
            }
            break;
          case "ArrowDown":
            if (direction !== "U") {
              setLastMovePos(playerPosition);
              setDirection("D");
            }
            break;
          case "ArrowLeft":
            if (direction !== "R") {
              setLastMovePos(playerPosition);
              setDirection("L");
            }
            break;
          case "ArrowRight":
            if (direction !== "L") {
              setLastMovePos(playerPosition);
              setDirection("R");
            }
            break;
          default:
            break;
        }
      }
    };
    document.addEventListener("keydown", handleKeyboardInput);

    return () => {
      document.removeEventListener("keydown", handleKeyboardInput);
    };
  }, [playerPosition]);

  useEffect(() => {
    const interval = setInterval(() => {
      updatePlayerPosition(direction);
    }, 80);

    return () => clearInterval(interval);
  }, [direction, playerPosition]);

  const handleMenuClick = () => {
    setMenuVisible(!menuVisible);
    setCharactersMenuVisible(false);
  };

  return (
    <div className="snake">
      <h1 className="main-header">mato_peli</h1>
      <div>
        <div className="main-buttons">
          <MenuButton
            handleMenuClick={handleMenuClick}
            setLeaderboardVisible={setLeaderboardVisible}
          />
          <LeaderboardButton
            leaderboardVisible={leaderboardVisible}
            handleMenuClick={handleMenuClick}
            setLeaderboardVisible={setLeaderboardVisible}
            setMenuVisible={setMenuVisible}
          />
          <SnakeScore pointCount={pointCount} />
        </div>
        <Menu
          menuVisible={menuVisible}
          setMenuVisible={setMenuVisible}
          setPoint={setPoint}
          defaultGrid={defaultGrid}
          defaultPlayer={defaultPlayer}
          setGameOver={setGameOver}
          setTailPosition={setTailPosition}
          setSnakeGrid={setSnakeGrid}
          setPointCount={setPointCount}
          setPlayerPosition={setPlayerPosition}
          setDirection={setDirection}
          setCharacterSkin={setCharacterSkin}
          charactersMenuVisible={charactersMenuVisible}
          changeAppState={changeAppState}
          setCharactersMenuVisible={setCharactersMenuVisible}
          handleMenuClick={handleMenuClick}
          setNotification={setNotification}
        />
        <Leaderboard
          leaderboardVisible={leaderboardVisible}
          setLeaderboardVisible={setLeaderboardVisible}
          highlightId={highlightId}
          leaderboardState={leaderboardState}
          setLeaderboardState={setLeaderboardState}
        />
      </div>
      {gameOver ? (
        <GameOver
          pointCount={pointCount}
          characterSkin={characterSkin}
          setHighlightId={setHighlightId}
          setLeaderboardState={setLeaderboardState}
          setLeaderboardVisible={setLeaderboardVisible}
        />
      ) : (
        <SnakeGrid
          snakeGrid={snakeGrid}
          playerPosition={playerPosition}
          characterSkin={characterSkin}
        />
      )}
    </div>
  );
};
export default Snake;

const LoadGame = ({ score, setLoadGameVisible, restartGame }) => {
  const divStyle = {
    display: "flex",
    justifyContent: "space-evenly",
    textAlign: "center",
    flexDirection: "column",
    position: "absolute",
    top: "12.5%",
    left: "12.5%",
    width: "75%",
    height: "75%",
    background: "brown",
    border: "solid 2px black",
    borderRadius: "0.3em",
  };

  const textStyle = {
    fontSize: "150%",
    fontWeight: "bold",
    color: "white",
  };

  const handleRemoveSave = () => {
    localStorage.removeItem("score");
    localStorage.removeItem("grid");
    localStorage.removeItem("pieces");
    handleNewGame();
  };

  const handleLoadGame = () => {
    setLoadGameVisible(false);
  };

  const handleNewGame = () => {
    setLoadGameVisible(false);
    restartGame();
  };

  return (
    <div style={divStyle}>
      <p style={textStyle}>You have a saved game with score {score}</p>
      <p style={textStyle}>Do you want to load the game?</p>
      <div className="main-buttons">
        <button onClick={handleLoadGame}>load game</button>
        <button onClick={handleNewGame}>new game</button>
        <button onClick={handleRemoveSave}>remove save</button>
      </div>
    </div>
  );
};

export default LoadGame;

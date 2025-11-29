const SnakeButtons = ({ leaderboardState, setLeaderboardState }) => {
  const handleClick = (event) => {
    setLeaderboardState(event.target.id);
  };

  return (
    <>
      <button
        className={leaderboardState === "all" ? "selected" : ""}
        id="all"
        onClick={handleClick}
      >
        all
      </button>
      <button
        className={leaderboardState === "default" ? "selected" : ""}
        id="default"
        onClick={handleClick}
      >
        default
      </button>
      <button
        className={leaderboardState === "orange" ? "selected" : ""}
        id="orange"
        onClick={handleClick}
      >
        orange
      </button>
      <button
        className={leaderboardState === "green" ? "selected" : ""}
        id="green"
        onClick={handleClick}
      >
        green
      </button>
    </>
  );
};

export default SnakeButtons;

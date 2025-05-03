const MainMenu = (props) => {
  const buttonStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    paddingLeft: '20%',
    alignItems: 'center',
    backgroundSize: '2em 2em',
    backgroundPosition: '90%',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <div className="main-menu">
      <h1 className="main-header">Main Menu</h1>
      <div className="main-menu-container">
        <button
          id="2048"
          onClick={props.changeAppState}
          style={{ ...buttonStyle, backgroundImage: 'url(2048.png)' }}>
          2048
        </button>
        <button
          id="puzzle"
          onClick={props.changeAppState}
          style={{ ...buttonStyle, backgroundImage: 'url(grid2.png)' }}>
          puzzle
        </button>
        <button
          id="snake"
          onClick={props.changeAppState}
          style={{ ...buttonStyle, backgroundImage: 'url(snake.png)', backgroundSize: '2em 0.5em' }}>
          snake
        </button>
        <button
          id="leaderboards"
          onClick={props.changeAppState}
          style={{ ...buttonStyle, backgroundImage: 'url(leaderboard.png)' }}>
          leaderboards
        </button>
      </div>
    </div>
  )
}

export default MainMenu
const MainMenu = (props) => {
    return (
        <div className="main-menu">
            <h1 className="main-header">Main Menu</h1>
            <div className="main-menu-container">
                <button id="puzzle" onClick={props.changeAppState}>puzzle</button>
                <button id="snake" onClick={props.changeAppState}>snake</button>
                <button id="2048" onClick={props.changeAppState}>2048</button>
                <button>leaderboards</button>
            </div>
        </div>
    )
}

export default MainMenu
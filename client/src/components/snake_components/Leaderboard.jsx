import { useEffect, useState } from "react"
import scoreService from '../../services/snakescores'
import Score from "./Score"

const Leaderboard = (props) => {
    const [leaderboardState, setLeaderboardState] = useState('all')
    const [scores, setScores] = useState([])
    const handleClick = (event) => {
        switch (event.target.id) {
            case 'all':
                setLeaderboardState('all')
                break
            case 'default':
                setLeaderboardState('default')
                break
            case 'orange':
                setLeaderboardState('orange')
                break
            case 'green':
                setLeaderboardState('green')
                break
        }
    }

    useEffect(() => {
        leaderboardState === 'all'
        ? scoreService    
            .getAll()
            .then((response) => {
                setScores(response.data)
            })
        : scoreService    
            .getByCharacter(leaderboardState)
            .then((response) => {
                setScores(response.data)
            })
    }, [leaderboardState])
    
    return (
        <div className={`leaderboard-wrapper ${props.leaderboardVisible ? 'visible' : 'hidden'}`}>
            <div className="leaderboard">
                <div onClick={() => props.setLeaderboardVisible(false)} className="exit-leaderboard">×</div>
                <h2>Leaderboard</h2>
                <div className="buttons">
                    <button id="all" onClick={handleClick}>all</button>
                    <button id="default" onClick={handleClick}>default</button>
                    <button id="orange" onClick={handleClick}>orange</button>
                    <button id="green" onClick={handleClick}>green</button>
                </div>
                <h3>{leaderboardState === 'all' ? 'all' : `${leaderboardState} character`}</h3>
                <div className="leaderboard-table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Name</th>
                                <th>Score</th>
                                <th>Character</th>
                            </tr>
                        </thead>
                        <tbody>
                        {scores.map((score, index) => 
                        <Score key={score.id} score={score} index={index} id={score.id} character={score.character} highlightId={props.highlightId}/>)}
                        </tbody>
                   </table>
                </div>
            </div>
        </div>
    )
}

export default Leaderboard
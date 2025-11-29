import { useEffect, useState } from "react";
import scoreService from "../../services/scores2048";
import LeaderboardScore from "./LeaderboardScore";

const Leaderboard = ({ leaderboardVisible, highlightId }) => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    scoreService.getAll().then((response) => {
      setScores(response.data);
    });
  }, [leaderboardVisible]);

  return (
    <div
      className={`leaderboard-wrapper ${
        leaderboardVisible ? "visible" : "hidden"
      }`}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0em",
      }}
    >
      <div className="leaderboard" style={{ borderRadius: "0.5em" }}>
        <h2>Leaderboard</h2>
        <div className="leaderboard-table-container">
          <table style={{ width: "23em" }}>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {scores.map((score, index) => (
                <LeaderboardScore
                  key={score.id}
                  score={score}
                  index={index}
                  id={score.id}
                  highlightId={highlightId}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;

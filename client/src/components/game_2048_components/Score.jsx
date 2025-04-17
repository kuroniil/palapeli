const Score = ({ currentScore }) => (
  <div style={{
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    color: "white",
    background: "brown",
    padding: "2em",
    paddingTop: "0.5em",
    paddingBottom: "0.5em",
    border: "solid 2px black",
    borderRadius: "1em",
    textShadow: "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black",
    textAlign: "center",
    fontSize: "120%"
  }}>
    score:
    <br></br>
    {currentScore}
  </div>
)

export default Score

const Score = ({ score, index, type }) => {
  return (
      <tr id={score.id}>
          <td>{index + 1}.</td>
          <td>{score.name}</td>
          <td>{type === "puzzle" ? `${score.score} sec` : score.score}</td>
          {type !== "2048" && <td>{score.mode || score.character}</td>}
      </tr>
  )
}

export default Score
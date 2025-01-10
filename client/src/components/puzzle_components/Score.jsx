const Score = ({ score, index, id, highlightId }) => {
    let cName = ""
    id === highlightId ? cName = "score" : ""
    
    return (
        <tr className={cName} id={id}>
            <td>{index + 1}.</td>
            <td>{score.name}</td>
            <td>{score.score} sec</td>
        </tr>
    )
}

export default Score
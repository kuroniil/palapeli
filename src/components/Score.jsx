const Score = ({ score, index }) => {
    return (
        <tr>
            <td>{index + 1}.</td>
            <td>{score.name}</td>
            <td>{score.score} sec</td>
        </tr>
    )
}

export default Score
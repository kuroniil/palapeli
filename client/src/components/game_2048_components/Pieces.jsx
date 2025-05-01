import { pieceColors } from '../../utils/game2048Utils'

const Pieces = ({ pieces, newPieceName, scaled }) => (
  <>
    {pieces.map(piece => (
      <div
        key={`${piece.id}`}
        className="game-piece"
        style={{
          top: `${-0.094*piece.y}vh`,
          left: `${-0.019*piece.x}vh`,
          transform:
              piece.name === newPieceName
                ? `translateX(${12*piece.x}vh) translateY(${3.15*piece.y}em) scale(${scaled})`
                : `translateX(${12*piece.x}vh) translateY(${3.15*piece.y}em)`,
          transition: 'transform 0.1s ease',
          background:
            piece.value === 'E'
              ? piece.y === 2
                ? '#a40af7'
                : '#39c7cc'
              : piece.value !== 0
                ? pieceColors[piece.value]['background']
                : 'transparent',
          color: pieceColors[piece.value]['color'],
        }}>
        {piece.value}
      </div>
    ))}
  </>
)

export default Pieces
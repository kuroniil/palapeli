import { pieceColors } from '../../utils/game2048Utils'

const Pieces = ({ pieces, newPieceName, scaled }) => (
  <>
    {pieces.map(piece => (
      <div
        key={`${piece.id}`}
        className="game-piece"
        style={{
          top: `${-0.064*piece.y}em`,
          left: '-0.01em',
          transform:
              piece.name === newPieceName
                ? `translateX(${3*piece.x}em) translateY(${3*piece.y}em) scale(${scaled})`
                : `translateX(${3*piece.x}em) translateY(${3*piece.y}em)`,
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
import { v1 } from "uuid"

const ids = Array.from({ length: 16 }).map(_ => v1()) 
const startGrid = Array.from(
  { length: 4 }, (_, i) => Array.from({ length: 4 }, 
    (_, j) => ({name: `piece-${i*4+j+1}`, y: i, x: j, value: 0, id: ids[i*4+j]}))
  )
startGrid[2][3].value = 2
startGrid[3][2].value = 2

const startPieces = [
  {name: "piece-12", y: 2, x: 3, value: 2, id: ids[11]},
  {name: "piece-15", y: 3, x: 2, value: 2, id: ids[14]},
]

const pieceColors = {
  0: {
      background: "#a2a38b",
      color: "transparent",
      zIndex: -1
  },
  2: {
    background: "#f2ff00",
    color: "white"
  },
  4: {
    background: "orange",
    color: "white"
  },
  8: {
    background: "red",
    color: "white"
  },
  16: {
    background: "purple",
    color: "white"
  }
}


export {
  pieceColors,
  startGrid,
  startPieces
}
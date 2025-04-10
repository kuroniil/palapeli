const startGrid = Array.from(
  { length: 4 }, _ => Array.from({ length: 4 }, _ => 0))

startGrid[2][3] = 2
startGrid[3][2] = 2

const pieceColors = {
  0: {
      background: "#a2a38b",
      color: "transparent",
      zIndex: -1
  },
  2: {
    background: "#f2ff00",
    color: "white"
  }
}


export {
  pieceColors,
  startGrid
}
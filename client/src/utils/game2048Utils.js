import { v1 } from "uuid";

const ids = Array.from({ length: 16 }).map((_) => v1());
const startGrid = Array.from({ length: 4 }, (_, i) =>
  Array.from({ length: 4 }, (_, j) => ({
    name: `piece-${i * 4 + j + 1}`,
    y: i,
    x: j,
    value: 0,
    id: ids[i * 4 + j],
  }))
);
startGrid[2][3].value = 2;
startGrid[3][2].value = 2;

const startPieces = [
  { name: "piece-12", y: 2, x: 3, value: 2, id: ids[11] },
  { name: "piece-15", y: 3, x: 2, value: 2, id: ids[14] },
];

const pieceColors = {
  0: {
    background: "#a2a38b",
    color: "transparent",
  },
  2: { background: "#f2ff00" },
  4: { background: "#f2d44e" },
  8: { background: "#dbb302" },
  16: { background: "#c48000" },
  32: { background: "#f7900a" },
  64: { background: "#f7510a" },
  128: { background: "#f7220a" },
  256: { background: "#a13515" },
  512: { background: "#a40af7" },
  1024: { background: "#49089e" },
  2048: { background: "#39c7cc" },
  4096: { background: "#00ff2f" },
  G: { background: "#39c7cc" },
  A: { background: "#39c7cc" },
  M: { background: "#39c7cc" },
  E: { background: "#39c7cc" },
  O: { background: "#a40af7" },
  V: { background: "#a40af7" },
  R: { background: "#a40af7" },
};

const gameOverPieces = [
  { name: "piece-1", x: 0, y: 0, value: "G", id: v1() },
  { name: "piece-2", x: 1, y: 0, value: "A", id: v1() },
  { name: "piece-3", x: 2, y: 0, value: "M", id: v1() },
  { name: "piece-4", x: 3, y: 0, value: "E", id: v1() },
  { name: "piece-9", x: 0, y: 2, value: "O", id: v1() },
  { name: "piece-10", x: 1, y: 2, value: "V", id: v1() },
  { name: "piece-11", x: 2, y: 2, value: "E", id: v1() },
  { name: "piece-12", x: 3, y: 2, value: "R", id: v1() },
];

const gameOverPiecesCopy = JSON.parse(JSON.stringify(gameOverPieces));

export {
  pieceColors,
  startGrid,
  startPieces,
  gameOverPiecesCopy as gameOverPieces,
};

function move(grid, direction) {
  switch (direction) {
    case "down":
      return moveDown(grid)
  }
}

function moveDown(grid) {
  return moveZerosRight(grid, "up")
}

function moveZerosRight(grid, direction) {
  const updatedGrid = []
  const gridTranspose = grid.map((_, i) => grid.map(row => row[i]))
  for (let row of gridTranspose) {
    for (let i = 0; i < row.length; i++) {
      if (row[i] === 0) {
        row.push(row.shift())
      }
    }
    updatedGrid.push(row)
  }
  return updatedGrid.map((_, i) => updatedGrid.map(row => row[i]))
}

export { move }
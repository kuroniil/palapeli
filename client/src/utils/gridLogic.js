function move(grid, direction) {
  switch (direction) {
    case "up":
      return moveUp(grid)
  }
}

function moveUp(grid) {
  return moveZerosRight(grid, "up")
}

function moveZerosRight(grid, direction) {
  const updatedGrid = []
  const gridTranspose = grid.map((_, i) => grid.map(row => row[i]))
  let i = 0
  while (i < gridTranspose.length) {
    let j = 0
    let swaps = grid.length - 1
    while (j < gridTranspose[i].length) {
      gridTranspose[i][j].y = j
      if (gridTranspose[i][j].value === 0 && swaps > 0) {
        gridTranspose[i].push(gridTranspose[i].splice(j, 1)[0])
        j--
        swaps--
      }
      j++
    }
    updatedGrid.push(gridTranspose[i])
    i++
  }
  return updatedGrid.map((_, i) => updatedGrid.map(row => row[i]))
}

export { move }
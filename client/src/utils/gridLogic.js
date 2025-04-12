function* move(grid, direction) {
  let updatedGrid
  if (direction == "up" || direction == "left") {
    updatedGrid = moveZerosRight(grid, direction)
  } else {
    updatedGrid = moveZerosLeft(grid, direction)
  }

  // moveAnimation()
  const updatedGridCopy = JSON.parse(JSON.stringify(updatedGrid))

  yield updatedGrid
  const collisionsGrid = check_collisions(updatedGridCopy, direction)
  const finalGrid = addPiece(collisionsGrid)
  return finalGrid.map((_, i) => finalGrid.map(row => row[i]))
}

function addPiece(grid) {
  let zeroIndices = grid.map((_, row) => 
    grid.map((_, col) => grid[row][col].value === 0
    ? ({x: col, y: row}) : null))
  zeroIndices = zeroIndices.map(row => row.filter(cell => cell !== null)).flat()
  const value = Math.random() < 0.9 ? 2 : 4
  const newIndex = zeroIndices[Math.floor(Math.random()*zeroIndices.length)]
  grid[newIndex.y][newIndex.x] = {...newIndex, value: value, name: grid[newIndex.y][newIndex.x].name}
  return grid
}

function moveZerosRight(grid, direction) {
  const updated = []
  const gridCopy = JSON.parse(JSON.stringify(grid))
  const gridTranspose = gridCopy.map((_, i) => gridCopy.map(row => row[i]))
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
    updated.push(gridTranspose[i])
    i++
  }
  return updated.map((_, i) => updated.map(row => row[i]))
}

function check_collisions(grid, direction) {
  var gridUpdated = []
  if (direction == "up" || direction == "left") {
    gridUpdated = check_left_collisions(grid, direction)
    return moveZerosRight(gridUpdated, direction)
  }
}

function check_left_collisions(grid, direction) {
  if (direction == "up") grid = grid.map((_, i) => grid.map(row => row[i]))
  var newGrid = []
  for (let row of grid) {
    let i = 0
    while (i < row.length - 1) {
      if (row[i].value === row[i + 1].value) {
        row[i].value *= 2
        row[i + 1].value = 0
        i += 1
      }
      i += 1
    }
    newGrid.push(row)

  }
  return newGrid.map((_, i) => newGrid.map(row => row[i]))
}

export { move }
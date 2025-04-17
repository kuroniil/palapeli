import { v1 } from "uuid"

function move(grid, direction) {
  let updatedGrid
  if (direction == "up" || direction == "left") {
    updatedGrid = moveZerosRight(grid, direction)
  } else {
    updatedGrid = moveZerosLeft(grid, direction)
  }
  const updatedGridCopy = JSON.parse(JSON.stringify(updatedGrid))
  const collisionsGrid = checkCollisions(updatedGridCopy, direction)
  const [finalGrid, addedPiece] = addPiece(collisionsGrid)
  return [transposeGrid(finalGrid), addedPiece]
}

function addPiece(grid) {
  let zeroIndices = grid.map((_, row) => 
    grid.map((_, col) => grid[row][col].value === 0
    ? ({x: col, y: row}) : null))
  zeroIndices = zeroIndices.map(row => row.filter(cell => cell !== null)).flat()
  const value = Math.random() < 0.9 ? 2 : 4
  const newIndex = zeroIndices[Math.floor(Math.random()*zeroIndices.length)]
  const newId = v1()
  
  grid[newIndex.y][newIndex.x] = {
    ...newIndex,
     value: value,
      name: grid[newIndex.y][newIndex.x].name,
      id: newId
    }
  return [grid, {...newIndex, value: value, name: grid[newIndex.y][newIndex.x].name, id: newId}]
}

function moveZerosRight(grid, direction) {
  const updated = []
  if (direction === "up") grid = transposeGrid(grid)
  let i = 0
  while (i < grid.length) {
    let j = 0
    let swaps = grid.length - 1
    while (j < grid[i].length) {
      direction === "up" 
        ? grid[i][j].y = j
        : grid[i][j].x = j
      if (grid[i][j].value === 0 && swaps > 0) {
        grid[i].push(grid[i].splice(j, 1)[0])
        j--
        swaps--
      }
      j++
    }
    updated.push(grid[i])
    i++
  }
  if (direction === "up") return transposeGrid(updated)
  return updated
}

function transposeGrid(grid) {
  return grid.map((_, i) => grid.map(row => row[i]))
}

function checkCollisions(grid, direction) {
  var gridUpdated = []
  if (direction == "up" || direction == "left") {
    gridUpdated = checkLeftCollisions(grid, direction)
    return moveZerosRight(gridUpdated, direction)
  } else {
    gridUpdated = checkRightCollisions(grid, direction)
    return moveZerosLeft(gridUpdated, direction)
  }
}

function checkLeftCollisions(grid, direction) {
  if (direction == "up") grid = transposeGrid(grid)
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
  if (direction == "up") return transposeGrid(newGrid)
  return newGrid
}

function moveZerosLeft(grid, direction) {
  const updated = []
  if (direction === "down") grid = transposeGrid(grid)
  let i = 0
  while (i < grid.length) {
    let j = grid.length - 1
    let swaps = grid.length - 1
    while (j > 0) {
      direction === "down" 
        ? grid[i][j].y = j
        : grid[i][j].x = j
      if (grid[i][j].value === 0 && swaps > 0) {
        grid[i] = grid[i].toSpliced(0, 0, grid[i].splice(j, 1)[0])
        j++
        swaps--
      }
      j--
    }
    updated.push(grid[i])
    i++
  }
  if (direction === "down") return transposeGrid(updated)
  return updated
}

function checkRightCollisions(grid, direction) {
  if (direction == "down") grid = transposeGrid(grid)
    var newGrid = []
    for (let row of grid) {
      let i = grid.length - 1
      while (i > 0) {
        if (row[i].value === row[i - 1].value) {
          row[i].value *= 2
          row[i - 1].value = 0
          i -= 1
        }
        i -= 1
      }
      newGrid.push(row)
    }
    if (direction == "down") return transposeGrid(newGrid)
    return newGrid
}

export { move }

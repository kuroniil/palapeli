import { v1 } from 'uuid'

function move(grid, direction) {
  const gridBeforeMove = JSON.parse(JSON.stringify(grid))
  let updatedGrid
  if (direction === 'up' || direction === 'left') {
    updatedGrid = moveZerosRight(grid, direction)
  } else {
    updatedGrid = moveZerosLeft(grid, direction)
  }
  const updatedGridCopy = JSON.parse(JSON.stringify(updatedGrid))
  const [collisionsGrid, scoreIncrement] = checkCollisions(updatedGridCopy, direction)
  const gridChanged = !collisionsGrid.every(
    (row, i) => row.every((cell, j) => cell.value === gridBeforeMove[i][j].value))
  if (gridChanged) {
    const [finalGrid, addedPiece] = addPiece(collisionsGrid)
    return [transposeGrid(finalGrid), addedPiece, scoreIncrement, true, false]
  }
  const gameOver = checkGameOver(gridBeforeMove)
  return [false, false, 0, false, gameOver]
}

function addPiece(grid) {
  let zeroIndices = grid.map((_, row) =>
    grid.map((_, col) => grid[row][col].value === 0
      ? ({ x: col, y: row }) : null))
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
  return [grid, { ...newIndex, value: value, name: grid[newIndex.y][newIndex.x].name, id: newId }]
}

function moveZerosRight(grid, direction, scoreIncrement=null) {
  const updated = []
  if (direction === 'up') grid = transposeGrid(grid)
  let i = 0
  while (i < grid.length) {
    let j = 0
    let swaps = grid.length - 1
    while (j < grid[i].length) {
      direction === 'up'
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
  if (scoreIncrement !== null) {
    if (direction === 'up') return [transposeGrid(updated), scoreIncrement]
    return [updated, scoreIncrement]
  } else {
    if (direction === 'up') return transposeGrid(updated)
    return updated
  }
}

function transposeGrid(grid) {
  return grid.map((_, i) => grid.map(row => row[i]))
}

function checkCollisions(grid, direction) {
  var gridUpdated = []
  let scoreIncrement = 0
  if (direction === 'up' || direction === 'left') {
    [gridUpdated, scoreIncrement] = checkLeftCollisions(grid, direction, scoreIncrement)
    return moveZerosRight(gridUpdated, direction, scoreIncrement)
  } else {
    [gridUpdated, scoreIncrement] = checkRightCollisions(grid, direction, scoreIncrement)
    return moveZerosLeft(gridUpdated, direction, scoreIncrement)
  }
}

function checkLeftCollisions(grid, direction, scoreIncrement=null) {
  if (direction === 'up') grid = transposeGrid(grid)
  var newGrid = []
  for (let row of grid) {
    let i = 0
    while (i < row.length - 1) {
      if (row[i].value === row[i + 1].value) {
        row[i].value *= 2
        scoreIncrement += row[i].value
        row[i + 1].value = 0
        i += 1
      }
      i += 1
    }
    newGrid.push(row)

  }
  if (direction === 'up') return [transposeGrid(newGrid), scoreIncrement]
  return [newGrid, scoreIncrement]
}

function moveZerosLeft(grid, direction, scoreIncrement=null) {
  const updated = []
  if (direction === 'down') grid = transposeGrid(grid)
  let i = 0
  while (i < grid.length) {
    let j = grid.length - 1
    let swaps = grid.length - 1
    while (j > 0) {
      direction === 'down'
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
  if (scoreIncrement !== null) {
    if (direction === 'down') return [transposeGrid(updated), scoreIncrement]
    return [updated, scoreIncrement]
  } else {
    if (direction === 'down') return transposeGrid(updated)
    return updated
  }
}

function checkRightCollisions(grid, direction, scoreIncrement=null) {
  if (direction === 'down') grid = transposeGrid(grid)
  var newGrid = []
  for (let row of grid) {
    let i = grid.length - 1
    while (i > 0) {
      if (row[i].value === row[i - 1].value) {
        row[i].value *= 2
        scoreIncrement += row[i].value
        row[i - 1].value = 0
        i -= 1
      }
      i -= 1
    }
    newGrid.push(row)
  }
  if (direction === 'down') return [transposeGrid(newGrid), scoreIncrement]
  return [newGrid, scoreIncrement]
}

function checkGameOver(grid) {
  const transposedGrid = transposeGrid(grid)
  for (let row of grid) {
    let i = 0
    while (i < row.length - 1) {
      if (row[i].value === row[i + 1].value) {
        return false
      }
      i++
    }
  }
  for (let col of transposedGrid) {
    let i = 0
    while (i < col.length - 1) {
      if (col[i].value === col[i + 1].value) {
        return false
      }
      i++
    }
  }
  return true
}

export { move }

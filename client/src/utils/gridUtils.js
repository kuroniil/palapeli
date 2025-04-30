const randomizeGrid = (size) => {
  while (true) {
    let randomArray = [...Array(size).keys()].map(a => a.toString())
    let currIndex = randomArray.length
    while (currIndex !== 0) {
      let randomIndex = Math.floor(Math.random()*currIndex)
      currIndex --
      [randomArray[currIndex], randomArray[randomIndex]] = [randomArray[randomIndex], randomArray[currIndex]]
    }
    const randomizedGrid = []
    let emptyCell = -1
    for (let i = 1; i < Math.sqrt(size) + 1; i++) {
      if (randomArray.slice(0, Math.sqrt(size)).includes('0')) {
        emptyCell = i
      }
      randomizedGrid.push(randomArray.slice(0, Math.sqrt(size)))
      randomArray = randomArray.slice(Math.sqrt(size))
    }
    let inversions = 0
    let flattened = randomizedGrid.flat().map(f => parseInt(f))
    flattened = flattened.filter(f => f !== 0)
    for (let i = 0; i < flattened.length; i++) {
      for (let j = i + 1; j < flattened.length; j++) {
        if (flattened[i] > flattened[j]) {
          inversions++
        }
      }
    }
    if (size % 2 === 0) {
      if ((emptyCell % 2 !== 0 && inversions % 2 !== 0) || (emptyCell % 2 === 0 && inversions % 2 === 0)) {
        return randomizedGrid
      }
    }
    else if (size % 2 !== 0) {
      if (inversions % 2 === 0) {
        return randomizedGrid
      }
    }
  }
}

const formCorrectGrid = (size) => {
  let corrArr = [...Array(size).keys()].map(a => a + 1)
  corrArr[size - 1] = 0
  let corrGrid = []
  let j = 0
  for (let i = 1; i <= Math.sqrt(size); i++) {
    corrGrid.push(corrArr.slice(j, Math.sqrt(size)*i))
    j = i * Math.sqrt(size)
  }
  corrGrid = corrGrid.map(grid => grid.map(array => array.toString()))
  return JSON.stringify(corrGrid)
}

const gridFont = (fontSize) => {
  const cells = document.getElementsByClassName('row')
  for (const cell of cells) {
    cell.style.fontSize = `${fontSize}vh`
  }
}

const findEmptyCell = (grid, size) => {
  const emptyCellIndex = grid.flat().findIndex((c => c === '0'))
  const row = Math.floor(emptyCellIndex / Math.sqrt(size))
  const column = emptyCellIndex % Math.sqrt(size)
  return [row, column]
}

const testGrid = (gridSize) => {
  switch (gridSize) {
  case 9:
    return [['1','2','3'],
      ['4','5','6'],
      ['7','0','8']]
  case 16:
    return [['1','2','3','4'],
      ['5','6','7','8'],
      ['9','10','11','12'],
      ['13','14','0','15']]
  case 25:
    return [['1','2','3','4','5'],
      ['6','7','8','9','10'],
      ['11','12','13','14','15'],
      ['16','17','18','19','20'],
      ['21','22','23','0','24']]
  }
}

const initialGrid = (gridSize) => (
  import.meta.env.VITE_ENV === 'test'
    ? testGrid(gridSize)
    : randomizeGrid(gridSize)
)

export { randomizeGrid, formCorrectGrid, gridFont, findEmptyCell, initialGrid }
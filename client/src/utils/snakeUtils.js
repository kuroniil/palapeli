const defaultGrid = Array.from( { length: 20 }, () => Array(20).fill(0))

defaultGrid[5][5] = 1
defaultGrid[4][5] = 1
defaultGrid[3][5] = 1

const defaultPlayer = [[3,5], [4,5], [5,5]]

defaultGrid[10][10] = 2

const copyArray = (arr) => {
  let newArr = JSON.parse(JSON.stringify(arr))
  return newArr.map((_, i) => newArr[i].map(pos => parseInt(pos)))
}

export { defaultGrid, defaultPlayer, copyArray }
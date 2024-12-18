const randomizeGrid = (size) => {
        let randomArray = [...Array(size).keys()].map(a => a.toString())
        let currIndex = randomArray.length
        while (currIndex != 0) {
            let randomIndex = Math.floor(Math.random()*currIndex)
            currIndex --
            [randomArray[currIndex], randomArray[randomIndex]] = [randomArray[randomIndex], randomArray[currIndex]]
        }
        const randomizedGrid = []
        for (let i = 1; i < Math.sqrt(size) + 1; i++) {
            randomizedGrid.push(randomArray.slice(0, Math.sqrt(size)))
            randomArray = randomArray.slice(Math.sqrt(size))
        }
        return randomizedGrid
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

export { randomizeGrid, formCorrectGrid }
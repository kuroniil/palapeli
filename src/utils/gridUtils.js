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

export default randomizeGrid
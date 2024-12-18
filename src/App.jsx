import Grid from './components/Grid'
import Header from './components/Header'
import Menu from './components/Menu'
import { useState } from 'react'

function App() {
  //const [grid, setGrid] = useState(16)

  return (
    <div>
    <Header title="pala_peli"/>
    <Menu />
    <Grid />
    </div>
  )
}

export default App

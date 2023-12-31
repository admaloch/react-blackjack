
import './App.css'
import GameIntro from './components/game-intro/GameIntro'
import AddPlayers from './components/add-players/AddPlayers'
import { CssBaseline } from '@mui/material'
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<GameIntro />} />
        <Route path='/add-players/addPlayers*' element={<AddPlayers />} />
      </Routes>
    </>
  )
}

export default App

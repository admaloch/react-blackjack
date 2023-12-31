
import './App.css'
import GameIntro from './components/game-intro/GameIntro'
import AddPlayers from './components/add-players/AddPlayers'
import StartRound from './components/main-game/StartRound'
import { CssBaseline } from '@mui/material'
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<GameIntro />} />
        <Route path='/addPlayers' element={<AddPlayers />} />
        <Route path='/playGame' element={<StartRound />} />
      </Routes>
    </>
  )
}

export default App

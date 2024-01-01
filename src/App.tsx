
import './App.css'
import GameIntro from './components/game-intro/GameIntro'
import AddPlayers from './components/add-players/AddPlayers'
import StartRound from './components/main-game/MainGame'
import { CssBaseline } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import GameMenu from './components/menu-items/GameMenu'
import { useSelector } from "react-redux"
import { RootState } from './store/store'

function App() {
  const isMenuShown = useSelector((state: RootState) => state.gameData.isMenuShown);
  return (
    <>
    {isMenuShown && <GameMenu />}
      <Routes>
        <Route path='/' element={<GameIntro />} />
        <Route path='/addPlayers' element={<AddPlayers />} />
        <Route path='/playGame' element={<StartRound />} />
      </Routes>
      <CssBaseline />
    </>
  )
}

export default App

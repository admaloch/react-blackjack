
import './App.css'
import GameIntro from './components/game-intro/GameIntro'
import AddPlayers from './components/add-players/AddPlayers'
import StartRound from './components/main-game/round-num/RoundNum'
import { CssBaseline } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import GameMenu from './components/menu-items/GameMenu'
import { useSelector } from "react-redux"
import { RootState } from './store/store'
import PlayerBets from './components/main-game/player-bets/PlayerBets'
import PlayGame from './components/main-game/play-game/PlayGame'

function App() {


  const isMenuShown = useSelector((state: RootState) => state.gameData.isMenuShown);
  return (
    <>
      {isMenuShown && <GameMenu />}
      <Routes>
        <Route path='/' element={<GameIntro />} />
        <Route path='/addPlayers' element={<AddPlayers />} />
        <Route path='/playGame' element={<StartRound />} />
        <Route path='/placeBets' element={<PlayerBets />} />
        <Route path='/startRound' element={<PlayGame />} />
      </Routes>
      <CssBaseline />
    </>
  )
}

export default App

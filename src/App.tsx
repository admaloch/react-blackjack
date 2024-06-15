import './App.css'
import GameIntro from './components/game-intro/GameIntro'
import AddPlayers from './components/add-players/AddPlayers'
import StartRound from './components/main-game/round-num/RoundNum'
import { CssBaseline } from '@mui/material'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import GameMenu from './components/menu-items/GameMenu'
import { useSelector } from "react-redux"
import { RootState } from './store/store'
import PlayerBets from './components/main-game/player-bets/PlayerBets'
import PlayGame from './components/main-game/play-game/PlayGame'
import FinalResults from './components/final-results/FinalResults'
import { useEffect } from 'react'


function App() {
  const isGameIntro = useSelector((state: RootState) => state.gameData.isGameIntro);
  const gameData = useSelector((state: RootState) => state.gameData);

  const navigate = useNavigate();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!isGameIntro) {
      navigate('/');
    }
  }, []);

  useEffect(() => {
    console.log(gameData)
  }, [gameData])

  return (
    <>
      <CssBaseline />
      <GameMenu />
      <Routes>
        <Route path='/' element={<GameIntro />} />
        <Route path='/addPlayers' element={<AddPlayers />} />
        <Route path='/playGame' element={<StartRound />} />
        <Route path='/placeBets' element={<PlayerBets />} />
        <Route path='/startRound' element={<PlayGame />} />
        <Route path='/finalResults' element={<FinalResults />} />
        <Route path='*' element={<Navigate to='/' />} />  {/* Catch-all route */}
      </Routes >
    </>
  )
}

export default App

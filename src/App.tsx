/* eslint-disable react-hooks/exhaustive-deps */

import './App.css'
import GameIntro from './components/game-intro/GameIntro'
import AddPlayers from './components/add-players/AddPlayers'
import StartRound from './components/main-game/round-num/RoundNum'
import { CssBaseline } from '@mui/material'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import GameMenu from './components/menu-items/GameMenu'
import PlayerBets from './components/main-game/player-bets/PlayerBets'
import PlayGame from './components/main-game/play-game/PlayGame'
import FinalResults from './components/final-results/FinalResults'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store/store'
import { fetchStoreData, sendStoreData } from './store/actions/storeActions'

let isInitial = true

function App() {

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // useEffect(() => {
  //   if (location.pathname !== '/') {
  //     navigate('/');
  //     return;
  //   }
  // }, []);

  const state = useSelector((state: RootState) => state);


  useEffect(() => {
    console.log(state)
  }, [state])




  // useEffect(() => {
  //   if (isInitial) {
  //     isInitial = false;
  //     return;
  //   }
  //   dispatch(sendStoreData(store));
  // }, [store, dispatch]);

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

/* eslint-enable react-hooks/exhaustive-deps */

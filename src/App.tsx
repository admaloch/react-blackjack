
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
import FinalResults from './components/final-results/FinalResults'
import { useEffect } from 'react'
import playersArrSlice from './store/player-arr/playersArrSlice'

function App() {
  const isGameIntro = useSelector((state: RootState) => state.gameData.isGameIntro);
  const playersArr = useSelector((state: RootState) => state.playersArr);

  const gameData = useSelector((state: RootState) => state.gameData);
  const {
    isDealerRoundActive,
    isPlayerRoundActive,
    isDealerCardRevealed,
    isDealerDrawing,
    isInsuranceRoundComplete,
    isMainResultsActive,
    isSplitResultsActive,
    isRoundActive,
    isGameActive,
    isAddPlayersRound,
    isBetRoundActive
  } = gameData

  // useEffect(() => {
  //   console.log('isPlayerRoundActive is now', isPlayerRoundActive)
  // }, [isPlayerRoundActive])

  // useEffect(() => {
  //   console.log('isDealerRoundActive is now', isDealerRoundActive)
  // }, [isDealerRoundActive])

  // useEffect(() => {
  //   console.log('isDealerCardRevealed is now', isDealerCardRevealed)
  // }, [isDealerCardRevealed])

  // useEffect(() => {
  //   console.log('isDealerDrawing is now', isDealerDrawing)
  // }, [isDealerDrawing])

  // useEffect(() => {
  //   console.log('isInsuranceRoundComplete is now', isInsuranceRoundComplete)
  // }, [isInsuranceRoundComplete])
  // useEffect(() => {
  //   console.log('isMainResultsActive is now', isMainResultsActive)
  // }, [isMainResultsActive])

  // useEffect(() => {
  //   console.log('isSplitResultsActive is now', isSplitResultsActive)
  // }, [isSplitResultsActive])

  // useEffect(() => {
  //   console.log('isRoundActive is now', isRoundActive)
  // }, [isRoundActive])
  // useEffect(() => {
  //   console.log('isGameActive is now', isGameActive)
  // }, [isGameActive])
  // useEffect(() => {
  //   console.log('isGameIntro is now', isGameIntro)
  // }, [isGameIntro])
  // useEffect(() => {
  //   console.log('isAddPlayersRound is now', isAddPlayersRound)
  // }, [isAddPlayersRound])
  // useEffect(() => {
  //   console.log('isBetRoundActive is now', isBetRoundActive)
  // }, [isBetRoundActive])
  // testing for issues -- also just realized head is detached.


  useEffect(() =>{
    console.log(playersArr[0])
    // console.log(playersArr[1])
  } , [playersArr])

  return (
    <>
      <CssBaseline />

      {!isGameIntro && <GameMenu />}
      <Routes>
        {/* <Route path='/' element={<GameIntro />} /> */}
        <Route path='/' element={<GameIntro />} />
        <Route path='/addPlayers' element={<AddPlayers />} />
        <Route path='/playGame' element={<StartRound />} />
        <Route path='/placeBets' element={<PlayerBets />} />
        <Route path='/startRound' element={<PlayGame />} />
        <Route path='/finalResults' element={<FinalResults />} />
      </Routes>

    </>
  )
}

export default App

/* eslint-disable react-hooks/exhaustive-deps */

import "./App.css";
import GameIntro from "./components/game-intro/GameIntro";
import AddPlayers from "./components/add-players/AddPlayers";
import StartRound from "./components/main-game/round-num/RoundNum";
import { CssBaseline } from "@mui/material";
import { Routes, Route, useNavigate } from "react-router-dom";
import GameMenu from "./components/menu-items/GameMenu";
import PlayerBets from "./components/main-game/player-bets/PlayerBets";
import PlayGame from "./components/main-game/play-game/PlayGame";
import FinalResults from "./components/final-results/FinalResults";
import { useEffect } from "react";
import useUpdateGameSessionApi from "./store/api/useUpdateGameSessionApi";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import Cookies from "js-cookie";

// let isInitial = true

function App() {
  const playersArr = useSelector((state: RootState) => state.playersArr);
  const gameData = useSelector((state: RootState) => state.gameData);
  const inactivePlayers = useSelector(
    (state: RootState) => state.inactivePlayers
  );
  const dealerObj = useSelector((state: RootState) => state.dealerObj);
  const deck = useSelector((state: RootState) => state.deck);


  const { deleteGameSessionHandler, updateGameSessionHandler } =
    useUpdateGameSessionApi();
  const navigate = useNavigate();

  // lint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (location.pathname !== "/") {
      navigate("/");
      return;
    }
  }, []);

  //if all players are done delete session from backend
  const areAllPlayersBroke = playersArr.every(
    (player) => player.bank + player.currBet < 5
  );
  useEffect(() => {
    if (
      (!gameData.isGameIntro && !gameData.isAddPlayersRound && areAllPlayersBroke) ||
      (!gameData.isGameIntro && !gameData.isAddPlayersRound && playersArr.length === 0)
    ) {
      console.log("all players are done");
      deleteGameSessionHandler();
    }
  }, [
    playersArr,
    deleteGameSessionHandler,
    gameData,
    areAllPlayersBroke,
  ]);

  const sessionId = Cookies.get("blackjack-session-id");
  //update game session in backend
  useEffect(() => {
    if (!gameData.isGameIntro && !gameData.isAddPlayersRound && sessionId) {
      updateGameSessionHandler();
    }
  }, [
    playersArr,
    gameData,
    inactivePlayers,
    dealerObj,
    deck,
  ]);

  return (
    <>
      <CssBaseline />
      <GameMenu />
      <Routes>
        <Route path="/" element={<GameIntro />} />
        <Route path="/addPlayers" element={<AddPlayers />} />
        <Route path="/playGame" element={<StartRound />} />
        <Route path="/placeBets" element={<PlayerBets />} />
        <Route path="/startRound" element={<PlayGame />} />
        <Route path="/finalResults" element={<FinalResults />} />
      </Routes>
    </>
  );
}

export default App;

/* eslint-enable react-hooks/exhaustive-deps */

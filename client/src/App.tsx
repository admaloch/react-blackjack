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

// let isInitial = true

function App() {
  const playersArr = useSelector((state: RootState) => state.playersArr);
  const { isGameIntro, isAddPlayersRound } = useSelector(
    (state: RootState) => state.gameData
  );

  const { deleteGameSessionHandler } = useUpdateGameSessionApi();
  const navigate = useNavigate();

  // lint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (location.pathname !== "/") {
      navigate("/");
      return;
    }
  }, []);

  const areAllPlayersBroke = playersArr.every((player) => player.bank + player.currBet < 5);

  useEffect(() => {
    if (
      (!isGameIntro && !isAddPlayersRound && areAllPlayersBroke) ||
      (!isGameIntro && !isAddPlayersRound && playersArr.length === 0)
    ) {
      console.log("all players are done");
      deleteGameSessionHandler();
    }
  }, [
    playersArr,
    deleteGameSessionHandler,
    isAddPlayersRound,
    isGameIntro,
    areAllPlayersBroke,
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

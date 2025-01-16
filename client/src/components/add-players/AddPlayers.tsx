import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import "./AddPlayers.css";
import PlayerForm from "./PlayerForm";
import PlayerList from "./PlayerList";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startBetRound } from "../../store/game-data/GameDataSlice";
import BGSection from "../UI/sections/BGSection";
import Wrapper from "../UI/wrapper/Wrapper";
import useUpdateGameSessionApi from "../../store/api/useUpdateGameSessionApi";

export default function AddPlayers() {
  const dispatch = useDispatch();
  const playerDataArr = useSelector((state: RootState) => state.playersArr);

  const { createGameSessionHandler } = useUpdateGameSessionApi();

  const startBetRoundHandler = () => {
    dispatch(startBetRound());
    createGameSessionHandler(); // Create game session in backend to save data
    // Check if the user is on mobile
    const isMobile =
      /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
      window.innerWidth <= 768;

    if (isMobile && document.body.requestFullscreen) {
      document.body.requestFullscreen().catch((err) => {
        console.error("Failed to enter full screen:", err);
      });
    }
  };

  return (
    <BGSection bgClass="card-image">
      <Wrapper>
        <h2>Enter your name to join the game</h2>
        <PlayerForm />
      </Wrapper>
      {playerDataArr.length > 0 && <PlayerList />}
      {playerDataArr.length > 0 && (
        <div className="start-game-btn">
          <NavLink to="/playGame">
            <button onClick={() => startBetRoundHandler()} className="game-btn">
              Start Round 1
            </button>
          </NavLink>
        </div>
      )}
    </BGSection>
  );
}

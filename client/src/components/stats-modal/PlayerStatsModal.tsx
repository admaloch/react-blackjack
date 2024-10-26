import Modal from "../UI/modal/Modal";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import PlayerStatsItem from "./PlayerStatsItem";
import "./PlayeStatsModal.css";
import { useState } from "react";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";

interface PlayerStatsProps {
  open: boolean;
  closeModal: () => void;
}

export default function PlayerStatsModal({
  closeModal,
  open,
}: PlayerStatsProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const playersArr = useSelector((state: RootState) => state.playersArr);
  const currRound = useSelector(
    (state: RootState) => state.gameData.roundsPlayed
  );

  // Function to toggle fullscreen mode
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      document.body.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  const isFullscreenText = isFullscreen ? "Exit" : "Enter";

  return (
    <Modal closeModal={closeModal} open={open} isTimer={false}>
      <section className="stats-modal-container">
        <h3>Player Stats</h3>
        <h4>Current Round: {currRound}</h4>

        <ul>
          {playersArr.map((player) => (
            <PlayerStatsItem key={player.name} player={player} />
          ))}
        </ul>
        <div onClick={closeModal} className="game-btn">
          Return to game
        </div>

        <div className="full-screen-container">
          <p>{isFullscreenText} full screen:</p>
          <div role="button" onClick={toggleFullscreen}>
            {isFullscreen ? (
              <FullscreenExitIcon aria-label="exit full screen" fontSize="medium" />
            ) : (
              <FullscreenIcon aria-label="enter full screen" fontSize="medium" />
            )}
          </div>
        </div>
      </section>
    </Modal>
  );
}

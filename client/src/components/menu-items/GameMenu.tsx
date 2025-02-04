import "./GameMenu.css";
import PlayerStats from "./PlayerStats";
import QuitGame from "./QuitGame";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function GameMenu() {
  const { isGameIntro, isAddPlayersRound, isGameActive } = useSelector(
    (state: RootState) => state.gameData,
  );
  const isPlayerStatsShown = !isGameIntro && !isAddPlayersRound && isGameActive;
  const { isPlayerRoundActive, isRoundActive } = useSelector(
    (state: RootState) => state.gameData,
  );
  const isStatsDisabled = !isPlayerRoundActive && isRoundActive;

  return (
    <nav className="game-menu">
      <div className="menu-container">
        {/* Skip Link for Accessibility */}
        <a href="#main-content" className="skip-link">
            Skip to Main Content
          </a>
        <h2>Blackjack</h2>
        <div className={isStatsDisabled ? "disabled menu-icons" : "menu-icons"}>
          {isPlayerStatsShown && <PlayerStats />}
          {isGameActive && <QuitGame />}
        </div>
      </div>
    </nav>
  );
}

import './GameMenu.css';
import PlayerStats from './PlayerStats';
import QuitGame from './QuitGame';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export default function GameMenu() {
    const gameData = useSelector((state: RootState) => state.gameData);
    const { isGameIntro, isAddPlayersRound, isGameActive } = gameData
    const isPlayerStatsShown = !isGameIntro && !isAddPlayersRound && isGameActive

    return (

        <div className="game-menu">
            <div className="menu-container">
                <h2>Blackjack</h2>
                <div className="menu-icons">
                    {isPlayerStatsShown && <PlayerStats />}
                    {isGameActive && <QuitGame />}
                </div>
            </div>
        </div>
    );
}
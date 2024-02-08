import './GameMenu.css';
import PlayerStats from './PlayerStats';
import QuitGame from './QuitGame';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export default function GameMenu() {
    const gameData = useSelector((state: RootState) => state.gameData);
    const { isPlayerStatsShown, roundsPlayed } = gameData
    return (
        <div className="game-menu">
            <div className="menu-container">
                <h2>Blackjack</h2>
                <h3>Round {roundsPlayed}</h3>
                <div className="menu-icons">
                    {isPlayerStatsShown && <PlayerStats />}
                    <QuitGame />
                </div>
            </div>

        </div>
    );
}

import './GameMenu.css'
import PlayerStats from './PlayerStats'
import QuitGame from './QuitGame';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export default function GameMenu() {
    const isPlayerStatsShown = useSelector((state: RootState) => state.gameData.isPlayerStatsShown);

    return (
        <div className="game-menu">
            {isPlayerStatsShown && <PlayerStats />}
            <QuitGame />
        </div>
    )
}

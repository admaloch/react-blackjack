import './GameMenu.css';
import PlayerStats from './PlayerStats';
import QuitGame from './QuitGame';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export default function GameMenu() {
    const gameData = useSelector((state: RootState) => state.gameData);
    const { roundsPlayed, isGameIntro, isAddPlayersRound, isBetRoundActive } = gameData
    const isShowRoundsPlayed = !isGameIntro && !isAddPlayersRound && !isBetRoundActive

    return (

        <div className="game-menu">
            <div className="menu-container">
                <h2>Blackjack</h2>
                {isShowRoundsPlayed && <h3>Round {roundsPlayed}</h3>}

                <div className="menu-icons">
                    {isShowRoundsPlayed && <PlayerStats />}

                    <QuitGame />
                </div>
            </div>

        </div>
    );
}

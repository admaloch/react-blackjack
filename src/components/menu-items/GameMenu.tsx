import './GameMenu.css'
import PlayerStats from './PlayerStats'
import QuitGame from './QuitGame'


export default function GameMenu() {
    return (
        <div className="game-menu">
            <PlayerStats />
            <QuitGame />
        </div>
    )
}

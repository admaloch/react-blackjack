import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import './MainGame.css'

export default function StartRound() {
    const currRound = useSelector((state: RootState) => state.gameData.roundsPlayed);

    return (
        <>
            
            <div className="game-container main-game">
                <h2>Begin Round {currRound}</h2>
            </div>

        </>
    )
}

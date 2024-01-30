import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../store/store"
import './RoundNum.css'
import { delay } from "../../../utils/Utility";
import { useNavigate } from "react-router";
import { updateIsRoundActive } from "../../../store/game-data/GameDataSlice";

export default function StartRound() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const currRound = useSelector((state: RootState) => state.gameData.roundsPlayed);

    async function playGame() {
        await delay(1000)
        dispatch(updateIsRoundActive())
        navigate("/placeBets");
    }
    playGame()

    return (
        <>
            <div className="game-container main-game">
                <h2>Begin Round {currRound}</h2>
            </div>
        </>
    )
}

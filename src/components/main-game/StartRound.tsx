import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import GameMenu from "../menu-items/GameMenu";

export default function StartRound() {
    const currRound = useSelector((state: RootState) => state.gameData.roundsPlayed);

    return (
        <>
            <GameMenu />
            <h1>Begin Round {currRound}</h1>
        </>
    )
}

import { useSelector } from "react-redux"
import { RootState } from "../../../store/store"
import './RoundNum.css'
import { delay } from "../../../utils/Utility";
import { useNavigate } from "react-router";
import BGSection from "../../UI/sections/BGSection";

export default function StartRound() {
    const navigate = useNavigate();
    const currRound = useSelector((state: RootState) => state.gameData.roundsPlayed);

    async function playGame() {
        await delay(1500)
        navigate("/placeBets");
    }
    playGame()

    return (

        <BGSection bgClass="dark-background main-game">
            <h2>Begin Round {currRound}</h2>

        </BGSection >

    )
}

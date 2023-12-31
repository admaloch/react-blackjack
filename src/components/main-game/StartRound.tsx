import { useSelector } from "react-redux"
import { RootState } from "../../store/store"

export default function StartRound() {
    const currRound = useSelector((state: RootState) => state.gameData.roundsPlayed);

  return (
    <h1>Begin Round {currRound}</h1>
  )
}

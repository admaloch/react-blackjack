import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import PlayerIndexProps from "../../../../models/PlayerIndexProps";

export default function ResultsModalStats({ playerIndex }: PlayerIndexProps) {
  const playersArr = useSelector((state: RootState) => state.playersArr);
  const { hand, bank, currBet, isDoubleDown } = playersArr[playerIndex];
  return (
    <div className="end-turn-stats">
      {isDoubleDown ? <h3>Doubled bet: {currBet}</h3> : <h3>Bet: {currBet}</h3>}
      <h3>Bank: {bank}</h3>
      <h3>Final Sum: {hand.cardSum}</h3>
    </div>
  );
}

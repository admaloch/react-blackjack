import { PlayerInterface } from "../../../../../../models/PlayerProps";
import BjBustOrStay from "../../../../../results-components/BjBustOrStay";
import WinOrLoseStr from "./WinOrLoseStr";

export interface PlayerProps {
  player: PlayerInterface;
}

export default function PlayerHandDetails({ player }: PlayerProps) {
  const { hand, bank, currBet } = player;
  const { cardSum } = hand;

  return (
    <>
      <p>Sum: {cardSum}</p>
      <p>Bank: {bank}</p>
      {currBet !== 0 && <p>Bet: {currBet}</p>}
      <BjBustOrStay player={player} mainOrSplit="main" />
      <WinOrLoseStr player={player} />
    </>
  );
}

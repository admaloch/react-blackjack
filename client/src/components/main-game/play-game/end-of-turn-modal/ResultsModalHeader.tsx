import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import PlayerIndexProps from "../../../../models/PlayerIndexProps";

export default function ResultsModalHeader({ playerIndex }: PlayerIndexProps) {
  const playersArr = useSelector((state: RootState) => state.playersArr);
  const currPlayer = playersArr[playerIndex];
  const { hand, name } = currPlayer;
  let modalHeader: string = "";

  if (hand.cardSum > 21) {
    modalHeader = "Bust!";
  } else if (hand.cards.length === 2 && hand.cardSum === 21) {
    modalHeader = "Blackjack!";
  } else if (
    hand.cards.length === 3 &&
    hand.cardSum < 21 &&
    currPlayer.isDoubleDown
  ) {
    modalHeader = `${name} doubled up`;
  } else {
    modalHeader = `${name} stands`;
  }

  return <h2>{modalHeader}</h2>;
}

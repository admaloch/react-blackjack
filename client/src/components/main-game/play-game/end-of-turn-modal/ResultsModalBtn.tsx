import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";

interface ResultsModalBtnProps {
  playerIndex: number;
  endResultsBtnHandler: () => void;
}

export default function ResultsModalBtn({
  playerIndex,
  endResultsBtnHandler,
}: ResultsModalBtnProps) {
  const playersArr = useSelector((state: RootState) => state.playersArr);
  const { splitHand, isPlayerSplit } = playersArr[playerIndex];
  let modalButton: string = "";

  if (isPlayerSplit && splitHand.cards.length === 1) {
    modalButton = `Play other split hand`;
  } else if (playersArr.length - 1 !== playerIndex) {
    modalButton = `Begin ${playersArr[playerIndex + 1].name}'s turn`;
  } else {
    modalButton = "Begin dealer round";
  }

  return (
    <button onClick={endResultsBtnHandler} className="game-btn">
      {modalButton}
    </button>
  );
}

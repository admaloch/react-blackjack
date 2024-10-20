import { useSelector } from "react-redux";
import { RootState } from "../../../../../../store/store";
import "./TableHeader.css";
import NextRoundBtn from "../final-results/NextRoundBtn";
export default function TableHeader() {
  const { isMainResultsActive, isSplitResultsActive, isRoundActive } =
    useSelector((state: RootState) => state.gameData);
  const playersArr = useSelector((state: RootState) => state.playersArr);

  const areAllPlayersBroke = playersArr.every(
    (player) => player.bank + player.currBet < 5
  );

  let currText = "";

  if (isSplitResultsActive) {
    currText = "Split hand results...";
  } else if (isMainResultsActive) {
    currText = "Main hand results...";
  } else if (areAllPlayersBroke) {
    currText = "Game Over";
  } else if (!isRoundActive) {
    currText = "Round complete:";
  }  else {
    currText = "";
  }

  return (
    <div className="header-btn-container">
      {currText && <h2>{currText}</h2>}
      {!isRoundActive && <NextRoundBtn />}
    </div>
  );
}

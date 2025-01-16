import PlayerIndexProps from "../../../../../../models/PlayerIndexProps";
import { RootState } from "../../../../../../store/store";
import { useSelector } from "react-redux";
import Card from "../../../display-cards/Card";

export default function SplitCardPreview({ playerIndex }: PlayerIndexProps) {
  const playersArr = useSelector((state: RootState) => state.playersArr);
  const currPlayer = playersArr[playerIndex];
  const { splitHand } = currPlayer;

  const handText = splitHand.cards.length === 1 ? "Split hand" : "Main hand";
  //  curretnly cleaning up this
  return (
    <div className="split-card-preview disabled">
      <h5>{handText}</h5>
      <Card isHidden={false} cardUrlVal={splitHand.cardUrlVals[0]} />
    </div>
  );
}

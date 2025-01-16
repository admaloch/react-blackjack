import { useSelector } from "react-redux";
import { PlayerInterface } from "../../../../../../models/PlayerProps";
import { ShowMainHandIconWithPopper } from "../../../../../UI/icons/ShowMainHandIconWithPopper";
import { ShowSplitHandIconWithPopper } from "../../../../../UI/icons/ShowSplitHandIconWithPopper";
import { RootState } from "../../../../../../store/store";

interface PlayerResultsHeaderProps {
  player: PlayerInterface;
  changeToMainHand: () => void;
  changeToSplitHand: () => void;
  showSplitHand: boolean;
}

export default function PlayerResultsHeader({
  player,
  changeToMainHand,
  changeToSplitHand,
  showSplitHand,
}: PlayerResultsHeaderProps) {
  const { isRoundActive } = useSelector((state: RootState) => state.gameData);

  const isSplitHand = player.splitHand.cards.length !== 0;

  return (
    <div className="player-header">
      {isSplitHand && showSplitHand && (
        <div
          className={`main-hand-icon ${isRoundActive && "disabled"}`}
          onClick={changeToMainHand}
        >
          <ShowMainHandIconWithPopper />
        </div>
      )}
      <h3>{player.name}</h3>
      {isSplitHand && !showSplitHand && (
        <div
          className={`split-hand-icon ${isRoundActive && "disabled"}`}
          onClick={changeToSplitHand}
        >
          <ShowSplitHandIconWithPopper />
        </div>
      )}
    </div>
  );
}

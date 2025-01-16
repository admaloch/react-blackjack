import { useDispatch, useSelector } from "react-redux";
import { ResetIconWithPopper } from "../../UI/icons/ResetIconWithPopper";
import { updateTokens } from "../../../store/player-arr/PlayersArrSlice";
import { useEffect } from "react";
import { RootState } from "../../../store/store";

interface ResetBetsBtnProps {
  currPlayerIndex: number;
}

export default function ResetBetsBtn({ currPlayerIndex }: ResetBetsBtnProps) {
  const { isBetRoundActive } = useSelector(
    (state: RootState) => state.gameData,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isBetRoundActive) {
      dispatch(updateTokens({ index: currPlayerIndex, type: "reset-tokens" }));
    }
  }, [isBetRoundActive, currPlayerIndex, dispatch]);

  return (
    <div
      aria-label="reset tokens"
      className="reset-tokens"
      onClick={() =>
        dispatch(updateTokens({ index: currPlayerIndex, type: "reset-tokens" }))
      }
    >
      <ResetIconWithPopper placement="top" />
    </div>
  );
}

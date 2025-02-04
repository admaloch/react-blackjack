import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useDispatch } from "react-redux";
import Token from "./Token";
import { updateTokens } from "../../../store/player-arr/PlayersArrSlice";

interface TokensProps {
  currPlayerIndex: number;
}

export default function Tokens({ currPlayerIndex }: TokensProps) {
  const dispatch = useDispatch();
  const playersArr = useSelector((state: RootState) => state.playersArr);
  const allTokensClass =
    playersArr[currPlayerIndex].bank > 0
      ? "all-tokens remove-default-button-styles"
      : "all-tokens remove-default-button-styles disabled";

  return (
    <div id="player-tokens" className="tokens-container">
      {playersArr[currPlayerIndex].currTokens.map((item) => (
        <Token key={item} number={item} currPlayerIndex={currPlayerIndex} />
      ))}
      <button
        onClick={() =>
          dispatch(updateTokens({ index: currPlayerIndex, type: "all-tokens" }))
        }
        className={allTokensClass}
      >
        All
      </button>
    </div>
  );
}

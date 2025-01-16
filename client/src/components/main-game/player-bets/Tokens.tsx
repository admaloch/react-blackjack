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
    playersArr[currPlayerIndex].bank > 0 ? "all-tokens" : "all-tokens disabled";

  return (
    <div
      id="player-tokens"
      className="tokens-container"
      aria-label="player tokens"
    >
      {playersArr[currPlayerIndex].currTokens.map((item) => (
        <Token key={item} number={item} currPlayerIndex={currPlayerIndex} />
      ))}
      <div
        onClick={() =>
          dispatch(updateTokens({ index: currPlayerIndex, type: "all-tokens" }))
        }
        className={allTokensClass}
      >
        All
      </div>
    </div>
  );
}

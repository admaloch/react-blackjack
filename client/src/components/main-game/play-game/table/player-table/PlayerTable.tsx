import Cards from "../../display-cards/Cards";
import "./PlayerTable.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import PlayerOptions from "./player-options/PlayerOptions";
import PlayerDetails from "./PlayerDetails";
import SplitCardPreview from "./player-options/SplitCardPreview";
import { useEffect } from "react";
import usePlayerDrawCard from "../../../draw-cards-hook/usePlayerDrawCard";
import { delay } from "../../../../../utils/Utility";

interface PlayerTableProps {
  playerIndex: number;
  makeCurrPlayerFinished: () => void;
}

function PlayerTable({
  playerIndex,
  makeCurrPlayerFinished,
}: PlayerTableProps) {
  const playersArr = useSelector((state: RootState) => state.playersArr);
  const dealerObj = useSelector((state: RootState) => state.dealerObj);
  const { hand, splitHand, splitBet, name } = playersArr[playerIndex];
  const playerDraw = usePlayerDrawCard(playerIndex);

  useEffect(() => {
    let isMounted = true;
    async function initPlayerDraw() {
      if (isMounted) {
        await delay(400);
        if (dealerObj.hand.cards.length === 2) {
          if (hand.cards.length === 0 || hand.cards.length === 1) {
            playerDraw();
          }
        }
      }
    }
    initPlayerDraw();
    return () => {
      isMounted = false;
    };
  }, [hand, dealerObj, playerDraw]);

  const handText =
    splitHand.cards.length === 1 ? ": Main hand" : ": Split hand";

  return (
    <section className="player-table">
      <PlayerOptions
        makeCurrPlayerFinished={makeCurrPlayerFinished}
        playerIndex={playerIndex}
      />
      <PlayerDetails playerIndex={playerIndex} />

      <div className="main-player-hand">
        <div className="player-header">
          <h2>{name}&nbsp;</h2>
          {splitBet > 0 && <h2> {handText}</h2>}
        </div>
        <div className="player-cards">
          <Cards cardUrlVals={hand.cardUrlVals} playerIndex={playerIndex} />
        </div>
      </div>

      {playersArr[playerIndex].splitHand.cards.length > 0 && (
        <SplitCardPreview playerIndex={playerIndex} />
      )}
    </section>
  );
}

export default PlayerTable;

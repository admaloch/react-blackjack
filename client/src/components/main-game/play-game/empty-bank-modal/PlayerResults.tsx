import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { PlayerInterfaceProps } from "../../../../models/PlayerProps";

export default function PlayerResults({ player }: PlayerInterfaceProps) {
  const dealerObj = useSelector((state: RootState) => state.dealerObj);
  const dealerCardSum = dealerObj.hand.cardSum;
  const { name, hand, splitHand, wonInsuranceRound } = player;
  const { cardSum, cardUrlVals } = hand;

  const playerHasBJ = cardSum === 21 && cardUrlVals.length === 2 ? true : false;
  const didPlayerBust = cardSum > 21;
  const didDealerBust = dealerObj.hand.cardSum > 21;
  const dealerHasBJ =
    dealerObj.hand.cardSum === 21 && dealerObj.hand.cards.length === 2;
  let mainResults = "";
  let splitResults = "";

  if (dealerHasBJ && wonInsuranceRound) {
    mainResults = "Insured";
  } else if (
    (playerHasBJ && !dealerHasBJ) ||
    (!didPlayerBust && didDealerBust) ||
    (!didPlayerBust && !didDealerBust && cardSum > dealerCardSum)
  ) {
    mainResults = "Wins";
  } else if (
    (!playerHasBJ && dealerHasBJ) ||
    (didPlayerBust && !didDealerBust) ||
    (!didPlayerBust && !didDealerBust && cardSum < dealerCardSum)
  ) {
    mainResults = "Lost";
  } else {
    mainResults = "Push";
  }

  const playerSplitBJ =
    splitHand.cardSum === 21 && splitHand.cardUrlVals.length === 2
      ? true
      : false;
  const playerSplitBust = splitHand.cardSum > 21;
  const playerHasSplit = splitHand.cards.length > 0;

  if (
    (playerSplitBJ && !dealerHasBJ) ||
    (!playerSplitBust && didDealerBust) ||
    (!playerSplitBust && !didDealerBust && splitHand.cardSum > dealerCardSum)
  ) {
    splitResults = "Wins";
  } else if (
    (!playerSplitBJ && dealerHasBJ) ||
    (playerSplitBust && !didDealerBust) ||
    (!playerSplitBust && !didDealerBust && splitHand.cardSum < dealerCardSum)
  ) {
    splitResults = "Lost";
  } else {
    splitResults = "Push";
  }

  return (
    <li>
      <ul>
        <li className="main-hand-results">
          <p style={{ fontWeight: "bold" }}>
            {name}: {mainResults}
          </p>
          <p> -- Final sum: {cardSum}</p>
          {playerHasBJ && <p className="win-color"> -- Blackjack! </p>}
          {didPlayerBust && <p className="lose-color"> -- Bust! </p>}
          {wonInsuranceRound && <p> -- Won insurance bet</p>}
        </li>
        {playerHasSplit && (
          <li className="split-hand-results">
            <p>Split results: {splitResults}</p>
            <p> -- Split sum: {splitHand.cardSum}</p>
            {playerSplitBJ && <p className="win-color"> -- Blackjack! </p>}
            {playerSplitBust && <p className="lose-color"> -- Bust! </p>}
          </li>
        )}
      </ul>
    </li>
  );
}

import { useSelector } from "react-redux";
// import backOfCardImg from '../../../../../../assets/card-images/BACK.png'
import { RootState } from "../../../../../../store/store";
import { useEffect } from "react";
import { delay } from "../../../../../../utils/Utility";
import { useDispatch } from "react-redux";
import { revealDealerCard } from "../../../../../../store/game-data/GameDataSlice";
import "./HiddenCard.css";

export default function HiddenCard() {
  const dispatch = useDispatch();
  const { isDealerCardRevealed, isDealerRoundActive } = useSelector(
    (state: RootState) => state.gameData,
  );

  const backOfCardImg = "https://deckofcardsapi.com/static/img/back.png";

  useEffect(() => {
    let isMounted = true;
    async function showCardsFunc() {
      if (isMounted) {
        if (isDealerRoundActive && !isDealerCardRevealed) {
          await delay(1500);
          dispatch(revealDealerCard());
        }
      }
    }
    showCardsFunc();
    return () => {
      isMounted = false;
    };
  }, [isDealerRoundActive, dispatch, isDealerCardRevealed]);

  return (
    <div className="playing-card">
      <img
        width={100}
        height={140}
        className="back-of-card hiddenCardAnimation"
        src={backOfCardImg}
        alt="Back of Card"
      />
    </div>
  );
}

// hook for drawing dealer card and updating deck state
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { RootState } from "../../../store/store";
import { updateDealer } from "../../../store/dealer-obj/dealerObjSlice";
import { updateDeck } from "../../../store/deck/deckSlice";
import { DealerObjInterface, Hand } from "../../../models/PlayerProps";
import {
  genCardLocationIndexes,
  updateDeckFromState,
  drawAndUpdateHand,
  changeAceVal,
} from "./drawCardsFuncs";

const useDealerDrawCard = () => {
  const dispatch = useDispatch();
  const dealerObj = useSelector((state: RootState) => state.dealerObj);
  const deck = useSelector((state: RootState) => state.deck);
  const updateState = useCallback(
    (updatedValue: DealerObjInterface) => {
      dispatch(updateDealer({ ...dealerObj, ...updatedValue }));
    },
    [dispatch, dealerObj],
  );

  const drawAndHandleUpdate = useCallback(() => {
    const { cardIndex, suitIndex } = genCardLocationIndexes(deck);
    const updatedDealerHand: Hand = { ...dealerObj.hand };
    const drawnHand = drawAndUpdateHand(
      updatedDealerHand,
      cardIndex,
      suitIndex,
      deck,
    );
    let updatedValue: DealerObjInterface;
    if (drawnHand.cardNumVals.includes(11)) {
      updatedValue = {
        ...dealerObj,
        hand: changeAceVal(drawnHand),
      };
    } else {
      updatedValue = {
        ...dealerObj,
        hand: drawnHand,
      };
    }
    updateState(updatedValue);
    const newDeck = updateDeckFromState(deck, cardIndex, suitIndex);
    dispatch(updateDeck(newDeck));
  }, [deck, dispatch, dealerObj, updateState]);
  return drawAndHandleUpdate;
};

export default useDealerDrawCard;

// hook for drawing player cards
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { updatePlayer } from "../../../store/player-arr/PlayersArrSlice";
import { updateDeck } from "../../../store/deck/deckSlice";
import { PlayerInterface } from "../../../models/PlayerProps";
import {
  genCardLocationIndexes,
  updateDeckFromState,
  drawAndUpdateHand,
  changeAceVal,
} from "./drawCardsFuncs";
import { useCallback } from "react";

const usePlayerDrawCard = (playerIndex: number) => {
  const dispatch = useDispatch();
  const playersArr = useSelector((state: RootState) => state.playersArr);
  const deck = useSelector((state: RootState) => state.deck);
  const updateState = useCallback(
    (updatedValue: PlayerInterface) => {
      dispatch(updatePlayer({ ...playersArr[playerIndex], ...updatedValue }));
    },
    [dispatch, playerIndex, playersArr],
  );

  const drawAndHandleUpdate = useCallback(() => {
    const { cardIndex, suitIndex } = genCardLocationIndexes(deck);
    const currPlayer = playersArr[playerIndex];
    const drawnHand = drawAndUpdateHand(
      currPlayer.hand,
      cardIndex,
      suitIndex,
      deck,
    );
    let updatedValue: PlayerInterface;
    if (drawnHand.cardNumVals.includes(11)) {
      updatedValue = {
        ...currPlayer,
        hand: changeAceVal(drawnHand),
      };
    } else {
      updatedValue = {
        ...currPlayer,
        hand: drawnHand,
      };
    }
    updateState(updatedValue);
    const newDeck = updateDeckFromState(deck, cardIndex, suitIndex);
    dispatch(updateDeck(newDeck));
  }, [deck, dispatch, playerIndex, playersArr, updateState]);
  return drawAndHandleUpdate;
};

export default usePlayerDrawCard;

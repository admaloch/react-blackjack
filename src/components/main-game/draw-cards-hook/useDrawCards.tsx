import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { updatePlayer } from '../../../store/player-arr/playersArrSlice';
import { updateDealer } from '../../../store/dealer-obj/dealerObjSlice';
import { updateDeck } from '../../../store/deck/deckSlice';
import { DealerObjInterface, PlayerInterface } from '../../../models/PlayerProps';
import { genCardLocationIndexes, updateDeckFromState, drawAndUpdateHand, changeAceVal } from './drawCardsFuncs';

const useDrawCards = (playerIndex?: number) => {
  const dispatch = useDispatch();

  // Get necessary state from Redux
  const playersArr = useSelector((state: RootState) => state.playersArr);
  const dealerObj = useSelector((state: RootState) => state.dealerObj);
  const deck = useSelector((state: RootState) => state.deck);

  // Determine the target automatically based on the presence of playerIndex
  const target = playerIndex !== undefined ? 'player' : 'dealer';

  // Helper function to update the Redux state
  const updateState = (updatedValue: PlayerInterface | DealerObjInterface) => {
    if (target === 'player' && playerIndex !== undefined) {
      dispatch(updatePlayer({ ...playersArr[playerIndex], ...(updatedValue as PlayerInterface) }));
    } else if (target === 'dealer') {
      dispatch(updateDealer({ ...dealerObj, ...(updatedValue as DealerObjInterface) }));
    }
  };

  // Main function to draw a card and update the state
  const drawAndHandleUpdate = () => {
    let updatedValue: PlayerInterface | DealerObjInterface | undefined = undefined;
    const { cardIndex, suitIndex } = genCardLocationIndexes(deck);

    if (target === 'player' && playerIndex !== undefined) {
      const currPlayer = playersArr[playerIndex];
      const updatedPlayerHand = { ...currPlayer.hand };

      // Simulate drawing a card
      const drawnHand = drawAndUpdateHand(updatedPlayerHand, cardIndex, suitIndex, deck);
      // Check if there is an Ace and update its value
      if (drawnHand.cardNumVals.includes(11)) {
        updatedValue = { ...currPlayer, hand: changeAceVal(drawnHand) };
      } else {
        updatedValue = { ...currPlayer, hand: drawnHand };
      }
    } else if (target === 'dealer') {
      const updatedDealerHand = { ...dealerObj.hand };
      const drawnHand = drawAndUpdateHand(updatedDealerHand, cardIndex, suitIndex, deck);

      // Check if there is an Ace and update its value
      if (drawnHand.cardNumVals.includes(11)) {
        updatedValue = { ...dealerObj, hand: changeAceVal(drawnHand) };
      } else {
        updatedValue = { ...dealerObj, hand: drawnHand };
      }
    }

    if (updatedValue) {
      updateState(updatedValue);
      const newDeck = updateDeckFromState(deck, cardIndex, suitIndex);
      dispatch(updateDeck(newDeck));
    }
  };

  return drawAndHandleUpdate;
};

export default useDrawCards;

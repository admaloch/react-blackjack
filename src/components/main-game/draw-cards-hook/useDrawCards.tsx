import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { updatePlayer } from '../../../store/player-arr/playersArrSlice';
import { updateDealer } from '../../../store/dealer-obj/dealerObjSlice';
import { updateDeck } from '../../../store/deck/deckSlice';
import { DealerObjInterface, PlayerInterface } from '../../../models/PlayerProps';
import { genCardLocationIndexes, updateDeckFromState, drawAndUpdateHand, changeAceVal } from './drawCardsFuncs';

const useDrawNewCard = (target: 'player' | 'dealer' = 'player', playerIndex?: number, split?: string) => {
  const dispatch = useDispatch();

  // Get necessary state from Redux
  const playersArr = useSelector((state: RootState) => state.playersArr);
  const dealerObj = useSelector((state: RootState) => state.dealerObj);
  const deck = useSelector((state: RootState) => state.deck);



  // Helper function to update the Redux state
  const updateState = (updatedValue: PlayerInterface | DealerObjInterface, isDealer?: boolean) => {
    if (target === 'player' && playerIndex !== undefined) {
      dispatch(updatePlayer({ ...playersArr[playerIndex], ...(updatedValue as PlayerInterface) }));
    } else if (target === 'dealer' && isDealer) {
      dispatch(updateDealer({ ...dealerObj, ...(updatedValue as DealerObjInterface) }));
    }
  };

  // Main function to draw a card and update the state
  const drawAndHandleUpdate = () => {
    let updatedValue: PlayerInterface | DealerObjInterface | undefined = undefined;
    const { cardIndex, suitIndex } = genCardLocationIndexes(deck);
    if (target === 'player' && playerIndex !== undefined) {
      const currPlayer = playersArr[playerIndex];
      const updatedPlayerHand = split ? { ...currPlayer.splitHand } : { ...currPlayer.hand };

      // Simulate drawing a card
      const drawnHand = drawAndUpdateHand(updatedPlayerHand, cardIndex, suitIndex, deck);

      // Check if there is an Ace and update its value
      if (drawnHand.cardNumVals.includes(11)) {
        updatedValue = split
          ? { ...currPlayer, splitHand: changeAceVal(drawnHand) }
          : { ...currPlayer, hand: changeAceVal(drawnHand) };
      } else {
        updatedValue = split
          ? { ...currPlayer, splitHand: drawnHand }
          : { ...currPlayer, hand: drawnHand };
      }
    } else if (target === 'dealer') {
      const updatedDealerHand = { ...dealerObj, ...drawAndUpdateHand(dealerObj, cardIndex, suitIndex, deck) };

      // Check if there is an Ace and update its value
      if (updatedDealerHand.cardNumVals.includes(11)) {
        updatedValue = { ...dealerObj, ...changeAceVal(updatedDealerHand) };
      } else {
        updatedValue = { ...dealerObj, ...updatedDealerHand };
      }
    }

    if (updatedValue) {
      updateState(updatedValue, target === 'player');
      const newDeck = updateDeckFromState(deck, cardIndex, suitIndex)
      dispatch(updateDeck(newDeck));
    }
  };
  return drawAndHandleUpdate;
};

export default useDrawNewCard;

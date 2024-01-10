import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { updatePlayer } from '../../../store/player-arr/playersArrSlice';
import { updateDealer } from '../../../store/dealer-obj/dealerObjSlice';
import { updateDeck } from '../../../store/deck/deckSlice';
import { DealerObjInterface, Hand, PlayerInterface } from '../../../models/PlayerProps';

const useDrawNewCard = (target: 'player' | 'dealer' = 'player', playerIndex?: number, split?: string) => {
  const dispatch = useDispatch();

  // Get necessary state from Redux
  const playersArr = useSelector((state: RootState) => state.playersArr);
  const dealerObj = useSelector((state: RootState) => state.dealerObj);
  const deck = useSelector((state: RootState) => state.deck);

  let deckVals = {
    deckIndex: 0,
    suitIndex: 0,
  }

  // Helper function to draw and update a hand
  const drawAndUpdateHand = (handInput: Hand) => {
    const handWithNewCards = { ...handInput };
    const suits = ['♦', '♣', '♥', '♠'];
    const urlSuits = ['D', 'S', 'H', 'S'];

    let isValidCardDraw = false;

    while (!isValidCardDraw) {
      const suitIndex = Math.floor(Math.random() * 4);
      const cardIndex = Math.floor(Math.random() * 13);
      const numCardLeft = deck[cardIndex].suits[suitIndex];

      if (numCardLeft > 0) {
        deckVals = {
          deckIndex: cardIndex,
          suitIndex: suitIndex,
        }
        const newCard = `${deck[cardIndex].card}${suits[suitIndex]}`;
        const newCardVal = deck[cardIndex].value;
        const cardUrl = `${deck[cardIndex].card}${urlSuits[suitIndex]}`;

        const updatedCards = [...handWithNewCards.cards, newCard];
        const updatedCardNumVals = [...handWithNewCards.cardNumVals, newCardVal];
        const updatedCardUrlVals = [...handWithNewCards.cardUrlVals, cardUrl];

        const updatedHand = {
          ...handWithNewCards,
          cards: updatedCards,
          cardNumVals: updatedCardNumVals,
          cardUrlVals: updatedCardUrlVals,
          cardSum: handWithNewCards.cardSum + newCardVal,
        };


        isValidCardDraw = true;
        return updatedHand;
      }
    }

    return handWithNewCards;
  };

  // Helper function to update Ace value in a hand
  const changeAceVal = (handInput: Hand) => {
    const handWithAlteredAceVals = { ...handInput };
    while (handWithAlteredAceVals.cardSum > 21) {
      const lastIndex = handWithAlteredAceVals.cardNumVals.lastIndexOf(11);
      if (lastIndex === -1) break;
      handWithAlteredAceVals.cardNumVals[lastIndex] = 1;
      handWithAlteredAceVals.cardSum = handWithAlteredAceVals.cardNumVals.reduce((a, b) => a + b);
    }
    return handWithAlteredAceVals;
  };

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

    if (target === 'player' && playerIndex !== undefined) {
      const currPlayer = playersArr[playerIndex];
      const updatedPlayerHand = split ? { ...currPlayer.splitHand } : { ...currPlayer.hand };

      // Simulate drawing a card
      const drawnHand = drawAndUpdateHand(updatedPlayerHand);

      // Check if there is an Ace and update its value
      if (drawnHand.cardNumVals.includes(11)) {
        console.log('There is an Ace');
        updatedValue = split
          ? { ...currPlayer, splitHand: changeAceVal(drawnHand) }
          : { ...currPlayer, hand: changeAceVal(drawnHand) };
      } else {
        updatedValue = split
          ? { ...currPlayer, splitHand: drawnHand }
          : { ...currPlayer, hand: drawnHand };
      }
    } else if (target === 'dealer') {
      const updatedDealerHand = { ...dealerObj, ...drawAndUpdateHand(dealerObj) };

      // Check if there is an Ace and update its value
      if (updatedDealerHand.cardNumVals.includes(11)) {
        console.log('There is an Ace');
        updatedValue = { ...dealerObj, ...changeAceVal(updatedDealerHand) };
      } else {
        updatedValue = { ...dealerObj, ...updatedDealerHand };
      }
    }

    if (updatedValue) {
      updateState(updatedValue, target === 'dealer');
      dispatch(updateDeck(updatedDeck));
    }
  };

  return drawAndHandleUpdate;
};

export default useDrawNewCard;

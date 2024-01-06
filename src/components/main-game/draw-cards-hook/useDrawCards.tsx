import { Hand } from "../../../models/PlayerProps";
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
// this function takes in the current hand obj, and number of cards to draw and updates the current hand -- there is also logic to update the ace value

export default function useDrawCards(playerHandInput: Hand, numCardsDrawn = 1) {

  const deck = useSelector((state: RootState) => state.deck);

  const drawCards = (playerHand: Hand, numCards = 1) => {
    if (!playerHand) {
      return null;
    }
    let updatedPlayerHand = { ...playerHand }
    for (let i = 0; i < numCards; i++) {
      updatedPlayerHand = drawCard(updatedPlayerHand);
    }
    if (updatedPlayerHand.cardNumVals.includes(11)) {
      console.log('there is an ace')
      updatedPlayerHand = changeAceVal(updatedPlayerHand);
    }
    return updatedPlayerHand;
  };

  const drawCard = (handInput: Hand) => {
    const handWithNewCards = { ...handInput };
    const suits = ['♦', '♣', '♥', '♠'];
    const urlSuits = ['D', 'S', 'H', 'S'];

    let isValidCardDraw = false;

    while (!isValidCardDraw) {
      const suitIndex = Math.floor(Math.random() * 4);
      const cardIndex = Math.floor(Math.random() * 14);
      const numCardLeft = deck[cardIndex].suits[suitIndex];

      if (numCardLeft > 0) {
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


  return drawCards(playerHandInput, numCardsDrawn)

}


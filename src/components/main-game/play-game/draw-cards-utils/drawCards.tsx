import { Hand } from "../../../../models/PlayerProps";
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const deck = useSelector((state: RootState) => state.deck);


const drawCards = (playerHand:Hand, numCards = 1) => {
    if (!playerHand) {
      return null;
    }
    let updatedHand = {...playerHand}
    for (let i = 0; i < numCards; i++) {
      updatedHand = drawCard(playerHand);
    }
    if (playerHand.cardValues.includes(11)) {
      console.log('there is an ace')
      updatedHand = changeAceVal(playerHand);
    }
    return updatedHand;
  };
  
  const drawCard = (playerHand: Hand) => {
    const handWithNewCards = { ...playerHand };
    const suits = ['♦', '♣', '♥', '♠'];
    while (true) {
      const suitIndex = Math.floor(Math.random() * 4);
      const cardIndex = Math.floor(Math.random() * 14);
      const numCardLeft = deck[cardIndex].suits[suitIndex];
      if (numCardLeft > 0) {
        const newCard = `${deck[cardIndex].card}${suits[suitIndex]}`;
        handWithNewCards.cards.push(newCard);
        const newCardVal = deck[cardIndex].value;
        handWithNewCards.cardValues.push(newCardVal);
        handWithNewCards.cardSum = handWithNewCards.cardValues.reduce((a, b) => a + b);
        break;
      }
    }
    return handWithNewCards;
  };
  
  const changeAceVal = (playerHand) => {
    const handWithNewAceVals = { ...playerHand };
    const { cardValues } = handWithNewAceVals;
    while (handWithNewAceVals.cardSum > 21) {
      const lastIndex = cardValues.lastIndexOf(11);
      if (lastIndex === -1) break;
      cardValues[lastIndex] = 1;
      handWithNewAceVals.cardSum = cardValues.reduce((a, b) => a + b);
    }
    return handWithNewAceVals;
  };
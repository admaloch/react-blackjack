import CardObjInterface from "../../../models/CardProps";
import { Hand } from "../../../models/PlayerProps";

interface DeckLocationInterface {
    cardIndex: number,
    suitIndex: number,
}

// Helper function to draw and update a hand
const genCardLocationIndexes = (deck: CardObjInterface[]): DeckLocationInterface => {
    
    let deckLocationVals: DeckLocationInterface = {
        cardIndex: 0,
        suitIndex: 0,
    }
    let isCardLocationValid = false;
    while (!isCardLocationValid) {
        const suitIndex = Math.floor(Math.random() * 4);
        const cardIndex = Math.floor(Math.random() * 13);
        const cardLocationAmt = deck[cardIndex].suits[suitIndex];
        if (cardLocationAmt > 0) {
            deckLocationVals = {
                cardIndex: cardIndex,
                suitIndex: suitIndex,
            };
            isCardLocationValid = true;
        }
    }
    
    return deckLocationVals;
};

// Helper function to draw and update a hand
const drawAndUpdateHand = (handInput: Hand, cardIndex: number, suitIndex: number, deck: CardObjInterface[]) => {
    
    const handWithNewCards = { ...handInput };
    const suits = ['♦', '♣', '♥', '♠'];
    const urlSuits = ['D', 'S', 'H', 'S'];
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

    return updatedHand;
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

const updateDeckFromState = (deck: CardObjInterface[], cardIndex: number, suitIndex: number) => {
    return deck.map((card, i) => i === cardIndex
        ? { ...card, suits: card.suits.map((suit, i) => i === suitIndex ? suit - 1 : suit) }
        : card
    )
}

export { genCardLocationIndexes, drawAndUpdateHand, changeAceVal, updateDeckFromState }
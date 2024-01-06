export interface Hand {
    cards: string[],
    cardUrlVals: string[]
    cardNumVals: number[],
    cardSum: number,
}

export interface DealerObjInterface {
    name: string;
    hand: Hand;
    isBlackjack: boolean;
}

export interface PlayerInterface {
    name: string;
    hand: Hand;
    isBlackjack: boolean;
    bank: number;
    currBet: number;
    minBet: number;
    isDoubleUp: boolean;
    isPlayerActive: boolean;
    currTokens: number[];
    roundsWon: number;
}

export const emptyPlayerItem: PlayerInterface = {
    name: '',
    hand: {
        cards: [],
        cardUrlVals: [],
        cardNumVals: [],
        cardSum: 0,
    },
    isBlackjack: false,
    bank: 1000,
    currBet: 0,
    minBet: 5,
    betDoubled: false,
    isPlayerActive: true,
    currTokens: [5, 10, 20, 50, 100, 500],
    roundsWon: 0,
}




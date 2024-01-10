export interface Hand {
    cards: string[],
    cardUrlVals: string[]
    cardNumVals: number[],
    cardSum: number,
    isBlackjack: boolean;
}

export interface DealerObjInterface extends Hand {
    name: string;

}


export interface PlayerInterface {
    name: string;
    hand: Hand;
    splitHand: Hand;
    bank: number;
    currBet: number;
    minBet: number;
    insuranceBet: number,
    splitBet: number;
    isPlayerSplit: boolean;
    isDoubleDown: boolean;
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
        isBlackjack: false,
    },
    splitHand: {
        cards: [],
        cardUrlVals: [],
        cardNumVals: [],
        cardSum: 0,
        isBlackjack: false,
    },
    bank: 1000,
    currBet: 0,
    minBet: 5,
    insuranceBet: 0,
    splitBet: 0,
    isPlayerSplit: false,
    isDoubleDown: false,
    isPlayerActive: true,
    currTokens: [1, 5, 25, 50, 100, 500],
    roundsWon: 0,
}




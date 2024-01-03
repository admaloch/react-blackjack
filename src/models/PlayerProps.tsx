interface PlayerHand {
    cards: string[],
    cardValues: number[],
    cardSum: number,
}

export interface PlayerInterface {
    name: string;
    hand: PlayerHand;
    isBlackjack: boolean;
    bank: number;
    currBet: number;
    minBet: number;
    betDoubled: boolean;
    isPlayerActive: boolean;
    currTokens: number[];
    roundsWon: number;
}

export const emptyPlayerItem: PlayerInterface = {
    name: '',
    hand: {
        cards: [],
        cardValues: [],
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
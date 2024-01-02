export interface PlayerInterface {
    id: number;
    name: string;
    hand: string[];
    handValues: number[];
    sum: number;
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
    id: 0,
    name: '',
    hand: [],
    handValues: [],
    sum: 0,
    isBlackjack: false,
    bank: 1000,
    currBet: 0,
    minBet: 5,
    betDoubled: false,
    isPlayerActive: true,
    currTokens: [5, 10, 20, 50, 100, 500],
    roundsWon: 0,
}
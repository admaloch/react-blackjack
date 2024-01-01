export interface PlayerInterface {
    name: string;
    hand: string[];
    handValues: number[];
    sum: number;
    isBlackjack: boolean;
    bank: number;
    bet: number;
    minBet: number;
    betDoubled: boolean;
    isPlayerActive: boolean;
    betOptions: string[];
    roundsWon: number;
}

export const emptyPlayerItem: PlayerInterface = {
    name: '',
    hand: [],
    handValues: [],
    sum: 0,
    isBlackjack: false,
    bank: 1000,
    bet: 0,
    minBet: 5,
    betDoubled: false,
    isPlayerActive: true,
    betOptions: ['$5', '$25', '$50', '$100', '$500', '$1000', 'All'],
    roundsWon: 0,
}
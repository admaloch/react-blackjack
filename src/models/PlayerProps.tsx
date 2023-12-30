export interface PlayerInterface {
    name: '',
    hand: [],
    handValues: [],
    sum: 0,
    isBlackjack: false,
    bank: 1000,
    bet: 0,
    minBet: 5,
    betDoubled: false,
    isPlayerActive: false,
    betOptions: ['$5', '$25', '$50', '$100', '$500', '$1000', 'All'],
    roundsWon: 0,
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
    isPlayerActive: false,
    betOptions: ['$5', '$25', '$50', '$100', '$500', '$1000', 'All'],
    roundsWon: 0,
}
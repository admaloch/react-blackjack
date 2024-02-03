export interface Hand {
    cards: string[],
    cardUrlVals: string[]
    cardNumVals: number[],
    cardSum: number,
    isBlackjack: boolean;
}

export interface RoundResultsProps {
    mainResults: string,
    splitResults: string,
    moneyWon: number,
    moneyLost: number,
    isComplete: boolean,
}

export interface DealerObjInterface {
    name: string;
    hand: Hand;
}


export interface PlayerInterface {
    name: string;
    hand: Hand;
    splitHand: Hand;
    bank: number;
    currBet: number;
    minBet: number;
    insuranceBet: number,
    wonInsuranceRound: boolean;
    splitBet: number;
    isPlayerSplit: boolean;
    isDoubleDown: boolean;
    playerLeftTable: boolean;
    currTokens: number[];
    roundsWon: number;
    roundResults: RoundResultsProps
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
    wonInsuranceRound: false,
    splitBet: 0,
    isPlayerSplit: false,
    isDoubleDown: false,
    playerLeftTable: false,
    roundResults: {
        mainResults: '',
        splitResults: '',
        moneyWon: 0,
        moneyLost: 0,
        isComplete: false,
    },
    currTokens: [1, 5, 25, 50, 100, 500],
    roundsWon: 0,
}

export interface PlayerInterfaceProps {
    player: PlayerInterface
}




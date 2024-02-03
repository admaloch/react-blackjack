import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlayerInterface } from "../../models/PlayerProps";

// const initialState: PlayerInterface[] = [];
// clubs (♣), diamonds (♦), hearts (♥), and spades (♠).x
const initialState = [
    {
        name: 'Dave',
        hand: {
            cards: ['A♣', 'K♦'],
            cardUrlVals: ['AC', 'KD'],
            cardNumVals: [11, 10],
            cardSum: 21,
            isBlackjack: true,
        },
        splitHand: {
            cards: [],
            cardUrlVals: [],
            cardNumVals: [],
            cardSum: 0,
            isBlackjack: false,
        },
        bank: 900,
        beginningRoundBank: 1000,
        currBet: 100,
        minBet: 100,
        insuranceBet: 0,
        wonInsuranceRound: false,
        splitBet: 0,
        isPlayerSplit: false,
        isDoubleDown: false,
        roundResults: {
            mainResults: '',
            splitResults: '',
            isComplete: false,
        },
        playerLeftTable: false,
        currTokens: [1, 5, 25, 50, 100, 500],
        roundsWon: 0,
    }, {
        name: 'James',
        hand: {
            cards: ['10♥', '8♠'],
            cardUrlVals: ['10H', '8S'],
            cardNumVals: [7, 8],
            cardSum: 15,
            isBlackjack: false,
        },
        splitHand: {
            cards: [],
            cardUrlVals: [],
            cardNumVals: [],
            cardSum: 0,
            isBlackjack: false,
        },
        bank: 700,
        beginningRoundBank: 1000,
        currBet: 200,
        minBet: 200,
        insuranceBet: 0,
        wonInsuranceRound: false,
        splitBet: 0,
        isPlayerSplit: false,
        isDoubleDown: false,
        roundResults: {
            mainResults: '',
            splitResults: '',
            isComplete: false,
        },
        playerLeftTable: false,
        currTokens: [1, 5, 25, 50, 100, 500],
        roundsWon: 0,
    }, {
        name: 'Bill',
        hand: {
            cards: ['5♣', '2♦', '8♥', 'K♦'],
            cardUrlVals: ['5C', '2D', '8H', 'KD'],
            cardNumVals: [5, 2, 8, 10],
            cardSum: 25,
            isBlackjack: false,
        },
        splitHand: {
            cards: [],
            cardUrlVals: [],
            cardNumVals: [],
            cardSum: 0,
            isBlackjack: false,
        },
        bank: 800,
        beginningRoundBank: 1000,
        currBet: 200,
        minBet: 200,
        insuranceBet: 0,
        wonInsuranceRound: false,
        splitBet: 0,
        isPlayerSplit: false,
        isDoubleDown: false,
        roundResults: {
            mainResults: '',
            splitResults: '',
            isComplete: false,
        },
        playerLeftTable: false,
        currTokens: [1, 5, 25, 50, 100, 500],
        roundsWon: 0,
    }, {
        name: 'Seth',
        hand: {
            cards: ['5♣', '2♦', '8♥', 'K♦'],
            cardUrlVals: ['5C', '2D', '8H', 'KD'],
            cardNumVals: [5, 2, 8, 10],
            cardSum: 25,
            isBlackjack: false,
        },
        splitHand: {
            cards: ['K♦', '10♥'],
            cardUrlVals: ['KD', '10H'],
            cardNumVals: [10, 10],
            cardSum: 20,
            isBlackjack: false,
        },
        bank: 600,
        beginningRoundBank: 1000,
        currBet: 200,
        minBet: 200,
        insuranceBet: 0,
        wonInsuranceRound: false,
        splitBet: 200,
        isPlayerSplit: false,
        isDoubleDown: false,
        roundResults: {
            mainResults: '',
            splitResults: '',
            isComplete: false,
        },
        playerLeftTable: false,
        currTokens: [1, 5, 25, 50, 100, 500],
        roundsWon: 0,
    }, {
        name: 'John',
        hand: {
            cards: ['5♣', '2♦', '8♥', 'K♦'],
            cardUrlVals: ['5C', '2D', '8H', 'KD'],
            cardNumVals: [5, 2, 8, 10],
            cardSum: 25,
            isBlackjack: false,
        },
        splitHand: {
            cards: [],
            cardUrlVals: [],
            cardNumVals: [],
            cardSum: 0,
            isBlackjack: false,
        },
        bank: 800,
        beginningRoundBank: 1000,
        currBet: 200,
        minBet: 200,
        insuranceBet: 0,
        wonInsuranceRound: false,
        splitBet: 0,
        isPlayerSplit: false,
        isDoubleDown: false,
        roundResults: {
            mainResults: '',
            splitResults: '',
            isComplete: false,
        },
        playerLeftTable: false,
        currTokens: [1, 5, 25, 50, 100, 500],
        roundsWon: 0,
    }
]

interface PlayerNameProps {
    name: string;
}

const playerArrSlice = createSlice({
    name: 'playersArr',
    initialState,
    reducers: {
        addPlayer: (state, action: PayloadAction<PlayerInterface>) => {
            state.push(action.payload);
        },
        updatePlayer: (state, action: PayloadAction<PlayerInterface>) => {
            const index = state.findIndex(player => player.name === action.payload.name);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },

        removePlayer: (state, action: PayloadAction<PlayerNameProps>) => {
            const index = state.findIndex(player => player.name === action.payload.name);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
        resetPlayersArr: (state) => {
            state.splice(0, state.length, ...initialState);
        },
    },
});

export const { addPlayer, updatePlayer, removePlayer, resetPlayersArr } = playerArrSlice.actions;

export default playerArrSlice.reducer;
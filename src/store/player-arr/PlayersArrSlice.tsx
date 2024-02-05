import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlayerInterface } from "../../models/PlayerProps";

// const initialState: PlayerInterface[] = [];
// clubs (♣), diamonds (♦), hearts (♥), and spades (♠).x
const initialState = [
    {
        name: 'Dave',
        hand: {
            cards: [],
            cardUrlVals: [],
            cardNumVals: [],
            cardSum: 0,
            isBlackjack: true,
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
        updateAllPlayers: (_, action: PayloadAction<PlayerInterface[]>) => {
            return action.payload;
        },
    },
});

export const { addPlayer, updatePlayer, removePlayer, resetPlayersArr, updateAllPlayers } = playerArrSlice.actions;

export default playerArrSlice.reducer;
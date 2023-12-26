import { createSlice } from "@reduxjs/toolkit";

interface PlayerObjInterface {
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

const initialState: PlayerObjInterface[] = [
    {
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
];

const playerArrSlice = createSlice({
    name: 'playersArr',
    initialState,
    reducers: {
        updatePlayer: (state, action) => {
            state === action.payload
        }
    },
})
export const { updatePlayer } = playerArrSlice.actions

export default playerArrSlice.reducer
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

const initialState: PlayerObjInterface[] = [];

const playerArrSlice = createSlice({
    name: 'playersArr',
    initialState,
    reducers: {
        addPlayer: (state, action: PayloadAction<PlayerObjInterface>) => {
            state.push(action.payload);
        },
        updatePlayer: (state, action: PayloadAction<PlayerObjInterface>) => {
            const index = state.findIndex(player => player.name === action.payload.name);
            if (index !== -1) {
                state[index] = action.payload;
            }
        }
    },
});

export const { addPlayer, updatePlayer } = playerArrSlice.actions;

export default playerArrSlice.reducer;

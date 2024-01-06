import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlayerInterface } from "../../models/PlayerProps";
import { Hand } from "../../models/PlayerProps";

const initialState: PlayerInterface[] = [];

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
    },
});

export const { addPlayer, updatePlayer, removePlayer } = playerArrSlice.actions;

export default playerArrSlice.reducer;

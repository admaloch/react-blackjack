import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlayerInterface } from "../../models/PlayerProps";

const initialState: (PlayerInterface | null)[] = [];

const playerArrSlice = createSlice({
    name: 'inactivePlayersArr',
    initialState,
    reducers: {
        addInactivePlayer: (state, action: PayloadAction<PlayerInterface | null>) => {
            return [...state, action.payload]
        },
        addInactivePlayers: (state, action: PayloadAction<PlayerInterface[]>) => {
            return [...state, ...action.payload]
        },
        resetInactivePlayers: () => initialState,
    },
});

export const { addInactivePlayer, addInactivePlayers, resetInactivePlayers } = playerArrSlice.actions;

export default playerArrSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlayerInterface } from "../../models/PlayerProps";

const initialState: (PlayerInterface | null)[] = [];

const playerArrSlice = createSlice({
    name: 'playersArr',
    initialState,
    reducers: {
        addInactivePlayer: (state, action: PayloadAction<PlayerInterface | null>) => {
            state.push(action.payload);
        },
    },
});

export const { addInactivePlayer } = playerArrSlice.actions;

export default playerArrSlice.reducer;
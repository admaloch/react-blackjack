import { createSlice } from "@reduxjs/toolkit";
import { DealerObjInterface } from "../../models/PlayerProps";

const initialState: DealerObjInterface = {
    name: 'Dealer',
    hand: {
        cards: [],
        cardValues: [],
        cardSum: 0,
    },
    isBlackjack: false,
}

const dealerObjSlice = createSlice({
    name: 'dealerObj',
    initialState,
    reducers: {
        updateDealer: (state, action) => {
            state === action.payload
        }
    },
})

export const { updateDealer } = dealerObjSlice.actions

export default dealerObjSlice.reducer
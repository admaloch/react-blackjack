import { createSlice } from "@reduxjs/toolkit";
import { DealerObjInterface } from "../../models/PlayerProps";

const initialState: DealerObjInterface = {
    name: 'Dealer',
    hand: {
        cards: [],
        cardUrlVals: [],
        cardNumVals: [],
        cardSum: 0,
        isBlackjack: false,
    }, 
}

const dealerObjSlice = createSlice({
    name: 'dealerObj',
    initialState,
    reducers: {
        updateDealer: (state, action) => {
            return { ...state, ...action.payload };
        },
        updateDealerHand: (state, action) => {
            state.hand = action.payload;
        }
    },
});

export const { updateDealer, updateDealerHand } = dealerObjSlice.actions

export default dealerObjSlice.reducer
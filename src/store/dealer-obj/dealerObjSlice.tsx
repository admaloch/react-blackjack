import { createSlice } from "@reduxjs/toolkit";
import { DealerObjInterface } from "../../models/PlayerProps";

const initialState: DealerObjInterface = {
    name: 'Dealer',
    hand: {
        cards: ['A♣', '5♥'],
        cardUrlVals: ['AC', '5H'],
        cardNumVals: [11, 5],
        cardSum: 16,
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
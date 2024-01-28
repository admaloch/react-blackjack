import { createSlice } from "@reduxjs/toolkit";
import { DealerObjInterface } from "../../models/PlayerProps";

const initialState: DealerObjInterface = {
    name: 'Dealer',
    hand: {
        cards: ['K♦','A♥'],
        cardUrlVals: ['KD', 'AH'],
        cardNumVals: [10, 11],
        cardSum: 21,
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
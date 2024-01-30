import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DealerObjInterface, Hand } from "../../models/PlayerProps";

interface DealerState {
    name: string;
    hand: Hand;
}

const initialState: DealerObjInterface = {
    name: 'Dealer',
    hand: {
        cards: ['2♦', 'A♥'],
        cardUrlVals: ['2D', 'AH'],
        cardNumVals: [2, 11],
        cardSum: 13,
        isBlackjack: false,
    },
}

const dealerObjSlice = createSlice({
    name: 'dealerObj',
    initialState,
    reducers: {
        updateDealer: (state, action: PayloadAction<DealerState>) => {
            return { ...state, ...action.payload };
        },
        updateDealerHand: (state, action: PayloadAction<Hand>) => {
            state.hand = action.payload;
        }
    },
});

export const { updateDealer, updateDealerHand } = dealerObjSlice.actions;

export default dealerObjSlice.reducer;

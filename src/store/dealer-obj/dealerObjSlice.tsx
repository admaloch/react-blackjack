import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DealerObjInterface, Hand } from "../../models/PlayerProps";

interface DealerState {
    name: string;
    hand: Hand;
}

const initialState: DealerObjInterface = {
    name: 'Dealer',
    hand: {
        cards: ['7♦', '10♥'],
        cardUrlVals: ['7D', '10H'],
        cardNumVals: [7, 10],
        cardSum: 17,
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

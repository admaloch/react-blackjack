import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DealerObjInterface, Hand } from "../../models/PlayerProps";

interface DealerState {
    name: string;
    hand: Hand;
}

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
        updateDealer: (state, action: PayloadAction<DealerState>) => {
            return { ...state, ...action.payload };
        },
        resetDealer: (state) => {
            return {
                ...state,
                hand: {
                    cards: [],
                    cardUrlVals: [],
                    cardNumVals: [],
                    cardSum: 0,
                    isBlackjack: false,
                },
            }
        },
    },
});

export const { updateDealer, resetDealer } = dealerObjSlice.actions;
export default dealerObjSlice.reducer;
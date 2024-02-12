import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DealerObjInterface, Hand } from "../../models/PlayerProps";

interface DealerState {
    name: string;
    hand: Hand;
}

const initialState: DealerObjInterface = {
    name: 'Dealer',
    "hand": {
        "cards": [
            "7♥",
            "A♠"
        ],
        "cardUrlVals": [
            "7H",
            "AS"
        ],
        "cardNumVals": [
            10,
            11
        ],
        "cardSum": 21,
        "isBlackjack": false
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
        },
        resetDealer: (state) => {
            state.name = initialState.name;
            state.hand = initialState.hand;
        },
    },
});

export const { updateDealer, updateDealerHand, resetDealer } = dealerObjSlice.actions;

export default dealerObjSlice.reducer;

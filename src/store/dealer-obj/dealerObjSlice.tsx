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
                "6♥",
                "A♠"
            ],
            "cardUrlVals": [
                "6H",
                "AS"
            ],
            "cardNumVals": [
                6,
                11
            ],
            "cardSum": 17,
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


import { createSlice } from "@reduxjs/toolkit";

 interface DealerObjInterface {
    name: string;
    hand: string[];
    handValues: number[];
    sum: number;
    isBlackjack: boolean;
}

const initialState: DealerObjInterface = {
    name: 'Dealer',
    hand: [],
    handValues: [],
    sum: 0,
    isBlackjack: false,
}

const dealerObjSlice = createSlice({
    name: 'dealer-obj',
    initialState,
    reducers: {
        updateDealer: (state, action) => {
            state === action.payload
        }
    },
})

export const { updateDealer } = dealerObjSlice.actions

export default dealerObjSlice.reducer
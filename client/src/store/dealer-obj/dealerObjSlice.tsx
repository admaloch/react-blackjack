import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DealerObjInterface, Hand } from "../../models/PlayerProps";

export interface DealerState {
  name: string;
  hand: Hand;
}

const initialState: DealerObjInterface = {
  name: "Dealer",
  hand: {
    cards: [],
    cardUrlVals: [],
    cardNumVals: [],
    cardSum: 0,
    isBlackjack: false,
  },
};

const dealerObjSlice = createSlice({
  name: "dealerObj",
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
      };
    },
    setDealer: (_state, action: PayloadAction<DealerState>) => {
      return action.payload; // Directly setting the state to the new value
    },
  },
});

export const { setDealer, updateDealer, resetDealer } = dealerObjSlice.actions;
export default dealerObjSlice.reducer;

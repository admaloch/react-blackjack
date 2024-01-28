import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DealerObjInterface, Hand } from "../../models/PlayerProps";

interface DealerState {
  name: string;
  hand: Hand;
}

const initialState: DealerObjInterface = {
  name: 'Dealer',
  hand: {
    cards: ['3♦','A♥'],
    cardUrlVals: ['3D', 'AH'],
    cardNumVals: [3, 11],
    cardSum: 14,
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

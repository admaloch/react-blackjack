import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import CardObjInterface from "../../models/CardProps";



const initialState: CardObjInterface[] = [
  { card: '2', value: 2, suits: [1, 1, 1, 1] },
  { card: '3', value: 3, suits: [1, 1, 1, 1] },
  { card: '4', value: 4, suits: [1, 1, 1, 1] },
  { card: '5', value: 5, suits: [1, 1, 1, 1] },
  { card: '6', value: 6, suits: [1, 1, 1, 1] },
  { card: '7', value: 7, suits: [1, 1, 1, 1] },
  { card: '8', value: 8, suits: [1, 1, 1, 1] },
  { card: '9', value: 9, suits: [1, 1, 1, 1] },
  { card: '10', value: 10, suits: [1, 1, 1, 1] },
  { card: 'J', value: 10, suits: [1, 1, 1, 1] },
  { card: 'Q', value: 10, suits: [1, 1, 1, 1] },
  { card: 'K', value: 10, suits: [1, 1, 1, 1] },
  { card: 'A', value: 11, suits: [1, 1, 1, 1] },
]

const deckSlice = createSlice({
  name: 'deck',
  initialState,
  reducers: {
    updateDeck: (state, action: PayloadAction<CardObjInterface[]>) => {
      state.length = 0;
      state.push(...action.payload);
    },
  },
});

export const { updateDeck } = deckSlice.actions


export default deckSlice.reducer




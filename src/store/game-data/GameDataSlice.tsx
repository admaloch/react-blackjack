import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    roundsPlayed: 0,
    isGameActive: false,
}

const deckSlice = createSlice({
  name: 'game-data',
  initialState,
  reducers: {
    
  },
})

export const { updateDeck } = deckSlice.actions


export default deckSlice.reducer




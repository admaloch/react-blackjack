import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roundsPlayed: 1,
  isGameActive: false,
}

const deckSlice = createSlice({
  name: 'game-data',
  initialState,
  reducers: {
    updateRoundsPlayed: (state) => {
      state.roundsPlayed += 1;
    },
    updateIsGameActive: (state) => {
      state.isGameActive = !state.isGameActive;
    },
  },
})

export const { updateRoundsPlayed, updateIsGameActive } = deckSlice.actions

export default deckSlice.reducer

import { createSlice } from "@reduxjs/toolkit";

interface GameDataProps {
  roundsPlayed: number;
  isGameActive: boolean;
  isMenuShown: boolean;
  isPlayerStatsShown: boolean;
  isPlayerRoundComplete: boolean
}

const initialState: GameDataProps = {
  roundsPlayed: 1,
  isGameActive: false,
  isMenuShown: true,
  isPlayerStatsShown: true,
  isPlayerRoundComplete: false,
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
    updateIsMenuShown: (state) => {
      state.isMenuShown = !state.isMenuShown;
    },
    updateIsPlayerStatsShown: (state) => {
      state.isPlayerStatsShown = !state.isPlayerStatsShown;
    },
    updateIsPlayerRoundComplete: (state) => {
      state.isPlayerRoundComplete = !state.isPlayerRoundComplete;
    },
  },
})

export const { updateRoundsPlayed, updateIsGameActive, updateIsMenuShown, updateIsPlayerStatsShown, updateIsPlayerRoundComplete } = deckSlice.actions

export default deckSlice.reducer

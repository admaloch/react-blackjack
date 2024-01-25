import { createSlice } from "@reduxjs/toolkit";

interface GameDataProps {
  roundsPlayed: number;
  isGameActive: boolean;
  isMenuShown: boolean;
  isPlayerStatsShown: boolean;
  isPlayerRoundActive: boolean;
  isDealerCardRevealed: boolean;
}

const initialState: GameDataProps = {
  roundsPlayed: 1,
  isGameActive: false,
  isMenuShown: true,
  isPlayerStatsShown: true,
  isPlayerRoundActive: false,
  isDealerCardRevealed: false,
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
    updateIsPlayerRoundActive: (state) => {
      state.isPlayerRoundActive = !state.isPlayerRoundActive;
    },
    updateIsDealerCardRevealed: (state) => {
      state.isDealerCardRevealed = !state.isDealerCardRevealed;
    },
  },
})

export const { updateRoundsPlayed, updateIsGameActive, updateIsMenuShown, updateIsPlayerStatsShown, updateIsPlayerRoundActive, updateIsDealerCardRevealed } = deckSlice.actions

export default deckSlice.reducer

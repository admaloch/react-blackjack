import { createSlice } from "@reduxjs/toolkit";

interface GameDataProps {
  roundsPlayed: number;
  isGameActive: boolean;
  isMenuShown: boolean;
  isPlayerStatsShown: boolean;
  isPlayerRoundActive: boolean;
  isDealerRoundActive: boolean;
  isDealerCardRevealed: boolean;
  isDealerDrawing: boolean;
  isInsuranceRoundComplete: boolean;
  isMainResultsActive: boolean;
  isSplitResultsActive: boolean;
  isRoundActive: boolean;
}

const initialState: GameDataProps = {
  roundsPlayed: 1,
  isGameActive: false,
  isMenuShown: true,
  isPlayerStatsShown: true,
  isPlayerRoundActive: false,
  isDealerCardRevealed: false,
  isDealerDrawing: false,
  isInsuranceRoundComplete: false,
  isDealerRoundActive: true,
  isMainResultsActive: false,
  isSplitResultsActive: false,
  isRoundActive: true,
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
    updateIsDealerCardRevealed: (state) => {
      state.isDealerCardRevealed = !state.isDealerCardRevealed;
    },
    updateIsRoundActive: (state) => {
      state.isRoundActive = !state.isRoundActive;
    },
    beginDealerDrawing: (state) => {
      return {...state, isDealerDrawing: true}
    },
    

    beginPlayerRound: (state) => {
      return { ...state, isPlayerRoundActive: true }
    },
    endPlayerRound: (state) => {
      return { ...state, isPlayerRoundActive: false, isDealerRoundActive: true }
    },
    beginDealerRound: (state) => {
      return { ...state, isPlayerRoundActive: false, isDealerRoundActive: true }
    },
    endDealerRound: (state) => {
      return { ...state, isDealerRoundActive: false, isMainResultsActive: true, isDealerDrawing: false }
    },
    beginSplitRound: (state) => {
      return { ...state, isSplitResultsActive: true }
    },
    endRoundResults: (state) => {
      return { ...state, isMainResultsActive: false }
    },
    endSplitRound: (state) => {
      return { ...state, isSplitResultsActive: false }
    },

    updateIsInsuranceRoundComplete: (state) => {
      state.isInsuranceRoundComplete = !state.isInsuranceRoundComplete;
    },
  },
})

export const { updateRoundsPlayed, updateIsGameActive, updateIsMenuShown, updateIsPlayerStatsShown, updateIsDealerCardRevealed, updateIsInsuranceRoundComplete, beginPlayerRound, endPlayerRound, beginDealerRound, endDealerRound, endRoundResults, beginSplitRound, updateIsRoundActive, beginDealerDrawing, endSplitRound } = deckSlice.actions

export default deckSlice.reducer

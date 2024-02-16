import { createSlice } from "@reduxjs/toolkit";

interface GameDataProps {
  roundsPlayed: number;
  isGameActive: boolean;
  isGameIntro: boolean;
  isBetRoundActive: boolean;
  isAddPlayersRound: boolean;
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
  isGameActive: true,
  isGameIntro: false,
  isAddPlayersRound: false,
  isBetRoundActive: false,
  isPlayerRoundActive: true,
  isDealerCardRevealed: false,
  isDealerDrawing: false,
  isInsuranceRoundComplete: false,
  isDealerRoundActive: false,
  isMainResultsActive: false,
  isSplitResultsActive: false,
  isRoundActive: true,
}

const deckSlice = createSlice({
  name: 'game-data',
  initialState,
  reducers: {
    updateGameObj: (_, action) => {
      return action.payload;
    },
    increaseRoundsPlayed: (state) => {
      state.roundsPlayed += 1;
    },
    updateIsGameActive: (state) => {
      state.isGameActive = !state.isGameActive;
    },


    revealDealerCard: (state) => {
      return { ...state, isDealerCardRevealed: true }
    },



    beginDealerDrawing: (state) => {
      return { ...state, isDealerDrawing: true }
    },
    beginNewRound: (state) => {
      return { ...state, isRoundActive: true }
    },
    endCurrentRound: (state) => {
      return { ...state, isRoundActive: false }
    },
    beginPlayerRound: (state) => ({ ...state, isPlayerRoundActive: true, isRoundActive: true }),
    endPlayerRound: (state) => {
      return { ...state, isPlayerRoundActive: false, isDealerRoundActive: true }
    },
    beginDealerRound: (state) => {
      return { ...state, isPlayerRoundActive: false, isDealerRoundActive: true }
    },
    endDealerRound: (state) => {
      return { ...state, isDealerRoundActive: false, isMainResultsActive: true, isDealerDrawing: false }
    },
    endDealerAndRound: (state) => {
      return { ...state, isDealerRoundActive: false, isMainResultsActive: false, isDealerDrawing: false }
    },

    endRoundResults: (state) => {

      return { ...state, isMainResultsActive: false }
    },
    beginSplitRound: (state) => {
      return { ...state, isSplitResultsActive: true }
    },
    endSplitRound: (state) => {
      return { ...state, isSplitResultsActive: false }
    },



    updateIsInsuranceRoundComplete: (state) => {
      state.isInsuranceRoundComplete = !state.isInsuranceRoundComplete;
    },
    beginInsuranceRound: (state) => {
      return { ...state, isInsuranceRoundComplete: false }
    },
    endInsuranceRound: (state) => {
      return { ...state, isInsuranceRoundComplete: true }
    },
  },
})

export const { increaseRoundsPlayed, updateIsGameActive, revealDealerCard, updateIsInsuranceRoundComplete, beginPlayerRound, endPlayerRound, beginDealerRound, endDealerRound, endRoundResults, beginSplitRound, beginDealerDrawing, endSplitRound, beginNewRound, endCurrentRound, beginInsuranceRound, endInsuranceRound, updateGameObj, endDealerAndRound } = deckSlice.actions

export default deckSlice.reducer

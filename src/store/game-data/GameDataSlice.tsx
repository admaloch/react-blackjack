import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
  isGameActive: false,
  isGameIntro: true,
  isAddPlayersRound: false,
  isBetRoundActive: false,
  isPlayerRoundActive: false,
  isDealerCardRevealed: false,
  isDealerDrawing: false,
  isInsuranceRoundComplete: false,
  isDealerRoundActive: false,
  isMainResultsActive: false,
  isSplitResultsActive: false,
  isRoundActive: false,
}

const deckSlice = createSlice({
  name: 'game-data',
  initialState,
  reducers: {

    increaseRoundsPlayed: (state) => {
      state.roundsPlayed += 1;
    },
    startBetRound: (state) => {
      return { ...state, isAddPlayersRound: false, isBetRoundActive: true, }
    },
    startAddPlayers: (state) => {
      return { ...state, isGameActive: true, isAddPlayersRound: true, isGameIntro: false, }
    },
    beginPlayerRound: (state) => {
      return { ...state, isBetRoundActive: false, isPlayerRoundActive: true, isRoundActive: true }
    },

    updateIsGameActive: (state) => {
      state.isGameActive = !state.isGameActive;
    },
    endIsGameActive: (state) => {
      return {
        ...state,
        isGameActive: false,
        isAddPlayersRound: false,
        isBetRoundActive: false,
        isPlayerRoundActive: false,
        isDealerCardRevealed: false,
        isDealerDrawing: false,
        isInsuranceRoundComplete: false,
        isDealerRoundActive: false,
        isMainResultsActive: false,
        isSplitResultsActive: false,
        isRoundActive: false,
      }
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
    endFullRound: (state) => {
      return { ...state, isRoundActive: false }
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
    endDealerAndRound: (state) => {
      return { ...state, isDealerRoundActive: false, isMainResultsActive: false, isDealerDrawing: false }
    },

    endMainHandResults: (state) => {

      return { ...state, isMainResultsActive: false }
    },
    beginSplitRound: (state) => {
      return { ...state, isSplitResultsActive: true }
    },
    endSplitRound: (state) => {
      return { ...state, isSplitResultsActive: false, isRoundActive: false }
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
    returnToGameIntro: (state) => {
      return { ...state, isGameIntro: true }
    },
    resetGameData: (state, action: PayloadAction<boolean>) => {
      const areAllPlayersBroke = action.payload;
      return {
        ...state,
        roundsPlayed: !areAllPlayersBroke
          ? state.roundsPlayed + 1
          : state.roundsPlayed,
        isDealerCardRevealed: false,
        isInsuranceRoundComplete: false,
        isBetRoundActive: !areAllPlayersBroke ? true : false,
        isGameActive: !areAllPlayersBroke ? true : false
      }
    },
  },
})

export const { increaseRoundsPlayed, updateIsGameActive, revealDealerCard, updateIsInsuranceRoundComplete, beginPlayerRound, endPlayerRound, beginDealerRound, endDealerRound, endMainHandResults, beginSplitRound, beginDealerDrawing, endSplitRound, beginNewRound, endFullRound, beginInsuranceRound, endInsuranceRound, endDealerAndRound, endIsGameActive, returnToGameIntro, startBetRound, startAddPlayers, resetGameData } = deckSlice.actions

export default deckSlice.reducer

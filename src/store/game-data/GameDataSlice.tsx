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
    revealDealerCard: (state) => { state.isDealerCardRevealed = true },
    beginDealerDrawing: (state) => { state.isDealerDrawing = true },
    endFullRound: (state) => { state.isRoundActive = false },
    beginInsuranceRound: (state) => { state.isInsuranceRoundComplete = false },
    endInsuranceRound: (state) => { state.isInsuranceRoundComplete = true },
    returnToGameIntro: (state) => { state.isGameIntro = true },
    endMainHandResults: (state) => { state.isMainResultsActive = false },
    beginSplitRound: (state) => { state.isSplitResultsActive = true },
    startBetRound: (state) => {
      return { ...state, isAddPlayersRound: false, isBetRoundActive: true, }
    },
    startAddPlayers: (state) => {
      return { ...state, isGameActive: true, isAddPlayersRound: true, isGameIntro: false, }
    },
    beginPlayerRound: (state) => {
      return { ...state, isBetRoundActive: false, isPlayerRoundActive: true, isRoundActive: true }
    },
    endIsGameActive: (state) => {
      return { ...state, isGameActive: false, isAddPlayersRound: false, isBetRoundActive: false, isPlayerRoundActive: false, isDealerCardRevealed: false, isDealerDrawing: false, isInsuranceRoundComplete: false, isDealerRoundActive: false, isMainResultsActive: false, isSplitResultsActive: false, isRoundActive: false }
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
    endSplitRound: (state) => {
      return { ...state, isSplitResultsActive: false, isRoundActive: false }
    },
    resetGameData: (state, action: PayloadAction<boolean>) => {
      const areAllPlayersBroke = action.payload;
      return {
        ...state, roundsPlayed: !areAllPlayersBroke ? state.roundsPlayed + 1 : state.roundsPlayed, isDealerCardRevealed: false, isInsuranceRoundComplete: false, isBetRoundActive: !areAllPlayersBroke ? true : false, isGameActive: !areAllPlayersBroke ? true : false
      }
    },
  },
})

export const { revealDealerCard, beginPlayerRound, beginDealerRound, endDealerRound, endMainHandResults, beginSplitRound, beginDealerDrawing, endSplitRound, endFullRound, beginInsuranceRound, endInsuranceRound, endDealerAndRound, endIsGameActive, returnToGameIntro, startBetRound, startAddPlayers, resetGameData } = deckSlice.actions

export default deckSlice.reducer
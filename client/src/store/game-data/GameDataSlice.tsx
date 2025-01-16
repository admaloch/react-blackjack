import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GameDataProps, initialGameState } from "./GameDataProps";

const deckSlice = createSlice({
  name: "game-data",
  initialState: initialGameState,
  reducers: {
    setGameData: (_state, action: PayloadAction<GameDataProps>) => {
      return action.payload;
    },
    resetGame: () => initialGameState,
    revealDealerCard: (state) => {
      state.isDealerCardRevealed = true;
    },
    beginDealerDrawing: (state) => {
      state.isDealerDrawing = true;
    },
    endFullRound: (state) => {
      state.isRoundActive = false;
    },
    beginInsuranceRound: (state) => {
      state.isInsuranceRoundComplete = false;
    },
    endInsuranceRound: (state) => {
      state.isInsuranceRoundComplete = true;
    },
    endMainHandResults: (state) => {
      state.isMainResultsActive = false;
    },
    beginSplitRound: (state) => {
      state.isSplitResultsActive = true;
    },
    startBetRound: (state) => {
      return { ...state, isAddPlayersRound: false, isBetRoundActive: true };
    },
    returnToPrevGame: (state) => {
      return {
        ...state,
        isGameIntro: false,
        isGameActive: true,
        isBetRoundActive: true,
      };
    },
    startAddPlayers: (state) => {
      return {
        ...state,
        isGameActive: true,
        isAddPlayersRound: true,
        isGameIntro: false,
      };
    },
    beginPlayerRound: (state) => {
      return {
        ...state,
        isBetRoundActive: false,
        isPlayerRoundActive: true,
        isRoundActive: true,
      };
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
      };
    },
    beginDealerRound: (state) => {
      return {
        ...state,
        isPlayerRoundActive: false,
        isDealerRoundActive: true,
      };
    },
    endDealerRound: (state) => {
      return {
        ...state,
        isDealerRoundActive: false,
        isMainResultsActive: true,
        isDealerDrawing: false,
      };
    },
    endDealerAndRound: (state) => {
      return {
        ...state,
        isDealerRoundActive: false,
        isMainResultsActive: false,
        isDealerDrawing: false,
      };
    },
    endSplitRound: (state) => {
      return { ...state, isSplitResultsActive: false, isRoundActive: false };
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
        isGameActive: !areAllPlayersBroke ? true : false,
      };
    },
  },
});

export const {
  returnToPrevGame,
  revealDealerCard,
  beginPlayerRound,
  beginDealerRound,
  endDealerRound,
  endMainHandResults,
  beginSplitRound,
  beginDealerDrawing,
  endSplitRound,
  endFullRound,
  beginInsuranceRound,
  endInsuranceRound,
  endDealerAndRound,
  endIsGameActive,
  startBetRound,
  startAddPlayers,
  resetGameData,
  resetGame,
  setGameData,
} = deckSlice.actions;

export default deckSlice.reducer;

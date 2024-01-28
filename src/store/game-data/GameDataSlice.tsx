import { createSlice } from "@reduxjs/toolkit";

interface GameDataProps {
  roundsPlayed: number;
  isGameActive: boolean;
  isMenuShown: boolean;
  isPlayerStatsShown: boolean;
  isPlayerRoundActive: boolean;
  isDealerRoundActive: boolean;
  isDealerCardRevealed: boolean;
  isInsuranceRoundComplete: boolean;
}

const initialState: GameDataProps = {
  roundsPlayed: 1,
  isGameActive: false,
  isMenuShown: true,
  isPlayerStatsShown: true,
  isPlayerRoundActive: false,
  isDealerCardRevealed: false,
  isInsuranceRoundComplete: false,
  isDealerRoundActive: true,
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
 
    beginPlayerRound: (state) => {
      return {...state, isPlayerRoundActive: true}
    },
    endPlayerRound: (state) => {
      return {...state, isPlayerRoundActive: false, isDealerRoundActive: true}
    },
    beginDealerRound: (state) => {
      return {...state, isPlayerRoundActive: false, isDealerRoundActive: true}
    },
    endDealerRound: (state) => {
      return {...state, isDealerRoundActive: false}
    },
    
    
  
    updateIsDealerCardRevealed: (state) => {
      state.isDealerCardRevealed = !state.isDealerCardRevealed;
    },
    updateIsInsuranceRoundComplete: (state) => {
      state.isInsuranceRoundComplete = !state.isInsuranceRoundComplete;
    },
  },
})

export const { updateRoundsPlayed, updateIsGameActive, updateIsMenuShown, updateIsPlayerStatsShown, updateIsDealerCardRevealed, updateIsInsuranceRoundComplete, beginPlayerRound, endPlayerRound, beginDealerRound, endDealerRound } = deckSlice.actions

export default deckSlice.reducer

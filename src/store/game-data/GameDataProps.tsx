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

export const initialGameState: GameDataProps = {
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
};
// export const initialGameState: GameDataProps = {
//   roundsPlayed: 1,
//   isGameActive: true,
//   isGameIntro: false,
//   isAddPlayersRound: false,
//   isBetRoundActive: false,
//   isPlayerRoundActive: false,
//   isDealerCardRevealed: false,
//   isDealerDrawing: false,
//   isInsuranceRoundComplete: false,
//   isDealerRoundActive: true,
//   isMainResultsActive: false,
//   isSplitResultsActive: false,
//   isRoundActive: true,
// };


export default initialGameState
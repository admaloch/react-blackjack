import { PlayerInterface } from "../../models/PlayerProps";

const updatePlayersHelper = (players: PlayerInterface[]) => {
  const inActivePlayers = players.filter((player) => player.bank < 5);
  const updatedActivePlayers = players
    .filter((player) => player.bank >= 5)
    .map((player: PlayerInterface) => {
      return {
        ...player,
        hand: {
          cards: [],
          cardUrlVals: [],
          cardNumVals: [],
          cardSum: 0,
          isBlackjack: false,
        },
        splitHand: {
          cards: [],
          cardUrlVals: [],
          cardNumVals: [],
          cardSum: 0,
          isBlackjack: false,
        },
        currBet: player.minBet <= player.bank ? player.minBet : 5,
        minBet: player.minBet <= player.bank ? player.minBet : 5,
        bank:
          player.minBet <= player.bank
            ? player.bank - player.minBet
            : player.bank - 5,
        insuranceBet: 0,
        wonInsuranceRound: false,
        splitBet: 0,
        isPlayerSplit: false,
        isDoubleDown: false,
        roundResults: {
          mainResults: "",
          splitResults: "",
          isComplete: false,
        },
        beginningRoundBank: player.bank,
      };
    });
  return [...inActivePlayers, ...updatedActivePlayers];
};

export default updatePlayersHelper;

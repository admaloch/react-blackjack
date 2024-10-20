const mongoose = require("mongoose");
const { Schema } = mongoose;

// Schema for player hand
const handSchema = new Schema({
  cardNumVals: { type: [Number], required: true }, // Numeric values of the cards
  cardSum: { type: Number, required: true }, // Sum of the cards
  cardUrlVals: { type: [String], required: true }, // Card URL representations (e.g., "9S", "5D")
  cards: { type: [String], required: true }, // Card face representations (e.g., "9♠", "5♦")
  isBlackjack: { type: Boolean, default: false }, // Indicates if the hand is a blackjack
});

// Schema for player round results
const roundResultsSchema = new Schema({
  isComplete: { type: Boolean, required: true },
  mainResults: { type: String, default: "" },
  splitResults: { type: String, default: "" },
});

// Schema for each player
const playerSchema = new Schema({
  bank: { type: Number, required: true },
  beginningRoundBank: { type: Number, required: true },
  currBet: { type: Number, default: 0 },
  currTokens: { type: [Number], required: true },
  hand: { type: handSchema, required: true },
  insuranceBet: { type: Number, default: 0 },
  isDoubleDown: { type: Boolean, default: false },
  isPlayerSplit: { type: Boolean, default: false },
  minBet: { type: Number, required: true },
  name: { type: String, required: true },
  playerLeftTable: { type: Boolean, default: false },
  roundResults: { type: roundResultsSchema, required: true },
  roundsWon: { type: Number, default: 0 },
  splitBet: { type: Number, default: 0 },
  splitHand: {
    cardSum: { type: Number, default: 0 },
    isBlackjack: { type: Boolean, default: false },
  },
  wonInsuranceRound: { type: Boolean, default: false },
});

// Schema for the dealer object
const dealerSchema = new Schema({
  hand: { type: handSchema, required: true },
  name: { type: String, required: true, default: "Dealer" },
});

// Schema for deck cards
const deckCardSchema = new Schema({
  card: { type: String, required: true },
  suits: { type: [Number], required: true }, // Array representing suits
  value: { type: Number, required: true }, // Card value (numeric or face card)
});

// Schema for game data
const gameDataSchema = new Schema({
  isAddPlayersRound: { type: Boolean, default: false },
  isBetRoundActive: { type: Boolean, default: false },
  isDealerCardRevealed: { type: Boolean, default: false },
  isDealerDrawing: { type: Boolean, default: false },
  isDealerRoundActive: { type: Boolean, default: false },
  isGameActive: { type: Boolean, default: true },
  isGameIntro: { type: Boolean, default: false },
  isInsuranceRoundComplete: { type: Boolean, default: false },
  isMainResultsActive: { type: Boolean, default: false },
  isPlayerRoundActive: { type: Boolean, default: false },
  isRoundActive: { type: Boolean, default: false },
  isSplitResultsActive: { type: Boolean, default: false },
  roundsPlayed: { type: Number, default: 0 },
});

// Main schema for the blackjack game session
const gameSessionSchema = new Schema({
  dealerObj: { type: dealerSchema, required: true },
  deck: { type: [deckCardSchema], required: true },
  gameData: { type: gameDataSchema, required: true },
  playersArr: { type: [playerSchema], required: true },
  inactivePlayers: { type: [playerSchema], required: true },
});

module.exports = mongoose.model("GameSession", gameSessionSchema);

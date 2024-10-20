const notfromsave = {
  

  splitHand: {
    cards: [],
    cardUrlVals: [],
    cardNumVals: [],
    cardSum: 0,
    isBlackjack: false,
  },



  minBet: 5,
  insuranceBet: 0,
  wonInsuranceRound: false,
  splitBet: 0,
  isPlayerSplit: false,
  isDoubleDown: false,
  playerLeftTable: false,

  currTokens: [1, 5, 25, 50, 100, 500],
  roundsWon: 0,
};

const fromSave = {
  bank: 995,


  currTokens: [1, 5, 25, 50, 100, 500],
  insuranceBet: 0,
  isDoubleDown: false,
  isPlayerSplit: false,
  minBet: 5,
  
  playerLeftTable: false,
 
  roundsWon: 0,
  splitBet: 0,
  wonInsuranceRound: false,
};

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlayerAndDealerProps, PlayerInterface, RoundResultsProps } from "../../models/PlayerProps";
import playerWonOrLostFunc from "../../utils/playerWonOrLostFunc";
import { updatePlayerTokens } from "../../components/main-game/player-bets/updatePlayerTokens";

interface TokensProps {
    index: number;
    type: string
}
interface TokenClickProps {
    index: number;
    number: number;
}

const initialState: PlayerInterface[] = [
        {
            "name": "James",
            "hand": {
                "cards": [
                    "A♥",
                    "3♠",
                  
    
                ],
                "cardUrlVals": [
                    "AH",
                    "3S",
                  
    
                ],
                "cardNumVals": [
                    11,
                    3,
                   
    
                ],
                "cardSum": 14,
                "isBlackjack": false,
            },
            "splitHand": {
                "cards": [],
                "cardUrlVals": [],
                "cardNumVals": [],
                "cardSum": 0,
                "isBlackjack": false,
            },
            "bank": 995,
            "beginningRoundBank": 1000,
            "currBet": 5,
            "minBet": 5,
            "insuranceBet": 0,
            "wonInsuranceRound": false,
            "splitBet": 0,
            "isPlayerSplit": false,
            "isDoubleDown": false,
            "playerLeftTable": false,
            "roundResults": {
                "mainResults": "",
                "splitResults": "",
                "isComplete": false,
            },
            "currTokens": [
                1,
                5,
                25,
                50,
                100,
                500
            ],
            "roundsWon": 0
        },
        {
            "name": "Dave",
            "hand": {
                "cards": [
                    "9♥",
                    "9♠"
                ],
                "cardUrlVals": [
                    "9H",
                    "9S"
                ],
                "cardNumVals": [
                    9,
                    9,
                ],
                "cardSum": 18,
                "isBlackjack": false,
            },
            "splitHand": {
                "cards": [],
                "cardUrlVals": [],
                "cardNumVals": [],
                "cardSum": 0,
                "isBlackjack": false,
            },
            "bank": 900,
            "beginningRoundBank": 1000,
            "currBet": 100,
            "minBet": 100,
            "insuranceBet": 0,
            "wonInsuranceRound": false,
            "splitBet": 0,
            "isPlayerSplit": false,
            "isDoubleDown": false,
            "playerLeftTable": false,
            "roundResults": {
                "mainResults": "",
                "splitResults": "",
                "isComplete": false,
            },
            "currTokens": [
                1,
                5,
                25,
                50,
                100,
                500
            ],
            "roundsWon": 0
        },
    
    ]

interface PlayerNameProps {
    name: string;
}

const playerArrSlice = createSlice({
    name: 'playersArr',
    initialState,
    reducers: {
        addPlayer: (state, action: PayloadAction<PlayerInterface>) => {
            state.push(action.payload);
        },
        updatePlayer: (state, action: PayloadAction<PlayerInterface>) => {
            const index = state.findIndex(player => player.name === action.payload.name);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        makeDoubleDownFalse: (state, action: PayloadAction<number>) => {
            state[action.payload].isDoubleDown = false
        },
        updatePlayerInsurance: (state, action: PayloadAction<number>) => {
            const playerIndex = action.payload;
            const playerToUpdate = state[playerIndex];
            if (playerToUpdate) {
                const insuranceBet = Math.ceil(playerToUpdate.currBet / 2);
                const bank = playerToUpdate.bank - insuranceBet
                state[playerIndex] = {
                    ...playerToUpdate,
                    bank,
                    insuranceBet,
                };
            }
        },
        resetAfterInsuranceWin: (state, action: PayloadAction<PlayerInterface>) => {
            const index = state.findIndex(player => player.name === action.payload.name)
            const { bank, insuranceBet, currBet, splitBet } = state[index]
            state[index] = {
                ...state[index],
                bank: bank + insuranceBet + currBet + splitBet,
                wonInsuranceRound: true,
                insuranceBet: 0,
                currBet: 0,
                splitBet: 0,
            }
        },
        updateDoubleDownHand: (state, action: PayloadAction<number>) => {
            const currPlayer = state[action.payload];
            const { currBet, splitBet, bank, splitHand } = currPlayer;
            const isMainHand = splitHand.cards.length < 2;
            state[action.payload] = {
                ...currPlayer,
                isDoubleDown: true,
                currBet: isMainHand ? currBet * 2 : currBet,
                splitBet: !isMainHand ? splitBet * 2 : splitBet,
                bank: isMainHand ? bank - currBet : bank - splitBet,
            };
        },
        splitPlayerHand: (state, action: PayloadAction<number>) => {
            const currPlayer = state[action.payload];
            const { hand, currBet, bank } = currPlayer;
            const { cards, cardNumVals, cardUrlVals, } = hand
            state[action.payload] = {
                ...currPlayer,
                hand: {
                    ...hand,
                    cards: [cards[0]],
                    cardNumVals: [cardNumVals[0]],
                    cardUrlVals: [cardUrlVals[0]],
                    cardSum: cardNumVals[0],
                },
                splitHand: {
                    ...hand,
                    cards: [cards[1]],
                    cardNumVals: [cardNumVals[1]],
                    cardUrlVals: [cardUrlVals[1]],
                    cardSum: cardNumVals[1],
                },
                splitBet: currBet,
                isPlayerSplit: true,
                bank: bank - currBet,
            }
        },
        updateTokens: (state, action: PayloadAction<TokensProps>) => {
            const currType = action.payload.type
            const currIndex = action.payload.index
            const currPlayer = state[currIndex];
            const { bank, currBet, minBet } = currPlayer
            if (currType === 'all-tokens') {
                state[currIndex] = {
                    ...state[currIndex],
                    bank: 0,
                    currBet: currBet + bank,
                    currTokens: updatePlayerTokens(0)
                }
            } else {
                const currBank = bank + currBet - minBet
                state[currIndex] = {
                    ...state[currIndex],
                    bank: currBank,
                    currBet: minBet,
                    currTokens: updatePlayerTokens(currBank)
                }
            }
        },
        clickTokenUpdate: (state, action: PayloadAction<TokenClickProps>) => {
            const input = action.payload.number
            const currIndex = action.payload.index
            const currPlayer = state[currIndex];
            const { bank, currBet } = currPlayer
            state[currIndex] = {
                ...state[currIndex],
                currBet: currBet + input,
                bank: bank - input,
                currTokens: updatePlayerTokens(bank - input)
            }
        },
        updateWinOrLose: (state, action: PayloadAction<PlayerAndDealerProps>) => {
            const { player: currPlayer, dealerObj: currDealer } = action.payload;
            const index = state.findIndex(player => player.name === currPlayer.name);
            const { roundResults } = currPlayer;
            const splitOrMainStr = currPlayer.currBet !== 0 ? 'main' : 'split'
            const winOrLoseStr = playerWonOrLostFunc(currPlayer, currDealer, splitOrMainStr);
            const newRoundResults: RoundResultsProps = splitOrMainStr === 'main'
                ? { ...roundResults, mainResults: winOrLoseStr }
                : { ...roundResults, splitResults: winOrLoseStr }
            const isRoundWonChanged = winOrLoseStr === 'Won' ? currPlayer.roundsWon + 1 : currPlayer.roundsWon;
            state[index] = {
                ...state[index],
                roundResults: newRoundResults,
                roundsWon: isRoundWonChanged,
            };
        },
        removePlayer: (state, action: PayloadAction<PlayerNameProps>) => {
            const index = state.findIndex(player => player.name === action.payload.name);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
        removePlayers: (state, action: PayloadAction<PlayerNameProps[]>) => {
            const playerNamesToRemove = action.payload.map(player => player.name);
            return state.filter(player => !playerNamesToRemove.includes(player.name));
        },

        resetPlayersArr: (state) => {
            state.splice(0, state.length, ...initialState);
        },
        reverseCurrSplitHand: (state, action: PayloadAction<number>) => {
            const updatedState = state.map((player, index) => {
                if (index === action.payload) {
                    return {
                        ...player,
                        hand: player.splitHand,
                        splitHand: player.hand,
                        isDoubleDown: false
                    };
                }
                return player;
            });
            return updatedState;
        },

        reverseAllSplitHands: (state) => {
            const allPlayersWithSplitHands = state.map(x => {
                if (x.splitHand.cards.length > 0) {
                    return {
                        ...x,
                        hand: x.splitHand,
                        splitHand: x.hand,
                    }
                } else return x
            })
            return allPlayersWithSplitHands;
        },
        updateAllPlayers: (state) => {
            const inActivePlayers = state.filter(player => player.bank < 5)
            const updatedActivePlayers = state.filter(player => player.bank >= 5).map((player: PlayerInterface) => {
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
                    currBet: player.minBet <= player.bank
                        ? player.minBet
                        : 5,
                    minBet: player.minBet <= player.bank
                        ? player.minBet
                        : 5,
                    bank: player.minBet <= player.bank
                        ? player.bank - player.minBet
                        : player.bank - 5,
                    insuranceBet: 0,
                    wonInsuranceRound: false,
                    splitBet: 0,
                    isPlayerSplit: false,
                    isDoubleDown: false,
                    roundResults: {
                        mainResults: '',
                        splitResults: '',
                        isComplete: false,
                    },
                    beginningRoundBank: player.bank,
                };
            });
            return [...inActivePlayers, ...updatedActivePlayers]
        },
        updateHandResults: (state, action: PayloadAction<PlayerInterface>) => {
            const playerIndex = state.findIndex(player => player.name === action.payload.name)
            const player = state[playerIndex]
            const { currBet, splitBet, bank, roundResults, splitHand } = player
            const { splitResults, mainResults } = roundResults
            const { cardSum, cardUrlVals } = player.hand
            const playerHasBJ = cardSum === 21 && cardUrlVals.length === 2 ? true : false
            const isRoundComplete = splitHand.cards.length === 0 ? true : false
            const newRoundResObj = { ...roundResults, isComplete: isRoundComplete }
            let newBank = 0
            if (currBet !== 0) {
                if (mainResults === 'Won') newBank = playerHasBJ
                    ? Math.ceil(bank + (currBet * 2.5))
                    : bank + (currBet * 2)
                else if (mainResults === 'Push') newBank = bank + currBet
                else newBank = bank
                state[playerIndex] = {
                    ...player,
                    bank: newBank,
                    currBet: 0,
                    roundResults: newRoundResObj,
                }
            } else if (splitBet && player.wonInsuranceRound) {
                state[playerIndex] = {
                    ...player,
                    bank: player.bank + splitBet,
                    splitBet: 0,
                    roundResults: newRoundResObj,
                }
            } else {
                if (splitResults === 'Won') newBank = playerHasBJ
                    ? Math.ceil(bank + (splitBet * 2.5))
                    : bank + (splitBet * 2)
                else if (splitResults === 'Push') newBank = bank + splitBet
                else newBank = bank
                state[playerIndex] = {
                    ...player,
                    bank: newBank,
                    splitBet: 0,
                    roundResults: newRoundResObj,
                }
            }
        },
    },
});

export const { addPlayer, updatePlayer, removePlayer, resetPlayersArr, updateAllPlayers, removePlayers, reverseAllSplitHands, reverseCurrSplitHand, updatePlayerInsurance, updateHandResults, makeDoubleDownFalse, resetAfterInsuranceWin, updateWinOrLose, updateDoubleDownHand, splitPlayerHand, updateTokens, clickTokenUpdate } = playerArrSlice.actions;

export default playerArrSlice.reducer;
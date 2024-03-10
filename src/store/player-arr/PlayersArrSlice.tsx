import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { PlayerInterface } from "../../models/PlayerProps";

// const initialState: PlayerInterface[] = [];
// clubs (♣), diamonds (♦), hearts (♥), and spades (♠).x

// const initialState: PlayerInterface[] = []

const initialState: PlayerInterface[] = [

    {
        "name": "James",
        "hand": {
            "cards": [
                "A♥",
                "4♠",



            ],
            "cardUrlVals": [
                "AH",
                "4S",



            ],
            "cardNumVals": [
                11,
                4,




            ],
            "cardSum": 15,
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
                "A♥",
                "A♠"
            ],
            "cardUrlVals": [
                "AH",
                "AS"
            ],
            "cardNumVals": [
                11,
                1,
            ],
            "cardSum": 12,
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
        // updateAllPlayers: (_, action: PayloadAction<PlayerInterface[]>) => {
        //     const activePlayers = action.payload.map(player => player.bank >= 5)
        //     const inActivePlayers = action.payload.map(player => player.bank < 5)
        //     return action.payload;
        // },
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
    },
});

export const { addPlayer, updatePlayer, removePlayer, resetPlayersArr, updateAllPlayers, removePlayers, reverseAllSplitHands, reverseCurrSplitHand } = playerArrSlice.actions;

export default playerArrSlice.reducer;
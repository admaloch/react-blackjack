import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlayerInterface } from "../../models/PlayerProps";

// const initialState: PlayerInterface[] = [];
// clubs (♣), diamonds (♦), hearts (♥), and spades (♠).x

// const initialState: PlayerInterface[] = []

const initialState: PlayerInterface[] = [
    {
        "name": "Dave",
        "hand": {
            "cards": [
                "10♥",
                "10♠"
            ],
            "cardUrlVals": [
                "10H",
                "10S"
            ],
            "cardNumVals": [
                10,
                10
            ],
            "cardSum": 20,
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
    {
        "name": "James",
        "hand": {
            "cards": [
                "5♥",
                "10♠"
            ],
            "cardUrlVals": [
                "5H",
                "10S"
            ],
            "cardNumVals": [
                5,
                10
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
    }
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

export const { addPlayer, updatePlayer, removePlayer, resetPlayersArr, updateAllPlayers, removePlayers } = playerArrSlice.actions;

export default playerArrSlice.reducer;
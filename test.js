const normalState = {
    "dealerObj": {
        "name": "Dealer",
        "hand": {
            "cards": [],
            "cardUrlVals": [],
            "cardNumVals": [],
            "cardSum": 0,
            "isBlackjack": false
        }
    },
    "playersArr": [
        {
            "name": "Dave",
            "hand": {
                "cards": [],
                "cardUrlVals": [],
                "cardNumVals": [],
                "cardSum": 0,
                "isBlackjack": false
            },
            "splitHand": {
                "cards": [],
                "cardUrlVals": [],
                "cardNumVals": [],
                "cardSum": 0,
                "isBlackjack": false
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
                "isComplete": false
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
                "cards": [],
                "cardUrlVals": [],
                "cardNumVals": [],
                "cardSum": 0,
                "isBlackjack": false
            },
            "splitHand": {
                "cards": [],
                "cardUrlVals": [],
                "cardNumVals": [],
                "cardSum": 0,
                "isBlackjack": false
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
                "isComplete": false
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
    ],
    "deck": [
        {
            "card": "2",
            "value": 2,
            "suits": [
                2,
                2,
                2,
                2
            ]
        },
        {
            "card": "3",
            "value": 3,
            "suits": [
                2,
                2,
                2,
                2
            ]
        },
        {
            "card": "4",
            "value": 4,
            "suits": [
                2,
                2,
                2,
                2
            ]
        },
        {
            "card": "5",
            "value": 5,
            "suits": [
                2,
                2,
                2,
                2
            ]
        },
        {
            "card": "6",
            "value": 6,
            "suits": [
                2,
                2,
                2,
                2
            ]
        },
        {
            "card": "7",
            "value": 7,
            "suits": [
                2,
                2,
                2,
                2
            ]
        },
        {
            "card": "8",
            "value": 8,
            "suits": [
                2,
                2,
                2,
                2
            ]
        },
        {
            "card": "9",
            "value": 9,
            "suits": [
                2,
                2,
                2,
                2
            ]
        },
        {
            "card": "0",
            "value": 10,
            "suits": [
                2,
                2,
                2,
                2
            ]
        },
        {
            "card": "J",
            "value": 10,
            "suits": [
                2,
                2,
                2,
                2
            ]
        },
        {
            "card": "Q",
            "value": 10,
            "suits": [
                2,
                2,
                2,
                2
            ]
        },
        {
            "card": "K",
            "value": 10,
            "suits": [
                2,
                2,
                2,
                2
            ]
        },
        {
            "card": "A",
            "value": 11,
            "suits": [
                2,
                2,
                2,
                2
            ]
        }
    ],
    "gameData": {
        "roundsPlayed": 1,
        "isGameActive": true,
        "isGameIntro": false,
        "isAddPlayersRound": false,
        "isBetRoundActive": true,
        "isPlayerRoundActive": false,
        "isDealerCardRevealed": false,
        "isDealerDrawing": false,
        "isInsuranceRoundComplete": false,
        "isDealerRoundActive": false,
        "isMainResultsActive": false,
        "isSplitResultsActive": false,
        "isRoundActive": false
    },
    "inactivePlayers": []
}



const revertState = {
    "dealerObj": {
        "hand": {
            "cards": [],
            "cardUrlVals": [],
            "cardNumVals": [],
            "cardSum": 0,
            "isBlackjack": false
        },
        "name": "Dealer"
    },
    "playersArr": [
        {
            "bank": 330,
            "beginningRoundBank": 335,
            "currBet": 5,
            "currTokens": [
                1,
                5,
                25,
                50,
                100
            ],
            "hand": {
                "cards": [],
                "cardUrlVals": [],
                "cardNumVals": [],
                "cardSum": 0,
                "isBlackjack": false
            },
            "insuranceBet": 0,
            "isDoubleDown": false,
            "isPlayerSplit": false,
            "minBet": 5,
            "name": "Dave",
            "playerLeftTable": false,
            "roundResults": {
                "mainResults": "",
                "splitResults": "",
                "isComplete": false
            },
            "roundsWon": 0,
            "splitBet": 0,
            "splitHand": {
                "cards": [],
                "cardUrlVals": [],
                "cardNumVals": [],
                "cardSum": 0,
                "isBlackjack": false
            },
            "wonInsuranceRound": false
        },
        {
            "bank": 488,
            "beginningRoundBank": 493,
            "currBet": 5,
            "currTokens": [
                1,
                5,
                25,
                50,
                100
            ],
            "hand": {
                "cards": [],
                "cardUrlVals": [],
                "cardNumVals": [],
                "cardSum": 0,
                "isBlackjack": false
            },
            "insuranceBet": 0,
            "isDoubleDown": false,
            "isPlayerSplit": false,
            "minBet": 5,
            "name": "James",
            "playerLeftTable": false,
            "roundResults": {
                "mainResults": "",
                "splitResults": "",
                "isComplete": false
            },
            "roundsWon": 1,
            "splitBet": 0,
            "splitHand": {
                "cards": [],
                "cardUrlVals": [],
                "cardNumVals": [],
                "cardSum": 0,
                "isBlackjack": false
            },
            "wonInsuranceRound": false
        }
    ],
    "deck": [
        {
            "card": "2",
            "suits": [
                2,
                2,
                2,
                1
            ],
            "value": 2
        },
        {
            "card": "3",
            "suits": [
                2,
                2,
                2,
                2
            ],
            "value": 3
        },
        {
            "card": "4",
            "suits": [
                2,
                2,
                2,
                2
            ],
            "value": 4
        },
        {
            "card": "5",
            "suits": [
                1,
                1,
                1,
                2
            ],
            "value": 5
        },
        {
            "card": "6",
            "suits": [
                2,
                2,
                1,
                1
            ],
            "value": 6
        },
        {
            "card": "7",
            "suits": [
                2,
                2,
                2,
                1
            ],
            "value": 7
        },
        {
            "card": "8",
            "suits": [
                2,
                2,
                2,
                1
            ],
            "value": 8
        },
        {
            "card": "9",
            "suits": [
                1,
                0,
                2,
                0
            ],
            "value": 9
        },
        {
            "card": "0",
            "suits": [
                1,
                2,
                2,
                2
            ],
            "value": 10
        },
        {
            "card": "J",
            "suits": [
                0,
                2,
                1,
                2
            ],
            "value": 10
        },
        {
            "card": "Q",
            "suits": [
                2,
                1,
                2,
                0
            ],
            "value": 10
        },
        {
            "card": "K",
            "suits": [
                0,
                1,
                2,
                2
            ],
            "value": 10
        },
        {
            "card": "A",
            "suits": [
                0,
                1,
                2,
                1
            ],
            "value": 11
        }
    ],
    "gameData": {
        "roundsPlayed": 1,
        "isGameActive": true,
        "isGameIntro": false,
        "isAddPlayersRound": false,
        "isBetRoundActive": true,
        "isPlayerRoundActive": false,
        "isDealerCardRevealed": false,
        "isDealerDrawing": false,
        "isInsuranceRoundComplete": false,
        "isDealerRoundActive": false,
        "isMainResultsActive": false,
        "isSplitResultsActive": false,
        "isRoundActive": false
    },
    "inactivePlayers": []
}
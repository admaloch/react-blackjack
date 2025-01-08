const newState ={
    "dealerObj": {
        "name": "Dealer",
        "hand": {
            "cards": [
                "6♥",
                "9♠"
            ],
            "cardUrlVals": [
                "6H",
                "9S"
            ],
            "cardNumVals": [
                6,
                9
            ],
            "cardSum": 15,
            "isBlackjack": false
        }
    },
    "playersArr": [
        {
            "name": "Dave",
            "hand": {
                "cards": [
                    "8♣",
                    "7♣"
                ],
                "cardUrlVals": [
                    "8S",
                    "7S"
                ],
                "cardNumVals": [
                    8,
                    7
                ],
                "cardSum": 15,
                "isBlackjack": false
            },
            "splitHand": {
                "cards": [],
                "cardUrlVals": [],
                "cardNumVals": [],
                "cardSum": 0,
                "isBlackjack": false
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
                1,
                2
            ]
        },
        {
            "card": "7",
            "value": 7,
            "suits": [
                2,
                1,
                2,
                2
            ]
        },
        {
            "card": "8",
            "value": 8,
            "suits": [
                2,
                1,
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
                1
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
        "isBetRoundActive": false,
        "isPlayerRoundActive": true,
        "isDealerCardRevealed": false,
        "isDealerDrawing": false,
        "isInsuranceRoundComplete": false,
        "isDealerRoundActive": false,
        "isMainResultsActive": false,
        "isSplitResultsActive": false,
        "isRoundActive": true
    },
    "inactivePlayers": [],
    "api": {
        "queries": {},
        "mutations": {
            "RCEPDNF6UBMIBRq-HJd1R": {
                "requestId": "RCEPDNF6UBMIBRq-HJd1R",
                "status": "fulfilled",
                "endpointName": "createGameSession",
                "startedTimeStamp": 1736363637743,
                "data": {
                    "message": "New session created with ID: 677ece751affb4a31a8c3eae",
                    "gameSession": {
                        "dealerObj": {
                            "hand": {
                                "cardNumVals": [],
                                "cardSum": 0,
                                "cardUrlVals": [],
                                "cards": [],
                                "isBlackjack": false,
                                "_id": "677ece751affb4a31a8c3eb0"
                            },
                            "name": "Dealer",
                            "_id": "677ece751affb4a31a8c3eaf"
                        },
                        "deck": [
                            {
                                "card": "2",
                                "suits": [
                                    2,
                                    2,
                                    2,
                                    2
                                ],
                                "value": 2,
                                "_id": "677ece751affb4a31a8c3eb1"
                            },
                            {
                                "card": "3",
                                "suits": [
                                    2,
                                    2,
                                    2,
                                    2
                                ],
                                "value": 3,
                                "_id": "677ece751affb4a31a8c3eb2"
                            },
                            {
                                "card": "4",
                                "suits": [
                                    2,
                                    2,
                                    2,
                                    2
                                ],
                                "value": 4,
                                "_id": "677ece751affb4a31a8c3eb3"
                            },
                            {
                                "card": "5",
                                "suits": [
                                    2,
                                    2,
                                    2,
                                    2
                                ],
                                "value": 5,
                                "_id": "677ece751affb4a31a8c3eb4"
                            },
                            {
                                "card": "6",
                                "suits": [
                                    2,
                                    2,
                                    2,
                                    2
                                ],
                                "value": 6,
                                "_id": "677ece751affb4a31a8c3eb5"
                            },
                            {
                                "card": "7",
                                "suits": [
                                    2,
                                    2,
                                    2,
                                    2
                                ],
                                "value": 7,
                                "_id": "677ece751affb4a31a8c3eb6"
                            },
                            {
                                "card": "8",
                                "suits": [
                                    2,
                                    2,
                                    2,
                                    2
                                ],
                                "value": 8,
                                "_id": "677ece751affb4a31a8c3eb7"
                            },
                            {
                                "card": "9",
                                "suits": [
                                    2,
                                    2,
                                    2,
                                    2
                                ],
                                "value": 9,
                                "_id": "677ece751affb4a31a8c3eb8"
                            },
                            {
                                "card": "0",
                                "suits": [
                                    2,
                                    2,
                                    2,
                                    2
                                ],
                                "value": 10,
                                "_id": "677ece751affb4a31a8c3eb9"
                            },
                            {
                                "card": "J",
                                "suits": [
                                    2,
                                    2,
                                    2,
                                    2
                                ],
                                "value": 10,
                                "_id": "677ece751affb4a31a8c3eba"
                            },
                            {
                                "card": "Q",
                                "suits": [
                                    2,
                                    2,
                                    2,
                                    2
                                ],
                                "value": 10,
                                "_id": "677ece751affb4a31a8c3ebb"
                            },
                            {
                                "card": "K",
                                "suits": [
                                    2,
                                    2,
                                    2,
                                    2
                                ],
                                "value": 10,
                                "_id": "677ece751affb4a31a8c3ebc"
                            },
                            {
                                "card": "A",
                                "suits": [
                                    2,
                                    2,
                                    2,
                                    2
                                ],
                                "value": 11,
                                "_id": "677ece751affb4a31a8c3ebd"
                            }
                        ],
                        "gameData": {
                            "isAddPlayersRound": true,
                            "isBetRoundActive": false,
                            "isDealerCardRevealed": false,
                            "isDealerDrawing": false,
                            "isDealerRoundActive": false,
                            "isGameActive": true,
                            "isGameIntro": false,
                            "isInsuranceRoundComplete": false,
                            "isMainResultsActive": false,
                            "isPlayerRoundActive": false,
                            "isRoundActive": false,
                            "isSplitResultsActive": false,
                            "roundsPlayed": 1,
                            "_id": "677ece751affb4a31a8c3ebe"
                        },
                        "playersArr": [
                            {
                                "bank": 995,
                                "beginningRoundBank": 1000,
                                "currBet": 5,
                                "currTokens": [
                                    1,
                                    5,
                                    25,
                                    50,
                                    100,
                                    500
                                ],
                                "hand": {
                                    "cardNumVals": [],
                                    "cardSum": 0,
                                    "cardUrlVals": [],
                                    "cards": [],
                                    "isBlackjack": false,
                                    "_id": "677ece751affb4a31a8c3ec0"
                                },
                                "insuranceBet": 0,
                                "isDoubleDown": false,
                                "isPlayerSplit": false,
                                "minBet": 5,
                                "name": "Dave",
                                "playerLeftTable": false,
                                "roundResults": {
                                    "isComplete": false,
                                    "mainResults": "",
                                    "splitResults": "",
                                    "_id": "677ece751affb4a31a8c3ec1"
                                },
                                "roundsWon": 0,
                                "splitBet": 0,
                                "splitHand": {
                                    "cardNumVals": [],
                                    "cardSum": 0,
                                    "cardUrlVals": [],
                                    "cards": [],
                                    "isBlackjack": false,
                                    "_id": "677ece751affb4a31a8c3ec2"
                                },
                                "wonInsuranceRound": false,
                                "_id": "677ece751affb4a31a8c3ebf"
                            }
                        ],
                        "_id": "677ece751affb4a31a8c3eae",
                        "inactivePlayers": [],
                        "__v": 0
                    }
                },
                "fulfilledTimeStamp": 1736363637863
            },
            "mi968a66fbHqyAKdGNaHj": {
                "requestId": "mi968a66fbHqyAKdGNaHj",
                "status": "fulfilled",
                "endpointName": "updateGameSession",
                "startedTimeStamp": 1736363651940,
                "data": {
                    "message": "Game session #677ece751affb4a31a8c3eae updated",
                    "gameSession": {
                        "_id": "677ece751affb4a31a8c3eae",
                        "dealerObj": {
                            "hand": {
                                "cardNumVals": [],
                                "cardSum": 0,
                                "cardUrlVals": [],
                                "cards": [],
                                "isBlackjack": false,
                                "_id": "677ece841affb4a31a8c3ed4"
                            },
                            "name": "Dealer",
                            "_id": "677ece841affb4a31a8c3ed3"
                        },
                        "deck": [
                            {
                                "card": "2",
                                "suits": [
                                    2,
                                    2,
                                    2,
                                    2
                                ],
                                "value": 2,
                                "_id": "677ece841affb4a31a8c3ed5"
                            },
                            {
                                "card": "3",
                                "suits": [
                                    2,
                                    2,
                                    2,
                                    2
                                ],
                                "value": 3,
                                "_id": "677ece841affb4a31a8c3ed6"
                            },
                            {
                                "card": "4",
                                "suits": [
                                    2,
                                    2,
                                    2,
                                    2
                                ],
                                "value": 4,
                                "_id": "677ece841affb4a31a8c3ed7"
                            },
                            {
                                "card": "5",
                                "suits": [
                                    2,
                                    2,
                                    2,
                                    2
                                ],
                                "value": 5,
                                "_id": "677ece841affb4a31a8c3ed8"
                            },
                            {
                                "card": "6",
                                "suits": [
                                    2,
                                    2,
                                    2,
                                    2
                                ],
                                "value": 6,
                                "_id": "677ece841affb4a31a8c3ed9"
                            },
                            {
                                "card": "7",
                                "suits": [
                                    2,
                                    2,
                                    2,
                                    2
                                ],
                                "value": 7,
                                "_id": "677ece841affb4a31a8c3eda"
                            },
                            {
                                "card": "8",
                                "suits": [
                                    2,
                                    2,
                                    2,
                                    2
                                ],
                                "value": 8,
                                "_id": "677ece841affb4a31a8c3edb"
                            },
                            {
                                "card": "9",
                                "suits": [
                                    2,
                                    2,
                                    2,
                                    2
                                ],
                                "value": 9,
                                "_id": "677ece841affb4a31a8c3edc"
                            },
                            {
                                "card": "0",
                                "suits": [
                                    2,
                                    2,
                                    2,
                                    2
                                ],
                                "value": 10,
                                "_id": "677ece841affb4a31a8c3edd"
                            },
                            {
                                "card": "J",
                                "suits": [
                                    2,
                                    2,
                                    2,
                                    2
                                ],
                                "value": 10,
                                "_id": "677ece841affb4a31a8c3ede"
                            },
                            {
                                "card": "Q",
                                "suits": [
                                    2,
                                    2,
                                    2,
                                    2
                                ],
                                "value": 10,
                                "_id": "677ece841affb4a31a8c3edf"
                            },
                            {
                                "card": "K",
                                "suits": [
                                    2,
                                    2,
                                    2,
                                    2
                                ],
                                "value": 10,
                                "_id": "677ece841affb4a31a8c3ee0"
                            },
                            {
                                "card": "A",
                                "suits": [
                                    2,
                                    2,
                                    2,
                                    2
                                ],
                                "value": 11,
                                "_id": "677ece841affb4a31a8c3ee1"
                            }
                        ],
                        "gameData": {
                            "isAddPlayersRound": false,
                            "isBetRoundActive": true,
                            "isDealerCardRevealed": false,
                            "isDealerDrawing": false,
                            "isDealerRoundActive": false,
                            "isGameActive": true,
                            "isGameIntro": false,
                            "isInsuranceRoundComplete": false,
                            "isMainResultsActive": false,
                            "isPlayerRoundActive": false,
                            "isRoundActive": false,
                            "isSplitResultsActive": false,
                            "roundsPlayed": 1,
                            "_id": "677ece841affb4a31a8c3ee2"
                        },
                        "playersArr": [
                            {
                                "bank": 900,
                                "beginningRoundBank": 1000,
                                "currBet": 100,
                                "currTokens": [
                                    1,
                                    5,
                                    25,
                                    50,
                                    100,
                                    500
                                ],
                                "hand": {
                                    "cardNumVals": [],
                                    "cardSum": 0,
                                    "cardUrlVals": [],
                                    "cards": [],
                                    "isBlackjack": false,
                                    "_id": "677ece841affb4a31a8c3ee4"
                                },
                                "insuranceBet": 0,
                                "isDoubleDown": false,
                                "isPlayerSplit": false,
                                "minBet": 5,
                                "name": "Dave",
                                "playerLeftTable": false,
                                "roundResults": {
                                    "isComplete": false,
                                    "mainResults": "",
                                    "splitResults": "",
                                    "_id": "677ece841affb4a31a8c3ee5"
                                },
                                "roundsWon": 0,
                                "splitBet": 0,
                                "splitHand": {
                                    "cardNumVals": [],
                                    "cardSum": 0,
                                    "cardUrlVals": [],
                                    "cards": [],
                                    "isBlackjack": false,
                                    "_id": "677ece841affb4a31a8c3ee6"
                                },
                                "wonInsuranceRound": false,
                                "_id": "677ece841affb4a31a8c3ee3"
                            }
                        ],
                        "inactivePlayers": [],
                        "__v": 1
                    }
                },
                "fulfilledTimeStamp": 1736363652158
            }
        },
        "provided": {},
        "subscriptions": {},
        "config": {
            "online": true,
            "focused": true,
            "middlewareRegistered": true,
            "refetchOnFocus": false,
            "refetchOnReconnect": false,
            "refetchOnMountOrArgChange": false,
            "keepUnusedDataFor": 60,
            "reducerPath": "api",
            "invalidationBehavior": "delayed"
        }
    }
}
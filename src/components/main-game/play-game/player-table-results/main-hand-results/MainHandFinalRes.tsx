
import { useEffect, useState } from "react";
import MainHandItems from "./MainHandItems";
import { PlayerInterfaceProps } from "../../../../../models/PlayerProps";
import { delay } from "../../../../../utils/Utility";
import { updatePlayer } from "../../../../../store/player-arr/playersArrSlice";
import { useDispatch, useSelector } from "react-redux";
import { beginSplitRound, endRoundResults } from "../../../../../store/game-data/GameDataSlice";
import { RootState } from "../../../../../store/store";
export interface FinalResultsState {
    mainResults: string;
    moneyWon: number;
    moneyLost: number;
    isComplete: boolean;
}

export default function FinalPlayerResult({ player }: PlayerInterfaceProps) {

    const [finalResultsState, setFinalResultsState] = useState<FinalResultsState>({
        mainResults: '',
        moneyWon: 0,
        moneyLost: 0,
        isComplete: false,
    })

    const dispatch = useDispatch()


    const updateFinalResults = (results: FinalResultsState) => {
        setFinalResultsState(results)
    }

    useEffect(() => {
        async function updateHandsWithResults() {
            const { hand, wonInsuranceRound, bank, currBet } = player
            const { cardSum, cardUrlVals } = hand
            const { mainResults, isComplete } = finalResultsState
            const playerHasBJ = cardSum === 21 && cardUrlVals.length === 2 ? true : false

            if (mainResults && !wonInsuranceRound && !isComplete) {
                await delay(2000)

                let newBank = 0
                let earnings = 0
                let loss = 0
                if (mainResults === 'Won') {
                    newBank = playerHasBJ ? bank + (currBet * 2.5) : bank + (currBet * 2)
                    earnings = newBank - bank
                } else if (mainResults === 'Push') {
                    newBank = bank + currBet
                } else {
                    newBank = bank
                    loss = currBet
                }
                dispatch(updatePlayer({ ...player, bank: newBank, currBet: 0 }))
                setFinalResultsState((prevState) => {
                    return { ...prevState, moneyWon: earnings, moneyLost: loss, isComplete: true }
                })
                dispatch(endRoundResults())

            }
        }
        updateHandsWithResults()
    }, [finalResultsState])




    return (
        <>
            <MainHandItems
                player={player}
                updateFinalResults={updateFinalResults}
                finalResultsState={finalResultsState}
            />
        </>

    )
}

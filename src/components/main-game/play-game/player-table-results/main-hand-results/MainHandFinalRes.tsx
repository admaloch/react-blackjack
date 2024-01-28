
import { useEffect, useState } from "react";
import MainHandItems from "./MainHandItems";
import { PlayerInterfaceProps } from "../../../../../models/PlayerProps";
import { delay } from "../../../../../utils/Utility";
import { updatePlayer } from "../../../../../store/player-arr/playersArrSlice";
import { useDispatch } from "react-redux";
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

    const updateFinalResults = (results: FinalResultsState) => {
        setFinalResultsState(results)
    }

    const dispatch = useDispatch()

    const { hand, wonInsuranceRound, bank, currBet } = player
    const { cardSum, cardUrlVals } = hand
    const { mainResults, isComplete } = finalResultsState
    const playerHasBJ = cardSum === 21 && cardUrlVals.length === 2 ? true : false

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




    useEffect(() => {
        async function updateHandsWithResults() {

            if (mainResults && !wonInsuranceRound && !isComplete) {
                console.log('this ran')
                await delay(1000)

                dispatch(updatePlayer({ ...player, bank: newBank, currBet: 0 }))
                setFinalResultsState((prevState) => {
                    return { ...prevState, moneyWon: earnings, moneyLost: loss, isComplete: true }
                })
            }
        }
        updateHandsWithResults()
    }, [mainResults, wonInsuranceRound, isComplete, dispatch, earnings, loss, newBank, player])

    useEffect(() => {
        console.log(player)
    }, [player])


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

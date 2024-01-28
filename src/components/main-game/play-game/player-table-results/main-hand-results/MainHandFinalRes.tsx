
import { useEffect, useState } from "react";
import MainHandItems from "./MainHandItems";
import { PlayerInterfaceProps } from "../../../../../models/PlayerProps";
import { delay } from "../../../../../utils/Utility";

export interface FinalResultsState {
    mainResults: string;
    bankChange: number;
}

export default function FinalPlayerResult({ player }: PlayerInterfaceProps) {

    const [finalResultsState, setFinalResultsState] = useState<FinalResultsState>({
        mainResults: '',
        bankChange: 0,
    })

    const updateFinalResults = (results: FinalResultsState) => {
        setFinalResultsState(results)
    }

    // useEffect(() => {

    //     async function updateHandsWithResults() {

    //         if (finalResultsState.mainResults && !player.wonInsuranceRound) {
    //             await delay(1000)
    //             finalResultsState.mainResults
    //         }
    //     }
    // }, [])




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

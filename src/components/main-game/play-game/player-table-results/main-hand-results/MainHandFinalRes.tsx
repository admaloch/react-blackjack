
import { useState } from "react";
import MainHandItems from "./MainHandItems";
import { PlayerInterfaceProps } from "../../../../../models/PlayerProps";

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

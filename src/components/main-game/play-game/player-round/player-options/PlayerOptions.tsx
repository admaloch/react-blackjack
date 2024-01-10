import ExitTable from "../ExitTable";
import DoubleDown from "./DoubleDown";
import Stand from "./Stand";
import DrawCards from "./DrawCards";
import Split from "./Split";
import { RootState } from "../../../../../store/store";
import { useSelector } from 'react-redux';
import { useRef } from "react";

interface PlayerIconsProps {
    playerIndex: number;
    endRound: () => void;
}



export default function PlayerOptions({ playerIndex, endRound }: PlayerIconsProps) {
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const currPlayer = playersArr[playerIndex]
    const drawCardsRef = useRef(null);

    return (
        <>
            <div className="current-options">
                <DoubleDown playerIndex={playerIndex} />

                <Split drawCardsRef={drawCardsRef} playerIndex={playerIndex} />


            </div>
            <Stand endRound={endRound} />
            <DrawCards drawCardsRef={drawCardsRef} playerIndex={playerIndex} />
            <ExitTable />
        </>
    )
}

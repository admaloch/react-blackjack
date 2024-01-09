import ExitTable from "../ExitTable";
import DoubleDown from "./DoubleDown";
import Stand from "./Stand";
import DrawCards from "./DrawCards";
import Split from "./Split";
import { RootState } from "../../../../../store/store";
import { useSelector } from 'react-redux';

interface PlayerIconsProps {
    playerIndex: number;
    endRound: () => void;
}



export default function PlayerOptions({ playerIndex, endRound }: PlayerIconsProps) {
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const currPlayer = playersArr[playerIndex]

    return (
        <>
            <div className="current-options">
                <DoubleDown playerIndex={playerIndex} />
                {!currPlayer.isPlayerSplit &&
                    <Split playerIndex={playerIndex} />
                }

            </div>
            <Stand endRound={endRound} />
            <DrawCards playerIndex={playerIndex} />
            <ExitTable />
        </>
    )
}

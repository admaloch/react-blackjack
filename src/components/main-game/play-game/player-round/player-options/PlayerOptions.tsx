import ExitTable from "./ExitTable";
import DoubleDown from "./DoubleDown";
import Stand from "./Stand";
import DrawCards from "./DrawCards";
import Split from "./Split";
import Insurance from "./Insurance";


interface PlayerIconsProps {
    playerIndex: number;
    endRound: () => void;
}

export default function PlayerOptions({ playerIndex, endRound }: PlayerIconsProps) {

    return (
        <>
            <div className="current-options">
                <DoubleDown playerIndex={playerIndex} />
                <Split playerIndex={playerIndex} />
                <Insurance playerIndex={playerIndex} />
            </div>
            <Stand playerIndex={playerIndex} endRound={endRound} />
            <DrawCards playerIndex={playerIndex} />
            <ExitTable playerIndex={playerIndex} />
        </>
    )
}

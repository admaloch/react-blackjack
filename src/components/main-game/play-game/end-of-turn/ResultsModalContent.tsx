import ResultsModalHeader from "./ResultsModalHeader";
import ResultsModalStats from "./ResultsModalStats";
import ResultsModalBtn from "./ResultsModalBtn";

interface ResultsModalContentsProps {
    playerIndex: number;
    startRound: () => void;
    changeToNextPlayer: () => void;
}

export default function ResultsModalContents({ playerIndex, startRound, changeToNextPlayer }: ResultsModalContentsProps) {


    return (

        <div className="end-turn-modal">
            <ResultsModalHeader playerIndex={playerIndex} />
            <ResultsModalStats playerIndex={playerIndex} />
            <ResultsModalBtn
                playerIndex={playerIndex}
                startRound={startRound}
                changeToNextPlayer={changeToNextPlayer}
            />
        </div>

    )
}

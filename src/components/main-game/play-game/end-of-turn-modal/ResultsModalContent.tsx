import ResultsModalHeader from "./ResultsModalHeader";
import ResultsModalStats from "./ResultsModalStats";
import ResultsModalBtn from "./ResultsModalBtn";
import ModalTimer from "../../../modal-timer/ModalTimer";

interface ResultsModalContentsProps {
    playerIndex: number;
    endResultsBtnHandler: () => void;
}

export default function ResultsModalContents({ playerIndex, endResultsBtnHandler }: ResultsModalContentsProps) {

    return (
        <div className="end-turn-modal">
            <ResultsModalHeader playerIndex={playerIndex} />
            <ResultsModalStats playerIndex={playerIndex} />
            {/* <ResultsModalBtn
                playerIndex={playerIndex}
                endResultsBtnHandler={endResultsBtnHandler}
            /> */}
            <ModalTimer timeout={2000} onTimeout={endResultsBtnHandler} />
        </div>
    )
}

import ResultsModalHeader from "./ResultsModalHeader";
import ResultsModalStats from "./ResultsModalStats";
import ModalTimer from "../../../modal-timer/ModalTimer";
import { useRef } from "react";

interface ResultsModalContentsProps {
    playerIndex: number;
    endResultsBtnHandler: () => void;
}

export default function ResultsModalContents({ playerIndex, endResultsBtnHandler }: ResultsModalContentsProps) {
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const handleClickButtonRef = () => {
        if (buttonRef.current) {
            buttonRef.current.click();
        }
    };

    return (
        <div className="end-turn-modal">
            <ResultsModalHeader playerIndex={playerIndex} />
            <ResultsModalStats playerIndex={playerIndex} />
            <button className="hidden-btn" ref={buttonRef} onClick={endResultsBtnHandler}>Click hear</button>
            <ModalTimer timeout={1500} onTimeout={handleClickButtonRef} />
        </div>
    );
}

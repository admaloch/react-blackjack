import { PlayerInterface } from "../../../../models/PlayerProps";
import ModalTimer from "../../../modal-timer/ModalTimer";
import { useRef } from "react";
import ExitTablePlayerInfo from "./ExitTablePlayerInfo";
import ExitTableStatus from "./ExitTableStatus";

interface ExitTableContentProps {
    playerIndex: number;
    playerWhoLeft: PlayerInterface;
    closeModal: () => void;
}

export default function ExitTableContent({ playerIndex, playerWhoLeft, closeModal }: ExitTableContentProps) {
    
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const handleClickButtonRef = () => {
        if (buttonRef.current) {
            buttonRef.current.click();
        }
    };

    if (!playerWhoLeft) return;
    return (
        <>
            <div className="exit-table-modal">
                <ExitTablePlayerInfo
                    playerWhoLeft={playerWhoLeft}
                    playerIndex={playerIndex}
                />
                <button
                    className="hidden-btn"
                    ref={buttonRef} onClick={closeModal}>
                </button>
                <ModalTimer
                    timeout={5000}
                    onTimeout={handleClickButtonRef}
                />
                <ExitTableStatus
                    playerWhoLeft={playerWhoLeft}
                    playerIndex={playerIndex}
                />
            </div>
        </>
    );
}

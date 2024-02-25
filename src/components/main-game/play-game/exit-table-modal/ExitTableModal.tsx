import Modal from "../../../UI/modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import './ExitTable.css'
import { removePlayer } from "../../../../store/player-arr/playersArrSlice";
import { addInactivePlayer } from "../../../../store/inactive-players/InactivePlayersSlice";
import { beginDealerRound, endIsGameActive } from "../../../../store/game-data/GameDataSlice";
import { PlayerInterface } from "../../../../models/PlayerProps";
import ModalTimer from "../../../modal-timer/ModalTimer";
import { useRef } from "react";
import { useNavigate } from "react-router";
import ExitTablePlayerInfo from "./ExitTablePlayerInfo";
import ExitTableStatus from "./ExitTableStatus";

interface ExitTableModalProps {
    playerIndex: number;
    playerWhoLeft: PlayerInterface | null;
    closeModal: () => void;
    isModalOpen: boolean;
}

export default function ExitTableModal({ playerIndex, playerWhoLeft, closeModal, isModalOpen }: ExitTableModalProps) {

    const playersArr = useSelector((state: RootState) => state.playersArr);
    const dispatch = useDispatch();
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const navigate = useNavigate();

    const exitTableModalBtnHandler = async () => {
        const currPlayerName = playersArr[playerIndex].name
        const lastPlayerName = playersArr[playersArr.length - 1].name
        if (playerWhoLeft) {
            dispatch(removePlayer({ name: playerWhoLeft.name }))
            dispatch(addInactivePlayer({ ...playerWhoLeft }))
            if (playersArr.length > 1) {
                if (currPlayerName === lastPlayerName
                    && currPlayerName === playerWhoLeft.name) {
                    dispatch(beginDealerRound())
                }
            } else {
                dispatch(endIsGameActive());
                navigate("/finalResults");
            }
            closeModal()
        }
    };

    const handleClickButtonRef = () => {
        if (buttonRef.current) {
            buttonRef.current.click();
        }
    };

    if (!playerWhoLeft) return;

    return (
        <Modal
            closeModal={exitTableModalBtnHandler}
            open={isModalOpen}
            isTimer={false}
        >
            {playerWhoLeft && (
                <div className="exit-table-modal">
                    <ExitTablePlayerInfo
                        playerWhoLeft={playerWhoLeft}
                        playerIndex={playerIndex}

                    />
                    <button className="hidden-btn" ref={buttonRef} onClick={exitTableModalBtnHandler}></button>
                    <ModalTimer timeout={2000} onTimeout={handleClickButtonRef} />
                    <ExitTableStatus
                        playerWhoLeft={playerWhoLeft}
                        playerIndex={playerIndex}
                    />
                </div>
            )}
        </Modal>
    );
}

import { useEffect, useState } from "react";
import { updateIsGameActive } from "../../../../store/game-data/GameDataSlice";
import Modal from "../../../UI/modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { addInactivePlayer } from "../../../../store/inactive-players/InactivePlayersSlice";
import { removePlayer } from "../../../../store/player-arr/playersArrSlice";
import './exit-table-modal.css'

interface LeaveTableModalProps {
    changeToNextPlayer: () => void;
    playerIndex: number;
}

export default function ExitTableModal({ changeToNextPlayer, playerIndex }: LeaveTableModalProps) {
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const currPlayer = playersArr[playerIndex]
    const { isPlayerActive, name, bank, roundsWon } = currPlayer
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => setIsModalOpen(false)


    useEffect(() => {
        if (!isPlayerActive) {
            setIsModalOpen(true);
        }
    }, [isPlayerActive]);

    const exitTableModalBtnHandler = () => {
        setIsModalOpen(false);
        if (playersArr.length > 1) {
            dispatch(removePlayer({ name: currPlayer.name }))
            dispatch(addInactivePlayer({ ...currPlayer }))
            changeToNextPlayer();
        } else {
            dispatch(updateIsGameActive());
        }
    };

    const reasonForLeaving = bank < 0
        ? `${name} ran out of money and has left the table`
        : `${name} left the table`

    const modalButton = playersArr.length > 1
        ? `Begin ${playersArr[playerIndex + 1].name}'s turn`
        : "See final results"

        

    return (
        <Modal
            closeModal={closeModal}
            open={isModalOpen}
        >
            <div className="exit-table-modal">
                <h2>{reasonForLeaving}</h2>
                <ul>
                    <li>Current bank: ${bank}</li>
                    <li>Rounds won: {roundsWon}</li>
                </ul>

                <button
                    onClick={exitTableModalBtnHandler}
                    className="game-btn">
                    {modalButton}
                </button>
            </div>
        </Modal>
    );
}

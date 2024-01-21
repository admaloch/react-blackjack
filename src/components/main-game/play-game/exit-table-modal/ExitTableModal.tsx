import { useEffect, useState } from "react";
import Modal from "../../../UI/modal/Modal";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import './exit-table-modal.css'
import ExitTableBtn from "./ExitTableModalBtn";
import PlayerIndexProps from "../../../../models/PlayerIndexProps";
import { PlayerInterface } from "../../../../models/PlayerProps";


export default function ExitTableModal({ playerIndex }: PlayerIndexProps) {

    const playersArr = useSelector((state: RootState) => state.playersArr);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const closeModal = () => setIsModalOpen(false)
    const [playerWhoLeft, setPlayerWhoLeft] = useState<PlayerInterface | null>(null);



    useEffect(() => {
        const playerLeftTable = playersArr.find(player => player.playerLeftTable);
        console.log('player left table', playerLeftTable)
        if (playerLeftTable) {
            setPlayerWhoLeft(playerLeftTable);
            setIsModalOpen(true);
        }
    }, [playersArr]);

    return (
        <Modal
            closeModal={closeModal}
            open={isModalOpen}
        >
            {playerWhoLeft && (
                <div className="exit-table-modal">
                    <h2>{playerWhoLeft.name} left the table</h2>
                    <ul>
                        <li>Current bank: ${playerWhoLeft.bank}</li>
                        <li>Rounds won: {playerWhoLeft.roundsWon}</li>
                    </ul>
                    <ExitTableBtn
                    playerWhoLeft={playerWhoLeft}
                        playerIndex={playerIndex}
                        closeModal={closeModal}
                    />
                </div>
            )}

        </Modal>
    );
}

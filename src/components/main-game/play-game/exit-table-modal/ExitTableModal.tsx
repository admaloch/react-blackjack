import { useEffect, useState } from "react";
import Modal from "../../../UI/modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import './ExitTable.css'
import ExitTableBtn from "./ExitTableModalBtn";
import PlayerIndexProps from "../../../../models/PlayerIndexProps";
import { PlayerInterface } from "../../../../models/PlayerProps";
import { removePlayer } from "../../../../store/player-arr/playersArrSlice";
import { addInactivePlayer } from "../../../../store/inactive-players/InactivePlayersSlice";
import { updateIsGameActive } from "../../../../store/game-data/GameDataSlice";


export default function ExitTableModal({ playerIndex }: PlayerIndexProps) {

    const playersArr = useSelector((state: RootState) => state.playersArr);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const closeModal = () => setIsModalOpen(false)
    const [playerWhoLeft, setPlayerWhoLeft] = useState<PlayerInterface | null>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const playerLeftTable = playersArr.find(player => player.playerLeftTable);
        console.log('player left table', playerLeftTable)
        if (playerLeftTable) {
            setPlayerWhoLeft(playerLeftTable);
            setIsModalOpen(true);
        }
    }, [playersArr]);

    const exitTableModalBtnHandler = async () => {
        if (playerWhoLeft) {
            closeModal()
            if (playersArr.length > 1) {
                dispatch(removePlayer({ name: playerWhoLeft.name }))
                dispatch(addInactivePlayer({ ...playerWhoLeft }))
            } else {
                dispatch(updateIsGameActive());
            }
        }

    };

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
                        exitTableModalBtnHandler={exitTableModalBtnHandler}
                        playerIndex={playerIndex}
                        playerWhoLeft={playerWhoLeft}
                    />
                </div>
            )}

        </Modal>
    );
}

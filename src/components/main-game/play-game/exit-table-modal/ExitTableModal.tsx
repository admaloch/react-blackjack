import Modal from "../../../UI/modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import './ExitTable.css'
import ExitTableBtn from "./ExitTableModalBtn";
import { removePlayer } from "../../../../store/player-arr/playersArrSlice";
import { addInactivePlayer } from "../../../../store/inactive-players/InactivePlayersSlice";
import { beginDealerRound, updateIsGameActive } from "../../../../store/game-data/GameDataSlice";
import { PlayerInterface } from "../../../../models/PlayerProps";

interface ExitTableModalProps {
    playerIndex: number;
    playerWhoLeft: PlayerInterface | null;
    closeModal: () => void;
    isModalOpen: boolean;
}

export default function ExitTableModal({ playerIndex, playerWhoLeft, closeModal, isModalOpen }: ExitTableModalProps) {

    const playersArr = useSelector((state: RootState) => state.playersArr);
    const dispatch = useDispatch();

    const currPlayerName = playersArr[playerIndex].name
    const lastPlayerName = playersArr[playersArr.length - 1].name


    const exitTableModalBtnHandler = async () => {
        if (playerWhoLeft) {
            if (playersArr.length > 1) {
                if (currPlayerName === lastPlayerName
                    && currPlayerName === playerWhoLeft.name) {
                    dispatch(beginDealerRound())
                }
            } else {
                dispatch(updateIsGameActive());
            }
            dispatch(removePlayer({ name: playerWhoLeft.name }))
            dispatch(addInactivePlayer({ ...playerWhoLeft }))
            closeModal()
        }
    };

    return (
        <Modal
            closeModal={exitTableModalBtnHandler}
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

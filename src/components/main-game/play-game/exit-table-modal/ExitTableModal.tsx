import Modal from "../../../UI/modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { addInactivePlayer } from "../../../../store/inactive-players/InactivePlayersSlice";
import { beginDealerRound, endIsGameActive } from "../../../../store/game-data/GameDataSlice";
import { PlayerInterface } from "../../../../models/PlayerProps";
import { useNavigate } from "react-router";
import ExitTableContent from "./ExitTableContent";
import { resetDealer } from "../../../../store/dealer-obj/dealerObjSlice";
import { removePlayer } from "../../../../store/player-arr/PlayersArrSlice";

interface ExitTableModalProps {
    playerIndex: number;
    playerWhoLeft: PlayerInterface;
    closeModal: () => void;
    isModalOpen: boolean;
}

export default function ExitTableModal({ playerIndex, playerWhoLeft, closeModal, isModalOpen }: ExitTableModalProps) {

    const playersArr = useSelector((state: RootState) => state.playersArr);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const exitTableModalBtnHandler = async () => {
        const currPlayerName = playersArr[playerIndex].name
        const lastPlayerName = playersArr[playersArr.length - 1].name
        dispatch(removePlayer({ name: playerWhoLeft.name }))
        dispatch(addInactivePlayer({ ...playerWhoLeft }))
        if (playersArr.length > 1) {
            if (currPlayerName === lastPlayerName
                && currPlayerName === playerWhoLeft.name) {
                dispatch(beginDealerRound())
            }
        } else {
            dispatch(resetDealer())
            dispatch(endIsGameActive());
            navigate("/finalResults");
        }
        closeModal()
    };

    return (
        <Modal
            closeModal={exitTableModalBtnHandler}
            open={isModalOpen}
            isTimer={true}
        >
            <ExitTableContent
                playerWhoLeft={playerWhoLeft}
                playerIndex={playerIndex}
                closeModal={exitTableModalBtnHandler}
            />
        </Modal>
    );
}
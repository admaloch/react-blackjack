import { PlayerInterface } from "../../../../models/PlayerProps";
import ModalTimer from "../../../modal-timer/ModalTimer";
import { useRef } from "react";
import ExitTablePlayerInfo from "./ExitTablePlayerInfo";
import ExitTableStatus from "./ExitTableStatus";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { addInactivePlayer } from "../../../../store/inactive-players/InactivePlayersSlice";
import { beginDealerRound, endIsGameActive } from "../../../../store/game-data/GameDataSlice";
import { useNavigate } from "react-router";
import { resetDealer } from "../../../../store/dealer-obj/dealerObjSlice";
import { removePlayer } from "../../../../store/player-arr/PlayersArrSlice";
import { deleteStoreData, sendStoreData } from "../../../../store/actions/storeActions";

interface ExitTableContentProps {
    player: PlayerInterface;
    closeModal: () => void;
}

export default function ExitTableContent({ player, closeModal }: ExitTableContentProps) {
    const store = useSelector((state: RootState) => state);

    const playersArr = store.playersArr
    const { isPlayerRoundActive } = store.gameData
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const exitTableModalBtnHandler = () => {
        const currPlayerName = player.name
        const lastPlayerName = playersArr[playersArr.length - 1].name
        dispatch(removePlayer({ name: player.name }))
        dispatch(addInactivePlayer({ ...player }))
        if (playersArr.length > 1) {
            if (currPlayerName === lastPlayerName &&
                isPlayerRoundActive
            ) {
                dispatch(beginDealerRound())
            }
            dispatch(sendStoreData(store));
        } else {
            dispatch(resetDealer())
            dispatch(endIsGameActive());
            dispatch(deleteStoreData());
            navigate("/finalResults");
        }

        closeModal()
    };

    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const handleClickButtonRef = () => {
        if (buttonRef.current) {
            buttonRef.current.click();
        }
    };

    return (
        <>
            <div className="exit-table-modal">
                <ExitTablePlayerInfo
                    player={player}
                />
                <button
                    className="hidden-btn"
                    ref={buttonRef} onClick={exitTableModalBtnHandler}>
                </button>
                <ModalTimer
                    timeout={2000}
                    onTimeout={handleClickButtonRef}
                />
                <ExitTableStatus
                    player={player}
                />
            </div>
        </>
    );
}

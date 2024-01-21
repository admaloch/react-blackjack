import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { removePlayer } from '../../../../store/player-arr/playersArrSlice';
import { addInactivePlayer } from '../../../../store/inactive-players/InactivePlayersSlice';
import { updateIsGameActive } from '../../../../store/game-data/GameDataSlice';
import { PlayerInterface } from '../../../../models/PlayerProps';

interface ExitTableBtnProps {
    playerIndex: number;
    closeModal: () => void;
    playerWhoLeft: PlayerInterface;
}

export default function ExitTableBtn({ playerIndex, closeModal, playerWhoLeft }: ExitTableBtnProps) {

    const playersArr = useSelector((state: RootState) => state.playersArr);
    const currPlayer = playersArr[playerIndex]
  
    const dispatch = useDispatch();

    const exitTableModalBtnHandler = () => {
        closeModal()
        if (playersArr.length > 1) {
            dispatch(removePlayer({ name: playerWhoLeft.name }))
            dispatch(addInactivePlayer({ ...playerWhoLeft }))
        } else {
            dispatch(updateIsGameActive());
        }

    };

    let modalBtnText = ''
    if (playersArr.length > 1) {
        if (playerWhoLeft.name === currPlayer.name) {
            modalBtnText = `Begin ${playersArr[playerIndex + 1].name}'s turn`
        } else {
            modalBtnText = `Continue ${currPlayer.name}'s turn`
        }
    } else {
        modalBtnText = "See final results"
    }

    return (
        <button
            onClick={exitTableModalBtnHandler}
            className="game-btn">
            {modalBtnText}
        </button>
    )
}

import { RootState } from '../../../../store/store';
import { PlayerInterface } from '../../../../models/PlayerProps';
import { useSelector } from 'react-redux';

interface ExitTableBtnProps {
    playerIndex: number;
    exitTableModalBtnHandler: () => void;
    playerWhoLeft: PlayerInterface;
}

export default function ExitTableBtn({ playerIndex, exitTableModalBtnHandler, playerWhoLeft }: ExitTableBtnProps) {

    const playersArr = useSelector((state: RootState) => state.playersArr);
    const currPlayer = playersArr[playerIndex]

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

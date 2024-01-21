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
    const currPlayerName = currPlayer.name
    const lastPlayerName = playersArr[playersArr.length - 1].name
    const leftTableName = playerWhoLeft.name

    let modalBtnText = ''
    if (playersArr.length > 1) {
        if(currPlayerName === lastPlayerName && currPlayerName === leftTableName ) {
            modalBtnText = "Begin dealer round"
        } else if (currPlayerName !== lastPlayerName && currPlayerName === leftTableName ) {
            modalBtnText = `Begin ${playersArr[playerIndex + 1].name}'s turn`
        } else {
            modalBtnText = `Continue ${currPlayerName}'s turn`
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

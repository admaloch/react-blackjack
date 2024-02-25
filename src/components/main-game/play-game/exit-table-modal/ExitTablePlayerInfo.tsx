import { useSelector } from 'react-redux';
import { PlayerInterface } from '../../../../models/PlayerProps';
import { RootState } from '../../../../store/store';

interface ExitTablePlayerInfoProps {
    playerWhoLeft: PlayerInterface;
    playerIndex: number;
}

export default function ExitTablePlayerInfo({ playerWhoLeft, playerIndex }: ExitTablePlayerInfoProps) {
    const playersArr = useSelector((state: RootState) => state.playersArr);

    const currPlayerName = playersArr[playerIndex].name
    const lastPlayerName = playersArr[playersArr.length - 1].name

    let statusText: string = ''

    if (playersArr.length > 1) {
        if (currPlayerName === lastPlayerName
            && currPlayerName === playerWhoLeft.name) {
            statusText = 'Player round complete'
        }
    } else {
        statusText = 'Game Over'
    }

    return (
        <>
            <h2>{playerWhoLeft.name} left the table</h2>
            <ul>
                <li>Current bank: ${playerWhoLeft.bank}</li>
                <li>Rounds won: {playerWhoLeft.roundsWon}</li>
            </ul>
            <h3>{statusText}</h3>
        </>
    )
}

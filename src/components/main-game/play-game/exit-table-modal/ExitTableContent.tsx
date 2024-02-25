import { useSelector } from 'react-redux';
import { PlayerInterface } from '../../../../models/PlayerProps';
import { RootState } from '../../../../store/store';

interface ExitTableContentProps {
    playerWhoLeft: PlayerInterface;
    playerIndex: number;
}

export default function ExitTableContent({ playerWhoLeft, playerIndex }: ExitTableContentProps) {
    const playersArr = useSelector((state: RootState) => state.playersArr);

    const currPlayerName = playersArr[playerIndex].name
    const lastPlayerName = playersArr[playersArr.length - 1].name

    let statusText: string = ''

    if (playersArr.length > 1) {
        if (currPlayerName === lastPlayerName
            && currPlayerName === playerWhoLeft.name) {
            statusText = 'Beginning dealer round...'
        } else {
            const nextPlayerName = playersArr[playerIndex + 1].name
            statusText = `Beginning ${nextPlayerName}'s turn...`

        }
    } else {
        statusText = 'All players left the table. Showing final results...'
    }

    return (
        <>
            <h2>{playerWhoLeft.name} left the table</h2>
            <ul>
                <li>Current bank: ${playerWhoLeft.bank}</li>
                <li>Rounds won: {playerWhoLeft.roundsWon}</li>
            </ul>
            <p>{statusText}</p>
        </>
    )
}

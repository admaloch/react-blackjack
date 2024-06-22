import { useSelector } from 'react-redux';
import { PlayerInterface } from '../../../../models/PlayerProps';
import { RootState } from '../../../../store/store';

interface ExitTablePlayerInfoProps {
    playerWhoLeft: PlayerInterface;
    playerIndex: number;
}

export default function ExitTableStatus({ playerWhoLeft, playerIndex }: ExitTablePlayerInfoProps) {
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const isPlayerRoundActive = useSelector((state: RootState) => state.gameData.isPlayerRoundActive);



    let currPlayerName = ''
    let lastPlayerName = ''
    let statusText: string = ''

    if (playersArr.length) {
         currPlayerName = playersArr[playerIndex].name
         lastPlayerName = playersArr[playersArr.length - 1].name
         statusText = ''
    }

    if (playersArr.length > 1) {
        if (isPlayerRoundActive) {
            if (currPlayerName === lastPlayerName
                && currPlayerName === playerWhoLeft.name) {
                statusText = 'Beginning dealer round...'
            } else if (currPlayerName !== playerWhoLeft.name) {
                statusText = `Continuing ${currPlayerName}'s turn...`
            } else {
                const nextPlayerName = playersArr[playerIndex + 1].name
                statusText = `Beginning ${nextPlayerName}'s turn...`
            }
        } else {
            statusText = 'Returning to round results...'
        }
    } else {
        statusText = 'All players left the table. Showing final results...'
    }



    return (
        <p>{statusText}</p>
    )
}

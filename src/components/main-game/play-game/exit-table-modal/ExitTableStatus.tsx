import { useSelector } from 'react-redux';
import {  PlayerInterfaceProps } from '../../../../models/PlayerProps';
import { RootState } from '../../../../store/store';



export default function ExitTableStatus({ player }: PlayerInterfaceProps) {
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const isPlayerRoundActive = useSelector((state: RootState) => state.gameData.isPlayerRoundActive);

    const currPlayerName = player.name
    const lastPlayerName = playersArr[playersArr.length - 1].name
    let statusText = ''

    const playerIndex = playersArr.findIndex(player => player.name === currPlayerName)

    if (playersArr.length > 1) {
        if (isPlayerRoundActive) {
            if (currPlayerName === lastPlayerName) {
                statusText = 'Beginning dealer round...'
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

import { useEffect } from 'react'
import { delay } from '../../../../../../utils/Utility';
import { PlayerInterfaceProps } from '../../../../../../models/PlayerProps';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../../store/store';
import {  updateWinOrLose } from '../../../../../../store/player-arr/playersArrSlice';

export default function SplitWinOrLoseStr({ player }: PlayerInterfaceProps) {

    const dispatch = useDispatch()
    const dealerObj = useSelector((state: RootState) => state.dealerObj);
    const { isRoundActive } = useSelector((state: RootState) => state.gameData);
    const { roundResults, name } = player
    const { splitResults } = roundResults

    useEffect(() => {
        let isMounted = true
        async function winOrLoseFunc() {
            if (isMounted) {
                if (isRoundActive && roundResults.splitResults === '') {
                    await delay(1500)
                    dispatch(updateWinOrLose({ player, dealerObj }))
                }
            }
        }
        winOrLoseFunc()
        return () => { isMounted = false }
    }, [dealerObj, dispatch, isRoundActive, player, roundResults.splitResults])

    let winOrLoseStr: string = ''
    if (splitResults === 'Won') winOrLoseStr = `${name} won!`
    else if (splitResults === 'Lost') winOrLoseStr = 'Dealer won!'
    else if (splitResults === 'Push') winOrLoseStr = 'Push!'
    else winOrLoseStr = ''

    return winOrLoseStr && (
        <p>{winOrLoseStr}</p>
    );
}

import { useEffect } from 'react'
import { delay } from '../../../../../../utils/Utility';
import playerWonOrLostFunc from '../../../../../../utils/playerWonOrLostFunc';
import { PlayerInterfaceProps, RoundResultsProps } from '../../../../../../models/PlayerProps';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../../store/store';
import { updatePlayer } from '../../../../../../store/player-arr/playersArrSlice';


export default function SplitWinOrLoseStr({ player }: PlayerInterfaceProps) {

    const dispatch = useDispatch()
    const dealerObj = useSelector((state: RootState) => state.dealerObj);
    const { isSplitResultsActive, isRoundActive } = useSelector((state: RootState) => state.gameData);
    const { roundResults, name } = player
    const { splitResults } = roundResults

    useEffect(() => {
        let isMounted = true
        async function updateWinOrLose() {
            if (isMounted) {
                if (isRoundActive && roundResults.splitResults === '') {
                    await delay(1500)
                    const winOrLoseStr = playerWonOrLostFunc(player, dealerObj, 'split')
                    const newRoundResults: RoundResultsProps = { ...roundResults, splitResults: winOrLoseStr }
                    dispatch(updatePlayer({ ...player, roundResults: newRoundResults }))
                }
            }
        }
        updateWinOrLose()
        return () => { isMounted = false }
    }, [dealerObj, dispatch, isSplitResultsActive, player, roundResults, isRoundActive])

    let winOrLoseStr: string = ''
    if (splitResults === 'Won') winOrLoseStr = `${name} won!`
    else if (splitResults === 'Lost') winOrLoseStr = 'Dealer won!'
    else if (splitResults === 'Push') winOrLoseStr = 'Push!'
    else winOrLoseStr = ''


    return winOrLoseStr && (
        <p>{winOrLoseStr}</p>
    );
}

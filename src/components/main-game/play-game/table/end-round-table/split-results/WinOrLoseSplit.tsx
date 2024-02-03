import React, { useEffect } from 'react'
import { delay } from '../../../../../../utils/Utility';
import playerWonOrLostFunc from '../../../../../../utils/playerWonOrLostFunc';
import { PlayerInterfaceProps, RoundResultsProps } from '../../../../../../models/PlayerProps';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../../store/store';
import { updatePlayer } from '../../../../../../store/player-arr/playersArrSlice';

export default function WinOrLoseSplit({ player }: PlayerInterfaceProps) {

    const dispatch = useDispatch()
    const dealerObj = useSelector((state: RootState) => state.dealerObj);
    const { isSplitResultsActive } = useSelector((state: RootState) => state.gameData);
    const { roundResults, name } = player
    const { mainResults } = roundResults

    useEffect(() => {
        async function updateWinOrLose() {
            if (isSplitResultsActive && roundResults.splitResults === '') {
                await delay(3000)
                const winOrLoseStr = playerWonOrLostFunc(player, dealerObj, 'split')
                const newRoundResults: RoundResultsProps = { ...roundResults, mainResults: winOrLoseStr }
                dispatch(updatePlayer({ ...player, roundResults: newRoundResults }))
            }
        }
        updateWinOrLose()
    }, [dealerObj, dispatch, isSplitResultsActive, player, roundResults])

    let winOrLoseStr: string = ''
    if (mainResults === 'Won') winOrLoseStr = `${name} won!`
    else if (mainResults === 'Lost') winOrLoseStr = 'Dealer won!'
    else winOrLoseStr = "Push!"


    return (
        <p>{winOrLoseStr}</p>
    )
}

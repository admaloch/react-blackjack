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
    // const playersArr = useSelector((state: RootState) => state.playersArr);
    const { isSplitResultsActive } = useSelector((state: RootState) => state.gameData);
    const { roundResults, name } = player
    const { splitResults } = roundResults

    useEffect(() => {
        async function updateWinOrLose() {
            if (isSplitResultsActive && roundResults.splitResults === '') {
                await delay(1500)
                const winOrLoseStr = playerWonOrLostFunc(player, dealerObj, 'split')
                console.log(winOrLoseStr)
                const newRoundResults: RoundResultsProps = { ...roundResults, splitResults: winOrLoseStr }
                dispatch(updatePlayer({ ...player, roundResults: newRoundResults }))
            }
        }
        updateWinOrLose()
    }, [dealerObj, dispatch, isSplitResultsActive, player, roundResults])



    let winOrLoseStr: string = ''
    if (splitResults === 'Won') winOrLoseStr = `${name} won!`
    else if (splitResults === 'Lost') winOrLoseStr = 'Dealer won!'
    else if (splitResults === 'Push') winOrLoseStr = 'Dealer won!'
    else winOrLoseStr = ''



    return winOrLoseStr && (
        <p>{winOrLoseStr}</p>
    );
}

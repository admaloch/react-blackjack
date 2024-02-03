import { useEffect } from 'react'
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
        async function updateHandsWithResults() {
            const { hand, bank, splitBet, roundResults } = player
            const { cardSum, cardUrlVals } = hand
            const { splitResults } = roundResults
            const playerHasBJ = cardSum === 21 && cardUrlVals.length === 2 ? true : false

            if (isSplitResultsActive && roundResults.splitResults !== '') {
                await delay(1500)
                let newBank = 0
                if (splitResults === 'Won') newBank = playerHasBJ
                    ? bank + (splitBet * 2.5)
                    : bank + (splitBet * 2)
                else if (splitResults === 'Push') newBank = bank + splitBet
                else newBank = bank

                const newRoundResObj = { ...roundResults, isComplete: true }
                dispatch(updatePlayer({ ...player, bank: newBank, splitBet: 0, roundResults: newRoundResObj }))
                // dispatch(endRoundResults())
            }
        }
        updateHandsWithResults()
    }, [dispatch, isSplitResultsActive, player])

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
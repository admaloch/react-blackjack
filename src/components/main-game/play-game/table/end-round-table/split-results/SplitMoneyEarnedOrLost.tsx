import { useEffect } from 'react'
import { delay } from '../../../../../../utils/Utility';
import { PlayerInterfaceProps } from '../../../../../../models/PlayerProps';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../../store/store';
import { updatePlayer } from '../../../../../../store/player-arr/playersArrSlice';
import { endSplitRound, endCurrentRound } from '../../../../../../store/game-data/GameDataSlice';
import MoneyWonOrLost from '../../../../../results-components/MoneyWonOrLost';

export default function SplitMoneyEarnedOrLost({ player }: PlayerInterfaceProps) {

    const dispatch = useDispatch()
    const { isRoundActive } = useSelector((state: RootState) => state.gameData);

    useEffect(() => {
        let isMounted = true
        async function updateHandsWithResults() {
            if (isMounted) {
                const { hand, bank, splitBet, roundResults } = player
                const { cardSum, cardUrlVals } = hand
                const { splitResults } = roundResults
                const playerHasBJ = cardSum === 21 && cardUrlVals.length === 2 ? true : false

                if (isRoundActive && roundResults.splitResults) {
                    await delay(2000)
                    console.log('this ran')
                    let newBank = 0
                    if (splitResults === 'Won') newBank = playerHasBJ
                        ? bank + (splitBet * 2.5)
                        : bank + (splitBet * 2)
                    else if (splitResults === 'Push') newBank = bank + splitBet
                    else newBank = bank
                    const newRoundResObj = { ...roundResults, isComplete: true }
                    dispatch(updatePlayer({ ...player, bank: newBank, splitBet: 0, roundResults: newRoundResObj }))
                    dispatch(endSplitRound())
                    dispatch(endCurrentRound())
                }
            }
        }
        updateHandsWithResults()
        return () => { isMounted = false }
    }, [dispatch, isRoundActive, player])

    return (!isRoundActive &&
        <MoneyWonOrLost player={player} />
    );
}

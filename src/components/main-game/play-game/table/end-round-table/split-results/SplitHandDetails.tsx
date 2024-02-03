import { useDispatch, useSelector } from 'react-redux';
import { PlayerInterface } from '../../../../../../models/PlayerProps'
import PlayerHand from '../main-hand-results/PlayerHand';
import { RootState } from '../../../../../../store/store';
import { useEffect } from 'react';
import { delay } from '../../../../../../utils/Utility';
import { updatePlayer } from '../../../../../../store/player-arr/playersArrSlice';
import WinOrLoseSplit from './WinOrLoseSplit';
import BjBustOrStay from '../../../../../bj-bust-stay/BjBustOrStay';


export interface PlayerProps {
    player: PlayerInterface;
    updatePlayerClass: (str: string) => void;
}

export default function SplitHandDetails({ player }: PlayerProps) {


    const { splitHand, splitBet, bank } = player;
    const { cardSum, cardUrlVals } = splitHand;

    const dispatch = useDispatch();
    const { isSplitResultsActive } = useSelector((state: RootState) => state.gameData);
    const { roundResults } = player
    const { splitResults, isComplete } = roundResults



    const isBlackjack = cardSum === 21 && cardUrlVals.length === 2;



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




    return (
        <>
            <PlayerHand cardUrlVals={cardUrlVals} />

            <p>Bank: {bank}</p>
            {splitBet !== 0 && <p>Split bet: {splitBet}</p>}

            {!isComplete &&
                <p>Sum: {cardSum}</p>
            }

            <BjBustOrStay player={player} mainOrSplit='split' />
            {isBlackjack && <p className="blackjack win-color">BlackJack!</p>}
            {cardSum > 21 && <p className="lose-color">Bust!</p>}
            <WinOrLoseSplit player={player} />
        </>
    );
}

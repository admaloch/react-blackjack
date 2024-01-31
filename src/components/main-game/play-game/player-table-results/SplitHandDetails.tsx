import { useDispatch, useSelector } from 'react-redux';
import { PlayerInterface } from '../../../../models/PlayerProps'
import PlayerHand from './PlayerHand';
import { RootState } from '../../../../store/store';
import { useEffect, useState } from 'react';
import { delay } from '../../../../utils/Utility';
import { FinalResultsState } from './main-hand-results/MainHandFinalRes';
import { updatePlayer } from '../../../../store/player-arr/playersArrSlice';


export interface PlayerProps {
    player: PlayerInterface;
    updatePlayerClass: (str: string) => void;
}

export default function SplitHandDetails({ player, updatePlayerClass }: PlayerProps) {


    const { splitHand, splitBet, bank } = player
    const { cardSum, cardUrlVals, cards } = splitHand

    const dispatch = useDispatch()

    const [finalSplitResults, setFinalSplitResults] = useState<FinalResultsState>({
        mainResults: '',
        moneyWon: 0,
        moneyLost: 0,
        isComplete: false,
    })

    const { isSplitResultsActive } = useSelector(
        (state: RootState) => state.gameData
    );
    const dealerSum = useSelector(
        (state: RootState) => state.dealerObj.hand.cardSum
    );

    const isBlackjack = cardSum === 21 && cardUrlVals.length === 2 ? true : false


    

    useEffect(() =>{
        console.log('player', player)
    }, [player])

    // useEffect(() => {
    //     async function updatePlayerClassAsync() {
    //         if (isSplitResultsActive) {
    //             await delay(4000);
    //             if (cards.length !== 0) {
    //                 if (dealerSum === 21) {
    //                     updatePlayerClass('player-hand emphasize emphasize-win');
    //                 } else if (dealerSum !== 21) {
    //                     updatePlayerClass('player-hand emphasize emphasize-lose');
    //                 }
    //             }
    //         } else {
    //             updatePlayerClass('player-hand');

    //         }
    //     }
    //     updatePlayerClassAsync();
    // }, [isSplitResultsActive, cards, dealerSum, updatePlayerClass]);

    // useEffect(() => {
    //     async function updateSplitHand() {
    //         const { splitHand, wonInsuranceRound, bank, splitBet } = player
    //         const { cardSum, cardUrlVals } = splitHand
    //         const { mainResults, isComplete } = finalSplitResults
    //         const playerHasBJ = cardSum === 21 && cardUrlVals.length === 2 ? true : false

    //         if (mainResults && !wonInsuranceRound && !isComplete) {
    //             await delay(2000)

    //             let newBank = 0
    //             let earnings = 0
    //             let loss = 0
    //             if (mainResults === 'Won') {
    //                 newBank = playerHasBJ ? bank + (splitBet * 2.5) : bank + (splitBet * 2)
    //                 earnings = newBank - bank
    //             } else if (mainResults === 'Push') {
    //                 newBank = bank + splitBet
    //             } else {
    //                 newBank = bank
    //                 loss = splitBet
    //             }
    //             dispatch(updatePlayer({ ...player, bank: newBank, splitBet: 0 }))
    //             setFinalSplitResults((prevState) => {
    //                 return { ...prevState, moneyWon: earnings, moneyLost: loss, isComplete: true }
    //             })
    //             // dispatch(endRoundResults())

    //         }
    //     }
    //     // updateHandsWithResults()
    // }, [finalSplitResults, dispatch, player])


    return (

        <>
            <PlayerHand cardUrlVals={cardUrlVals} />
            <h4>Split hand</h4>
            <p>Bank: {bank}</p>
            {splitBet !== 0 &&
                <p>Bet: {splitBet}</p>
            }
            <p>Split bet: {splitBet}</p>
            <p>Sum: {cardSum}</p>
            {isBlackjack &&
                <p className='blackjack'>BlackJack!</p>
            }


            {isBlackjack &&
                <p className='win-color'>BlackJack!</p>
            }
            {cardSum > 21 &&
                <p className='lose-color'>Bust!</p>
            }

        </>

    )
}

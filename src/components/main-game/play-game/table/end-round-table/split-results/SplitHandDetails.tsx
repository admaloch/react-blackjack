import { PlayerInterface } from '../../../../../../models/PlayerProps'
import PlayerHand from '../main-hand-results/PlayerHand';

import WinOrLoseSplit from './WinOrLoseSplit';
import BjBustOrStay from '../../../../../bj-bust-stay/BjBustOrStay';
import { useEffect } from 'react';
import { delay } from '../../../../../../utils/Utility';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../../store/store';
import { endSplitRound } from '../../../../../../store/game-data/GameDataSlice';


export interface PlayerProps {
    player: PlayerInterface;
    updatePlayerClass: (str: string) => void;
}

export default function SplitHandDetails({ player, updatePlayerClass }: PlayerProps) {
    const dispatch = useDispatch()
    const { hand } = player
    const { splitResults, isComplete } = player.roundResults
    const { cardUrlVals } = hand



    const { isSplitResultsActive, isInsuranceRoundComplete, isDealerCardRevealed, } = useSelector(
        (state: RootState) => state.gameData
    );



    useEffect(() => {
        async function emphasizeInsuranceBetHand() {


            if (isSplitResultsActive && player.splitHand.cards.length !== 0) {
                updatePlayerClass('player-hand emphasize');
            }
            else if (!isSplitResultsActive && player.insuranceBet === 0) {
                updatePlayerClass('player-hand obscure-item');
            }


        }
        emphasizeInsuranceBetHand();
    }, [isDealerCardRevealed, isInsuranceRoundComplete, isSplitResultsActive, player.insuranceBet, player.splitHand.cards.length, updatePlayerClass]);

    useEffect(() => {
        async function changeInsuranceEmphasisColor() {
            if (isSplitResultsActive) {


                if (splitResults === 'Won') {
                    updatePlayerClass('player-hand emphasize emphasize-win');
                } else if (isSplitResultsActive && splitResults === 'Lost') {
                    updatePlayerClass('player-hand emphasize emphasize-lose');
                }

            } else {
                updatePlayerClass('player-hand');
            }
        }
        changeInsuranceEmphasisColor();
    }, [isSplitResultsActive, splitResults, updatePlayerClass, dispatch]);




    useEffect(() => {
        console.log('player', player)
    }, [player])

    const { splitHand, splitBet, bank } = player;
    const { cardSum } = splitHand;





    const isBlackjack = cardSum === 21 && cardUrlVals.length === 2;


    // useEffect(() => {
    //     async function endTableRound() {
    //         if (isSplitResultsActive && isComplete) {
    //             await delay(3000)
    //             dispatch(endSplitRound())
    //         }
    //     }
    //     endTableRound()

    // }, [dispatch, isComplete, isSplitResultsActive])







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

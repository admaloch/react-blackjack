import { useDispatch, useSelector } from 'react-redux';
import { PlayerInterface } from '../../../../models/PlayerProps'
import { RootState } from '../../../../store/store';
import { updateIsInsuranceRoundComplete } from '../../../../store/game-data/GameDataSlice';
import { useEffect } from 'react';
import InsuranceResults from './InsuranceResults';
import FinalPlayerResult from './main-hand-results/MainHandFinalRes';

export interface PlayerProps {
    player: PlayerInterface;
}

export default function PlayerHandDetails({ player }: PlayerProps) {

    const dispatch = useDispatch()

    const dealerObj = useSelector((state: RootState) => state.dealerObj);
    const { isInsuranceRoundComplete, isDealerRoundActive } = useSelector((state: RootState) => state.gameData);

    const { hand, bank, currBet, insuranceBet } = player
    const { cardUrlVals, cardSum } = hand

    useEffect(() => {

        if (dealerObj.hand.cardNumVals[1] !== 11 && !isInsuranceRoundComplete) {
            dispatch(updateIsInsuranceRoundComplete())
        }
    }, [dealerObj, dispatch, isInsuranceRoundComplete])

    const isBlackjack = cardSum === 21 && cardUrlVals.length === 2 ? true : false

    return (
        <>
            {player.splitHand.cards.length !== 0 &&
                <h4>Main Hand:</h4>
            }
            <p>Bank: {bank}</p>
            {currBet !== 0 &&
                <p>Bet: {currBet}</p>
            }
            {insuranceBet !== 0 &&
                <p>Insurance: {insuranceBet}</p>
            }
   
            <InsuranceResults player={player} />
            
            <p>Sum: {cardSum}</p>
            {isBlackjack &&
                <p className='win-color'>BlackJack!</p>
            }
            {cardSum > 21 &&
                <p className='lose-color'>Bust!</p>
            }
            {!isDealerRoundActive &&
                <FinalPlayerResult
                    player={player}
                />
            }

        </>
    )
}

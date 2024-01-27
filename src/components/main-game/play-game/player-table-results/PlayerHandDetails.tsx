import { useDispatch, useSelector } from 'react-redux';
import { PlayerInterface } from '../../../../models/PlayerProps'
import { RootState } from '../../../../store/store';
import { updateIsInsuranceRoundComplete } from '../../../../store/game-data/GameDataSlice';
import { useEffect } from 'react';
import InsuranceResults from './InsuranceResults';

export interface PlayerProps {
    player: PlayerInterface;
}

export default function PlayerHandDetails({ player }: PlayerProps) {

    const dispatch = useDispatch()

    const dealerObj = useSelector((state: RootState) => state.dealerObj);

    const { hand, bank, currBet, insuranceBet, splitBet } = player
    const { cardUrlVals, cardSum } = hand

    useEffect(() => {
        if (dealerObj.hand.cardNumVals[1] !== 11) {
            dispatch(updateIsInsuranceRoundComplete())
        }
    }, [dealerObj, dispatch])

    const isBlackjack = cardSum === 21 && cardUrlVals.length === 2 ? true : false

    return (
        <>
            {player.splitHand.cards.length !== 0 &&
                <h5>Main Hand:</h5>
            }
            <p>Bank: {bank}</p>
            {currBet !== 0 &&
                <p>Bet: {currBet}</p>
            }
            {insuranceBet !== 0 &&
                <p>Insurance: {insuranceBet}</p>
            }
            {splitBet !== 0 &&
                <p>Split bet: {splitBet}</p>
            }
            <InsuranceResults player={player} />
            <p>Sum: {cardSum}</p>
            {isBlackjack &&
                <p className='win-color'>BlackJack!</p>
            }
            {cardSum > 21 &&
                <p className='lose-color'>Bust!</p>
            }
        </>
    )
}

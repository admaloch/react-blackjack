import { useDispatch, useSelector } from 'react-redux';
import { PlayerInterface } from '../../../../models/PlayerProps'
import Card from '../display-cards/Card';
import { RootState } from '../../../../store/store';
import { updateIsInsuranceRoundComplete } from '../../../../store/game-data/GameDataSlice';
import { useEffect, useState } from 'react';
import { delay } from '../../../../utils/Utility';
import InsuranceResults from './InsuranceResults';

export interface PlayerProps {
    player: PlayerInterface;
}

export default function PlayerHandDetails({ player }: PlayerProps) {
    const { isDealerCardRevealed, isInsuranceRoundComplete } = useSelector((state: RootState) => state.gameData);
    const [insuranceResults, setInsuranceResults] = useState({
        msg: 'Insurance bet:',
        class_: 'insurance-msg',
        isComplete: false,
    })
    const dispatch = useDispatch()

    const dealerObj = useSelector((state: RootState) => state.dealerObj);

    const { hand, bank, currBet, insuranceBet } = player
    const { cardUrlVals, cardSum } = hand

    useEffect(() => {
            if (dealerObj.hand.cardNumVals[1] !== 11) {
                dispatch(updateIsInsuranceRoundComplete())
            }
    }, [dealerObj, dispatch])

    const isBlackjack = cardSum === 21 && cardUrlVals.length === 2 ? true : false








    return (
        <>
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
        </>
    )
}

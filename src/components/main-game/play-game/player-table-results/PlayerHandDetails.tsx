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
    const { isInsuranceRoundComplete, isDealerRoundActive, isSplitResultsActive, isRoundActive } = useSelector((state: RootState) => state.gameData);

    const { hand, bank, currBet, insuranceBet } = player
    const { cardUrlVals, cardSum } = hand

    useEffect(() => {

        if (isDealerRoundActive && dealerObj.hand.cardNumVals[1] !== 11 && !isInsuranceRoundComplete) {
            dispatch(updateIsInsuranceRoundComplete())
        }
    }, [dealerObj, dispatch, isInsuranceRoundComplete, isDealerRoundActive])

    const isBlackjack = cardSum === 21 && cardUrlVals.length === 2 ? true : false

    return (
        <>

            <p>Bank: {bank}</p>
            {currBet !== 0 &&
                <p>Bet: {currBet}</p>
            }

            {!isSplitResultsActive && isRoundActive &&
                <p>Sum: {cardSum}</p>
            }
            {insuranceBet !== 0 &&
                <p>Insurance: {insuranceBet}</p>
            }

            <InsuranceResults player={player} />
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

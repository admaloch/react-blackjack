import { useDispatch, useSelector } from 'react-redux';
import { PlayerInterface } from '../../../../models/PlayerProps'
import Card from '../display-cards/Card';
import { RootState } from '../../../../store/store';
import { updateIsInsuranceRoundComplete } from '../../../../store/game-data/GameDataSlice';
import { useEffect } from 'react';
import { delay } from '../../../../utils/Utility';

export interface PlayerProps {
    player: PlayerInterface;
}

export default function PlayerHandDetails({ player }: PlayerProps) {
    const { isDealerCardRevealed, isInsuranceRoundComplete } = useSelector((state: RootState) => state.gameData);

    const dispatch = useDispatch()

    const dealerObj = useSelector((state: RootState) => state.dealerObj);

    const { hand, bank, currBet, insuranceBet } = player
    const { cardUrlVals, cardSum } = hand

    // useEffect(() => {
    //     async function completeInsuranceRound() {
    //         if (isDealerCardRevealed && dealerObj.hand.cardNumVals[1] === 11) {
    //             await delay(2000)
    //             dispatch(updateIsInsuranceRoundComplete())
    //         }
    //     }
    //     completeInsuranceRound()

    // }, [isDealerCardRevealed, dealerObj.hand.cardNumVals, dispatch, dealerObj.hand.cards.length])

    const isBlackjack = cardSum === 21 && cardUrlVals.length === 2 ? true : false

    const showInsuranceRes = insuranceBet !== 0 && isDealerCardRevealed ? true : false

    let insuranceMsg: string = ''
    let insuranceClass: string = ''

    if (dealerObj.hand.cardNumVals[0] === 10 && dealerObj.hand.cardNumVals[1] === 11) {
        insuranceMsg = "Won insurance bet!!"
        insuranceClass = 'insurance-msg win-color revealed'
    } else {
        insuranceMsg = "Lost insurance bet!"
        insuranceClass = 'insurance-msg lose-color revealed'
    }

    return (
        <>

            <p>Bank: {bank}</p>
            <p>Bet: {currBet}</p>
            {insuranceBet !== 0 &&
                <p>Insurance: {insuranceBet}</p>
            }
            {showInsuranceRes &&
                <p className={insuranceClass}>{insuranceMsg}</p>
            }
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

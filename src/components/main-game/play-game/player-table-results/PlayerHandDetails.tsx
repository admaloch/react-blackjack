import { PlayerInterface } from '../../../../models/PlayerProps'
import Card from '../display-cards/Card';


export interface PlayerProps {
    player: PlayerInterface;
}

export default function PlayerHandDetails({ player }: PlayerProps) {

    const { hand, bank, currBet, insuranceBet } = player
    const { cardUrlVals, cardSum } = hand

    const isBlackjack = cardSum === 21 && cardUrlVals.length === 2 ? true : false


    return (
        <>

            <p>Bank: {bank}</p>
            <p>Bet: {currBet}</p>
            {insuranceBet !== 0 &&
                <p>Insurance: {insuranceBet}</p>
            }
            <p>Sum: {cardSum}</p>
            {isBlackjack &&
                <p className='blackjack'>BlackJack!</p>
            }
            {cardSum > 21 &&
                <p className='bust'>Bust!</p>
            }


        </>


    )
}

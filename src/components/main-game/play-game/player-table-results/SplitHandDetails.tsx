import { PlayerInterface } from '../../../../models/PlayerProps'
import PlayerHand from './PlayerHand';


export interface PlayerProps {
    player: PlayerInterface;
}

export default function SplitHandDetails({ player }: PlayerProps) {

    const { splitHand, splitBet, bank, currBet } = player
    const { cardSum, cardUrlVals } = splitHand



    const isBlackjack = cardSum === 21 && cardUrlVals.length === 2 ? true : false


    return (

        <>
            <h5>Split hand</h5>
            <p>Bank: {bank}</p>
            {currBet !== 0 &&
                <p>Bet: {currBet}</p>
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
            <PlayerHand cardUrlVals={cardUrlVals} />
        </>

    )
}

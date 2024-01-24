import { PlayerInterface } from '../../../../models/PlayerProps'
import Card from '../display-cards/Card';


export interface PlayerProps {
    player: PlayerInterface;
}

export default function PlayerHandResults({ player }: PlayerProps) {

    const { hand, name, splitHand } = player
    const { cardUrlVals, cardSum } = hand

    const isBlackjack = cardSum === 21 && cardUrlVals.length === 2 ? true : false

    return (
        <div className="player-hand">
            <h4>{name}</h4>
            x
            <p>Sum: {cardSum}</p>
            {isBlackjack &&
                <p>BlackJack!</p>
            }
            <div className="curr-player-hand">
                {cardUrlVals.map((card, index) => (
                    <Card
                        key={index}
                        cardUrlVal={card}
                    />
                ))}
            </div>

            {splitHand.cards.length !== 0 && (

                <div className="curr-player-hand">
                    {splitHand.cardUrlVals.map((card, index) => (
                        <Card
                            key={index}
                            cardUrlVal={card}
                        />
                    ))}
                </div>
            )}



        </div>
    )
}

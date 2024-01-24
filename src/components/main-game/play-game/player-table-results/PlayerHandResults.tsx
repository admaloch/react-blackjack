import { PlayerInterface } from '../../../../models/PlayerProps'
import Card from '../display-cards/Card';


export interface PlayerProps {
    player: PlayerInterface;
}

export default function PlayerHandResults({ player }: PlayerProps) {

    return (
        <div className="player-hand">
            <h5>{player.name}</h5>
            <div className="curr-player-hand">
                {player.hand.cardUrlVals.map((card, index) => (
                    <Card
                        key={index}
                        cardUrlVal={card}
                    />
                ))}
            </div>

        </div>
    )
}

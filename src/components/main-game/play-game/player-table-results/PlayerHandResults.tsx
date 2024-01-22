import { PlayerInterface } from '../../../../models/PlayerProps'
import PlayerHand from './PlayerHand';

export interface PlayerProps {
    player: PlayerInterface;
}

export default function PlayerHandResults({ player }: PlayerProps) {
    return (
        <div className="player-hand">
            <h5>{player.name}</h5>
            {player.hand.cardUrlVals.map(cards => (
                <PlayerHand
                    cards={cards}
                />
            ))}
        </div>
    )
}

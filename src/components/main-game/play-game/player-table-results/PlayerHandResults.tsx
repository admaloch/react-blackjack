import { useState } from 'react';
import { PlayerInterface } from '../../../../models/PlayerProps'
import Card from '../display-cards/Card';
import PlayerHand from './PlayerHand';
import PlayerHandDetails from './PlayerHandDetails';
import SplitHandDetails from './SplitHandDetails';


export interface PlayerProps {
    player: PlayerInterface;
}

export default function PlayerHandResults({ player }: PlayerProps) {
    const [isSplitHandRound, setIsSplitHandRound] = useState(false)

    const startSplitRound = () => setIsSplitHandRound(true)

    const { hand, name, splitHand } = player
    const { cardUrlVals } = hand

    const showSplitHand = isSplitHandRound && splitHand.cards.length !== 0
    const showMainHand = !isSplitHandRound || isSplitHandRound && splitHand.cards.length === 0
    return (
        <div className="player-hand">
            <h4>{name}</h4>
            {showMainHand && (
                <>
                    <PlayerHandDetails player={player} />
                    <PlayerHand cardUrlVals={cardUrlVals} />
                </>
            )}

            {showSplitHand &&
                <SplitHandDetails player={player} />
            }
        </div>
    )
}

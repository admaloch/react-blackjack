import { useState } from 'react';
import { PlayerInterface } from '../../../../models/PlayerProps'
import PlayerHand from './PlayerHand';
import PlayerHandDetails from './PlayerHandDetails';
import SplitHandDetails from './SplitHandDetails';
import PlayerResultsHeader from './PlayerResultsHeader';

export interface PlayerProps {
    player: PlayerInterface;
}

export default function PlayerHandResults({ player }: PlayerProps) {

    const [showSplitHand, setShowSplitHand] = useState(false)
    const changeToSplitHand = () => setShowSplitHand(true)
    const changeToMainHand = () => setShowSplitHand(false)


    const { hand } = player
    const { cardUrlVals } = hand



    return (
        <div className="player-hand">
            <PlayerResultsHeader
                player={player}
                changeToSplitHand={changeToSplitHand}
                changeToMainHand={changeToMainHand}
                showSplitHand={showSplitHand}
                
            />

            {!showSplitHand && (
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

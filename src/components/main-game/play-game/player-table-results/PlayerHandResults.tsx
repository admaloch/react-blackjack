import { useEffect, useState } from 'react';
import { PlayerInterface } from '../../../../models/PlayerProps'
import PlayerHand from './PlayerHand';
import PlayerHandDetails from './PlayerHandDetails';
import SplitHandDetails from './SplitHandDetails';
import PlayerResultsHeader from './PlayerResultsHeader';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { delay } from '../../../../utils/Utility';

export interface PlayerProps {
    player: PlayerInterface;
}

export default function PlayerHandResults({ player }: PlayerProps) {

    const [showSplitHand, setShowSplitHand] = useState(false)
    const [playerClass, setPlayerClass]
    const changeToSplitHand = () => setShowSplitHand(true)
    const changeToMainHand = () => setShowSplitHand(false)

    const { isSplitResultsActive, isInsuranceRoundComplete, isDealerCardRevealed } = useSelector((state: RootState) => state.gameData);


    useEffect(() => {
        async function changeToSplitHand() {
            if (player.splitHand.cards.length > 0 && isSplitResultsActive) {
                await delay(1000)
                changeToSplitHand()
            }
        }
        changeToSplitHand()
    }, [isSplitResultsActive])

    const { hand } = player
    const { cardUrlVals } = hand

    let playerClass: string = ''

    if (!isInsuranceRoundComplete && player.insuranceBet !== 0 && isDealerCardRevealed) {
        playerClass = 'player-hand emphasize'
    } else playerClass = 'player-hand'

    return (
        <div className={playerClass}>
            <PlayerResultsHeader
                player={player}
                changeToSplitHand={changeToSplitHand}
                changeToMainHand={changeToMainHand}
                showSplitHand={showSplitHand}
            />

            {!showSplitHand && (
                <>
                    <PlayerHand cardUrlVals={cardUrlVals} />
                    <PlayerHandDetails player={player} />

                </>
            )}

            {showSplitHand &&
                <SplitHandDetails player={player} />
            }
        </div>
    )
}

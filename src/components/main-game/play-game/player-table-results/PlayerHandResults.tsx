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
    const [playerClass, setPlayerClass] = useState('player-hand')

    const changeToSplitHand = () => setShowSplitHand(true)
    const changeToMainHand = () => setShowSplitHand(false)

    const { isSplitResultsActive, isInsuranceRoundComplete, isDealerCardRevealed } = useSelector((state: RootState) => state.gameData);
    const dealerObj = useSelector((state: RootState) => state.dealerObj);
    const dealerSum = dealerObj.hand.cardSum

    useEffect(() => {
        async function splitHandChangeHandler() {
            if (player.splitHand.cards.length > 0 && isSplitResultsActive) {
                await delay(5000)
                changeToSplitHand()
            }
        }
        splitHandChangeHandler()
    }, [isSplitResultsActive, player])

    const { hand } = player
    const { cardUrlVals } = hand

    const isInsuranceRound = !isInsuranceRoundComplete && player.insuranceBet !== 0 && isDealerCardRevealed

    useEffect(() => {
        async function updatePlayerClass() {
            if (isInsuranceRound) {
                await delay(1500)
                setPlayerClass('player-hand emphasize')
            }
        }
        updatePlayerClass()
    }, [isInsuranceRound, dealerSum])

    useEffect(() => {
        async function updatePlayerClass() {

            if (isInsuranceRound) {
                await delay(4000)
                if (dealerSum === 21) {
                    setPlayerClass('player-hand emphasize emphasize-win')
                } else if (dealerSum !== 21) {
                    setPlayerClass('player-hand emphasize emphasize-lose')
                }
            } else {
                setPlayerClass('player-hand ')
            }
        }
        updatePlayerClass()
    }, [isInsuranceRound, dealerSum])



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

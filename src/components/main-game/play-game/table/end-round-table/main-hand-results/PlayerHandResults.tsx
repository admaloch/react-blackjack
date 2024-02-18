import { useCallback, useEffect, useState } from 'react';
import { PlayerInterface } from '../../../../../../models/PlayerProps'
import PlayerHand from './PlayerHand';
import PlayerHandDetails from './PlayerHandDetails';
import SplitHandDetails from '../split-results/SplitHandDetails';
import PlayerResultsHeader from './PlayerResultsHeader';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../../store/store';
import { delay } from '../../../../../../utils/Utility';
import Insurance from '../insurance/Insurance';
import EarningsOrLosses from './EarningsOrLosses';

export interface PlayerProps {
    player: PlayerInterface;
}

export default function PlayerHandResults({ player }: PlayerProps) {

    const [showSplitHand, setShowSplitHand] = useState(false);
    const [playerClass, setPlayerClass] = useState('player-hand');

    const changeToSplitHand = () => setShowSplitHand(true);
    const changeToMainHand = () => setShowSplitHand(false);

    const updatePlayerClass = useCallback((str: string) => {
        setPlayerClass(str);
    }, [setPlayerClass]);

    const { isSplitResultsActive, isInsuranceRoundComplete, isDealerCardRevealed, isDealerDrawing, isMainResultsActive } = useSelector(
        (state: RootState) => state.gameData
    );
    const { hand, wonInsuranceRound } = player
    const { splitResults, mainResults } = player.roundResults
    const { cardUrlVals } = hand
    const dealerSum = useSelector((state: RootState) => state.dealerObj.hand.cardSum);

    useEffect(() => {
        // use delays to emphasise player item then color red or green if they win or lose
        let isMounted = true;
        async function winOrLoseEmphasis() {
            if (isMounted) {
                // insurance win or loss
                if (!isInsuranceRoundComplete && isDealerCardRevealed && !isDealerDrawing) {
                    if (player.insuranceBet !== 0) {
                        await delay(1500);
                        setPlayerClass('player-hand emphasize');
                    } else if (player.insuranceBet === 0) {
                        setPlayerClass('player-hand obscure-item');
                    }
                    await delay(2500);
                    if (dealerSum === 21 && player.insuranceBet !== 0) {
                        setPlayerClass('player-hand emphasize emphasize-win');
                    } else if (dealerSum !== 21 && player.insuranceBet !== 0) {
                        setPlayerClass('player-hand emphasize emphasize-lose');
                    }
                } else if (isMainResultsActive) { //main results
                    if (mainResults === '') {
                        await delay(500);
                        if (!wonInsuranceRound) {
                            updatePlayerClass('player-hand emphasize');
                        } else {
                            updatePlayerClass('player-hand obscure-item');
                        }
                    } else if (mainResults !== '' && !wonInsuranceRound) {
                        if (mainResults === 'Won') {
                            updatePlayerClass('player-hand emphasize emphasize-win');
                        } else if (mainResults === 'Lost') {
                            updatePlayerClass('player-hand emphasize emphasize-lose');
                        } else if (mainResults === 'Push') {
                            updatePlayerClass('player-hand emphasize emphasize-push');
                        }
                    }
                } else if (isSplitResultsActive) { // split win or loss
                    if (splitResults === '') {
                        await delay(1500);
                        if (player.splitHand.cards.length !== 0) {
                            changeToSplitHand();
                            updatePlayerClass('player-hand emphasize');
                        } else if (player.splitHand.cards.length === 0) {
                            updatePlayerClass('player-hand obscure-item');
                        }
                    } else if (splitResults !== '') {
                        if (splitResults === 'Won') {
                            updatePlayerClass('player-hand emphasize emphasize-win');
                        } else if (splitResults === 'Lost') {
                            updatePlayerClass('player-hand emphasize emphasize-lose');
                        }
                    }
                } else {
                    updatePlayerClass('player-hand');
                }
            }
        }
        winOrLoseEmphasis();
        return () => { isMounted = false; };
    }, [dealerSum, isDealerCardRevealed, isDealerDrawing, isInsuranceRoundComplete, isSplitResultsActive, player.insuranceBet, player.splitHand.cards.length, splitResults, updatePlayerClass, isMainResultsActive, mainResults, wonInsuranceRound]);

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
            {showSplitHand && player.splitHand.cards.length > 0 &&
                <SplitHandDetails
                    player={player}
                    updatePlayerClass={updatePlayerClass}
                />
            }
            <Insurance player={player} />
            <EarningsOrLosses player={player} />

        </div>
    );
}
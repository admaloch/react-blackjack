import { useCallback, useEffect, useState } from 'react';
import { PlayerInterface } from '../../../../../../models/PlayerProps'
import PlayerHand from './PlayerHand';
import PlayerHandDetails from './PlayerHandDetails';
import SplitHandDetails from '../split-results/SplitHandDetails';
import PlayerResultsHeader from './PlayerResultsHeader';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../../store/store';
import { delay } from '../../../../../../utils/Utility';


export interface PlayerProps {
    player: PlayerInterface;
}

export default function PlayerHandResults({ player }: PlayerProps) {

    const [showSplitHand, setShowSplitHand] = useState(false);
    const [playerClass, setPlayerClass] = useState('player-hand');

    const updatePlayerClass = useCallback((str: string) => {
        setPlayerClass(str);
    }, [setPlayerClass]);

    const { hand } = player
    const { splitResults, mainResults } = player.roundResults
    const { cardUrlVals } = hand

    const changeToSplitHand = () => setShowSplitHand(true);
    const changeToMainHand = () => setShowSplitHand(false);

    const { isSplitResultsActive, isInsuranceRoundComplete, isDealerCardRevealed, isRoundActive, isMainResultsActive, isDealerDrawing } = useSelector(
        (state: RootState) => state.gameData
    );
    const dealerObj = useSelector((state: RootState) => state.dealerObj);
    const dealerSum = dealerObj.hand.cardSum;




    useEffect(() => {
        async function splitHandChangeHandler() {
            if (player.splitHand.cards.length > 0 && isSplitResultsActive) {
                await delay(1500)
                changeToSplitHand();
            }
        }
        splitHandChangeHandler();
    }, [isSplitResultsActive, player]);



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
                } else if (isSplitResultsActive) { // split win or loss
                    if (splitResults === '') {
                        await delay(1500);
                        if (player.splitHand.cards.length !== 0) {
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
        return () => {
            isMounted = false;
        };
    }, [dealerSum, isDealerCardRevealed, isDealerDrawing, isInsuranceRoundComplete, isSplitResultsActive, player.insuranceBet, player.splitHand.cards.length, splitResults, updatePlayerClass]);

    useEffect(() => {
        console.log(player)
        console.log(dealerObj)
    }, [player, dealerObj])


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

        </div>
    );
}
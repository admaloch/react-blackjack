import { useCallback, useEffect, useState } from 'react';
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

    const [showSplitHand, setShowSplitHand] = useState(false);
    const [playerClass, setPlayerClass] = useState('player-hand');

    const updatePlayerClass = useCallback((str: string) => {
        setPlayerClass(str);
    }, [setPlayerClass]);

    const { hand } = player
    const { cardUrlVals } = hand

    const changeToSplitHand = () => setShowSplitHand(true);
    const changeToMainHand = () => setShowSplitHand(false);

    const { isSplitResultsActive, isInsuranceRoundComplete, isDealerCardRevealed } = useSelector(
        (state: RootState) => state.gameData
    );
    const dealerObj = useSelector((state: RootState) => state.dealerObj);
    const dealerSum = dealerObj.hand.cardSum;

    useEffect(() => {
        async function splitHandChangeHandler() {
            if (player.splitHand.cards.length > 0 && isSplitResultsActive) {
                await delay(1500);
                changeToSplitHand();
            }
        }
        splitHandChangeHandler();
    }, [isSplitResultsActive, player]);

    useEffect(() => {
        async function emphasizeInsuranceBetHand() {
            if (!isInsuranceRoundComplete && isDealerCardRevealed) {

                if (player.insuranceBet !== 0) {
                    await delay(1500);
                    setPlayerClass('player-hand emphasize');
                }
                else if (player.insuranceBet === 0) {
                    setPlayerClass('player-hand obscure-item');
                }
            }
        }
        emphasizeInsuranceBetHand();
    }, [isInsuranceRoundComplete, isDealerCardRevealed, player.insuranceBet]);

    useEffect(() => {
        async function changeInsuranceEmphasisColor() {
            if (!isInsuranceRoundComplete && isDealerCardRevealed) {
                await delay(4000);
                if (player.insuranceBet !== 0) {
                    if (dealerSum === 21) {
                        setPlayerClass('player-hand emphasize emphasize-win');
                    } else if (dealerSum !== 21) {
                        setPlayerClass('player-hand emphasize emphasize-lose');
                    }
                }
            } else {
                setPlayerClass('player-hand');
            }
        }
        changeInsuranceEmphasisColor();
    }, [isInsuranceRoundComplete, isDealerCardRevealed, dealerSum, player.insuranceBet]);

    useEffect(() => {
        async function emphasizeSplitHand() {
            if (isSplitResultsActive) {
                await delay(2500);
                if (player.splitHand.cards.length !== 0) {
                    updatePlayerClass('player-hand emphasize');
                } else if (player.splitHand.cards.length === 0) {
                    updatePlayerClass('player-hand obscure-item');
                }
            }
        }
        emphasizeSplitHand();
    }, [isSplitResultsActive, player.splitHand.cards, updatePlayerClass]);

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
                />}
        </div>
    );
}
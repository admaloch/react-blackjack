import { useSelector } from 'react-redux';
import backOfCardImg from '../../../../assets/card-images/BACK.png';
import { RootState } from '../../../../store/store';
import { useEffect, useState } from 'react';
import { delay } from '../../../../utils/Utility';

interface HiddenCardProps {
    isCardRevealed: boolean;
    revealCard: () => void;
}

export default function HiddenCard({ isCardRevealed, revealCard }: HiddenCardProps) {

    const { isPlayerRoundActive } = useSelector((state: RootState) => state.gameData);
    const dealerObj = useSelector((state: RootState) => state.dealerObj);
    const { cards } = dealerObj.hand

    useEffect(() => {
        async function showCardsFunc() {
            if (!isPlayerRoundActive && cards.length === 2) {
                await delay(1000)
                revealCard()
            }
        }
        showCardsFunc()
    }, [isPlayerRoundActive, cards]);

    const hiddenCardClass = isCardRevealed ? 'hidden-card hide-card' : 'hidden-card'

    return (
        <img className={hiddenCardClass} src={backOfCardImg} alt="Back of Card" />
    );
}


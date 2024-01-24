import { useSelector } from 'react-redux';
import backOfCardImg from '../../../../assets/card-images/BACK.png';
import { RootState } from '../../../../store/store';
import { useEffect, useState } from 'react';
import { delay } from '../../../../utils/Utility';

export default function HiddenCard() {

    const { isPlayerRoundActive } = useSelector((state: RootState) => state.gameData);
    const dealerObj = useSelector((state: RootState) => state.dealerObj);
    const { cards } = dealerObj.hand
    const [isCardRevealed, setIsCardRevealed] = useState(false)

    useEffect(() => {
        async function revealCard() {
            if (!isPlayerRoundActive && cards.length === 2) {
                await delay(1000)
                setIsCardRevealed(true)
            }
        }
        revealCard()
    }, [isPlayerRoundActive, cards]);

    const hiddenCardClass = isCardRevealed ? 'hidden-card hide-card' : 'hidden-card'

    return (
        <img className={hiddenCardClass} src={backOfCardImg} alt="Back of Card" />
    );
}


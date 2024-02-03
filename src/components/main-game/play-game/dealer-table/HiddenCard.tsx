import { useSelector } from 'react-redux';
import backOfCardImg from '../../../../assets/card-images/BACK.png';
import { RootState } from '../../../../store/store';
import { useEffect } from 'react';
import { delay } from '../../../../utils/Utility';
import { useDispatch } from 'react-redux';
import { updateIsDealerCardRevealed } from '../../../../store/game-data/GameDataSlice';



export default function HiddenCard() {
    const dispatch = useDispatch()

    const { isPlayerRoundActive, isDealerCardRevealed } = useSelector((state: RootState) => state.gameData);
    const dealerObj = useSelector((state: RootState) => state.dealerObj);
    const { cards } = dealerObj.hand

    useEffect(() => {
        async function showCardsFunc() {
            if (!isPlayerRoundActive && cards.length === 2) {
                await delay(1500)
                dispatch(updateIsDealerCardRevealed())
            }
        }
        showCardsFunc()
    }, [isPlayerRoundActive, cards, dispatch]);

    const hiddenCardClass = isDealerCardRevealed ? 'hidden-card hide-card' : 'hidden-card'

    return (
        <img className={hiddenCardClass} src={backOfCardImg} alt="Back of Card" />
    );
}


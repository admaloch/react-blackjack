import { useSelector } from 'react-redux';
import backOfCardImg from '../../../../../../assets/card-images/BACK.png'
import { RootState } from '../../../../../../store/store';
import { useEffect } from 'react';
import { delay } from '../../../../../../utils/Utility';
import { useDispatch } from 'react-redux';
import { updateIsDealerCardRevealed } from '../../../../../../store/game-data/GameDataSlice';
import './HiddenCard.css'

export default function HiddenCard() {
    const dispatch = useDispatch()

    const { isPlayerRoundActive } = useSelector((state: RootState) => state.gameData);
    const dealerObj = useSelector((state: RootState) => state.dealerObj);
    const { cards } = dealerObj.hand

    useEffect(() => {
        let isMounted = true
        async function showCardsFunc() {
            if (isMounted) {
                if (!isPlayerRoundActive && cards.length === 2) {
                    await delay(1500)
                    dispatch(updateIsDealerCardRevealed())
                }
            }
        }
        showCardsFunc()
        return () => { isMounted = false }
    }, [isPlayerRoundActive, cards, dispatch]);


    return (
        <img
            className='back-of-card hiddenCardAnimation'
            src={backOfCardImg}
            alt="Back of Card"
        />
    );
}


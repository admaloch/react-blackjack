import { useSelector } from 'react-redux';
import backOfCardImg from '../../../../../../assets/card-images/BACK.png'
import { RootState } from '../../../../../../store/store';
import { useEffect } from 'react';
import { delay } from '../../../../../../utils/Utility';
import { useDispatch } from 'react-redux';
import { revealDealerCard } from '../../../../../../store/game-data/GameDataSlice';
import './HiddenCard.css'

export default function HiddenCard() {
    const dispatch = useDispatch()

    const { isPlayerRoundActive, isDealerCardRevealed, isDealerRoundActive, isInsuranceRoundComplete } = useSelector((state: RootState) => state.gameData);
    const dealerObj = useSelector((state: RootState) => state.dealerObj);
    const { cards, cardSum } = dealerObj.hand

    // useEffect(() => {
    //     let isMounted = true
    //     async function showCardsFunc() {
    //         if (isMounted) {
    //             if (isDealerRoundActive && !isDealerCardRevealed && isInsuranceRoundComplete) {
    //                 await delay(1500)
    //                 dispatch(revealDealerCard())
    //             }
    //         }
    //     }
    //     showCardsFunc()
    //     return () => { isMounted = false }
    // }, [isDealerRoundActive, dispatch, isDealerCardRevealed, isInsuranceRoundComplete]);


    return (
        <img
            className='back-of-card hiddenCardAnimation'
            src={backOfCardImg}
            alt="Back of Card"
        />
    );
}


import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../store/store';
import { useEffect, useState } from 'react';
import { delay } from '../../../../../utils/Utility';



export default function DealerDetails() {

    const [showDealerData, setShowDealerData] = useState({
        isInsuranceEval: false,
        isBlackjack: false,
    })
    const dispatch = useDispatch()
    const { isDealerCardRevealed, isInsuranceRoundComplete, isDealerRoundActive } = useSelector((state: RootState) => state.gameData);
    const dealerObj = useSelector((state: RootState) => state.dealerObj);
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const isPlayerInsured = playersArr.some(player => player.splitBet !== 0)
    const { name, hand } = dealerObj;
    const { cardSum, cardUrlVals, cards } = hand


    useEffect(() => {
        let isMounted = true;
        async function showBlackJack() {
            if (isMounted) {
                await delay(1000);
                cardSum === 21 && cardUrlVals.length === 2 && isDealerCardRevealed
                    && setShowDealerData((prevDataState) => ({ ...prevDataState, isBlackjack: true }));
            }
        }
        showBlackJack();
        return () => { isMounted = false };
    }, [isDealerCardRevealed, cardUrlVals, cardSum]);

    useEffect(() => {
        let isMounted = true;
        async function showIsInsuranceEval() {
            if (isMounted && isDealerRoundActive) {
                await delay(1500);
                isDealerCardRevealed && isPlayerInsured
                    ? setShowDealerData((prevDataState) => ({ ...prevDataState, isInsuranceEval: true }))
                    : setShowDealerData((prevDataState) => ({ ...prevDataState, isInsuranceEval: false }));
            }
        }
        showIsInsuranceEval();
        return () => { isMounted = false };
    }, [isPlayerInsured, isDealerCardRevealed, isDealerRoundActive]);

    useEffect(() => {
        console.log('show dealer data state', showDealerData)
    }, [showDealerData])

    let dealerHeaderText: string | JSX.Element = name;
    if (showDealerData.isBlackjack) {
        dealerHeaderText = <h2 className=' win-color'>{name} BlackJack!</h2>
    } else if (!isDealerRoundActive && cardSum > 21) {
        dealerHeaderText = <h2 className=' lose-color'>{name} Bust!</h2>
    } else if (!isDealerRoundActive && cardSum >= 17 && cardSum <= 21) {
        dealerHeaderText = <h2 className=' stay-color'>{name} Stays</h2>
    } else {
        dealerHeaderText = <h2 className=''>{name}</h2>
    }





    const dealerStatusClass = isInsuranceRoundComplete
        ? "dealer-status dealer-status-reverse"
        : 'dealer-status'

    let dealerStatusText = ''
    if (!isInsuranceRoundComplete && showDealerData.isInsuranceEval) {
        dealerStatusText = 'Checking insurance bets...'
    } else if (isInsuranceRoundComplete && isDealerRoundActive && cardSum <= 17) {
        dealerStatusText = 'Dealer drawing cards...'
    }

    return (


        <>
            {dealerHeaderText}
            <p className={`hide-item ${isDealerCardRevealed ? 'reveal-item' : ''}`}>Sum: {hand.cardSum}</p>
            <div className={dealerStatusClass}>
                <h3 className='dealer-status'>{dealerStatusText}</h3>
            </div>
        </>

    );
}

import { useSelector } from 'react-redux';
import { RootState } from '../../../../../../store/store';
import { useCallback, useEffect, useState } from 'react';
import DealerHeader from './DealerHeader';
import DealerStatus from './DealerStatus';
import { delay } from '../../../../../../utils/Utility';

export interface ShowDealerDataProps {
    isInsuranceEval: boolean;
    isBlackjack: boolean;
}



export default function DealerDetails() {

    const [showDealerData, setShowDealerData] = useState<ShowDealerDataProps>({
        isInsuranceEval: false,
        isBlackjack: false,
    })

    const makeBlackjackTrue = useCallback(() => {
        setShowDealerData((prevDataState) => ({ ...prevDataState, isBlackjack: true }));
    }, []
    )



    const updateIsInsuranceEval = useCallback((booleanInput: boolean) => {
        setShowDealerData((prevDataState) => ({ ...prevDataState, isInsuranceEval: booleanInput }));
    }, []);
    const { isDealerCardRevealed } = useSelector((state: RootState) => state.gameData);
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const isPlayerInsured = playersArr.some(player => player.insuranceBet !== 0)


    const { isBlackjack, isInsuranceEval } = showDealerData

    const { isDealerRoundActive } = useSelector((state: RootState) => state.gameData);
    const dealerObj = useSelector((state: RootState) => state.dealerObj);
    const { hand } = dealerObj;
    const { cardSum, cardUrlVals } = hand

    useEffect(() => {
        console.log('is blackjack is', isBlackjack)
    }, [isBlackjack])
    useEffect(() => {
        console.log('is insurance eval is', isInsuranceEval)
    }, [isInsuranceEval])

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
                if (isDealerCardRevealed && isPlayerInsured) {
                    await delay(1500)
                    setShowDealerData((prevDataState) => ({ ...prevDataState, isInsuranceEval: true }))
                } else {
                    setShowDealerData((prevDataState) => ({ ...prevDataState, isInsuranceEval: false }));
                }
            }
        }
        showIsInsuranceEval();
        return () => { isMounted = false };
    }, [isPlayerInsured, isDealerCardRevealed, isDealerRoundActive]);

    return (

        <>
            <DealerHeader
                showDealerData={showDealerData}
                makeBlackjackTrue={makeBlackjackTrue}
            />
            <p className={`hide-item ${isDealerCardRevealed ? 'reveal-item' : ''}`}>Sum: {cardSum}</p>
            <DealerStatus
                showDealerData={showDealerData}
                updateIsInsuranceEval={updateIsInsuranceEval}
            />
        </>

    );
}

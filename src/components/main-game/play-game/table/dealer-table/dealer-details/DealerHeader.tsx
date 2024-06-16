import {  useSelector } from 'react-redux';
import { RootState } from '../../../../../../store/store';
import { useEffect } from 'react';
import { delay } from '../../../../../../utils/Utility';
import { ShowDealerDataProps } from '../MainDealerDetails';

interface DealerHeaderProps {
    showDealerData: ShowDealerDataProps;
    makeBlackjackTrue: () => void;
}

export default function DealerHeader({ showDealerData, makeBlackjackTrue }: DealerHeaderProps) {

    const { isDealerCardRevealed, isDealerRoundActive } = useSelector((state: RootState) => state.gameData);
    const dealerObj = useSelector((state: RootState) => state.dealerObj);
    const { name, hand } = dealerObj;
    const { cardSum, cardUrlVals } = hand

    useEffect(() => {
        let isMounted = true;
        async function showBlackJack() {
            if (isMounted) {
                await delay(1000);
                cardSum === 21 && cardUrlVals.length === 2 && isDealerCardRevealed
                    && makeBlackjackTrue()
            }
        }
        showBlackJack();
        return () => { isMounted = false };
    }, [isDealerCardRevealed, cardUrlVals, cardSum, makeBlackjackTrue]);

    let dealerHeaderText: string | JSX.Element = name;
    if (showDealerData.isBlackjack) {
        dealerHeaderText = <h3 className=' win-color'>{name} BlackJack!</h3>
    } else if (!isDealerRoundActive && cardSum > 21) {
        dealerHeaderText = <h3 className=' lose-color'>{name} Bust!</h3>
    } else if (!isDealerRoundActive && cardSum >= 17 && cardSum < 21) {
        dealerHeaderText = <h3 className=' stay-color'>{name} Stays</h3>
    } else {
        dealerHeaderText = <h3 className=''>{name}</h3>
    }

    return ( dealerHeaderText );
}

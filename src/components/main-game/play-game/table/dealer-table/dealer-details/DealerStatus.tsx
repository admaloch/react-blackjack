import { useSelector } from 'react-redux';
import { RootState } from '../../../../../../store/store';
import { useEffect } from 'react';
import { delay } from '../../../../../../utils/Utility';
import { ShowDealerDataProps } from '../MainDealerDetails';

interface DealerStatusProps {
    showDealerData: ShowDealerDataProps;
    updateIsInsuranceEval: (booleanInput: boolean) => void;
}

export default function DealerStatus({ showDealerData, updateIsInsuranceEval }: DealerStatusProps) {

    const { isDealerCardRevealed, isInsuranceRoundComplete, isDealerRoundActive } = useSelector((state: RootState) => state.gameData);
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const dealerObj = useSelector((state: RootState) => state.dealerObj);
    const dealerSum = dealerObj.hand.cardSum
    const isPlayerInsured = playersArr.some(player => player.insuranceBet !== 0)

    useEffect(() => {
        let isMounted = true;
        async function showIsInsuranceEval() {
            if (isMounted && isDealerRoundActive) {
                if (isDealerCardRevealed && isPlayerInsured) {
                    await delay(1500)
                    updateIsInsuranceEval(true)
                } else {
                    updateIsInsuranceEval(false)
                }
            }
        }
        showIsInsuranceEval();
        return () => { isMounted = false };
    }, [isPlayerInsured, isDealerCardRevealed, isDealerRoundActive, updateIsInsuranceEval]);

    const dealerStatusClass = isInsuranceRoundComplete
        ? "dealer-status dealer-status-reverse"
        : 'dealer-status'

    let dealerStatusText = ''
    if (!isInsuranceRoundComplete && showDealerData.isInsuranceEval) {
        dealerStatusText = 'Checking insurance bets...'
    } else if (isInsuranceRoundComplete && isDealerRoundActive && isDealerCardRevealed && !showDealerData.isBlackjack && dealerSum < 21) {
        dealerStatusText = 'Dealer drawing cards...'
    } else {
        dealerStatusText = ''
    }

    return (
        <div className={dealerStatusClass}>
            <h3 className='dealer-status'>{dealerStatusText}</h3>
        </div>
    );
}

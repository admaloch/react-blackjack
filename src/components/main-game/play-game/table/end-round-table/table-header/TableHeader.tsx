import { useSelector } from 'react-redux';
import { RootState } from '../../../../../../store/store';
import './TableHeader.css'
import NextRoundBtn from '../final-results/NextRoundBtn';
export default function TableHeader() {

    const { isMainResultsActive, isSplitResultsActive, isRoundActive, isInsuranceRoundComplete, isDealerCardRevealed, isDealerRoundActive } = useSelector((state: RootState) => state.gameData);


    let currText = ''

    // if (!isInsuranceRoundComplete && !isDealerCardRevealed) {
    //     currText = 'Dealer'
    // }
    if (!isInsuranceRoundComplete && isDealerCardRevealed) {
        currText = 'Insurance results...'
    }
    else if (isSplitResultsActive) {
        currText = 'Split hand results...'
    } else if (isMainResultsActive) {
        currText = 'Main hand results...'
    } else if (!isRoundActive) {
        currText = 'Round complete:'
    } else {
        currText = ''
    }

    return (
        <div className="header-btn-container">
            {currText && <h2>{currText}</h2>}
            {!isRoundActive && <NextRoundBtn />}
        </div>

    )
}

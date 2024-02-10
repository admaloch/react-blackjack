import { useSelector } from 'react-redux';
import { RootState } from '../../../../../../store/store';
import './TableHeader.css'
export default function TableHeader() {

    const { isMainResultsActive, isSplitResultsActive, roundsPlayed, isRoundActive } = useSelector((state: RootState) => state.gameData);

    // const currText = isSplitResultsActive ? 'Split hand results...' : 'Main hand results...'

    let currText = ''
    if (isSplitResultsActive) {
        currText = 'Split hand results...'
    } else if (isMainResultsActive) {
        currText = 'Main hand results...'
    } else if (!isRoundActive) {
        currText = 'Round complete'
    } else {
        currText = ''
    }

    return (
        <div className="header-btn-container">
            {currText && <h2>{currText}</h2>}
            {/* <h3>Stay here</h3> */}
        </div>

    )
}

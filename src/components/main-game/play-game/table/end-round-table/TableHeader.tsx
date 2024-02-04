import { useSelector } from 'react-redux';
import { RootState } from '../../../../../store/store';

export default function TableHeader() {

    const { isMainResultsActive, isSplitResultsActive } = useSelector((state: RootState) => state.gameData);

    const currText = isSplitResultsActive ? 'Split hand results...' : 'Main hand results...'
    const currClass = isMainResultsActive || isSplitResultsActive ? 'reveal-item' : 'hide-item'

    return <h2 className={currClass}>{currText}</h2>
}

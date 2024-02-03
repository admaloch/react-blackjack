import { useSelector } from 'react-redux';
import { RootState } from '../../../../../store/store';

export default function TableHeader() {

    const { isMainResultsActive, isSplitResultsActive } = useSelector((state: RootState) => state.gameData);

    return (
        <>
            <h2
                style={isMainResultsActive ? { opacity: 1 } : { opacity: 0 }}>Main hand results...
            </h2>
            <h2
                style={isSplitResultsActive ? { opacity: 1 } : { opacity: 0 }}>Split hand results...
            </h2>
        </>
    )
}

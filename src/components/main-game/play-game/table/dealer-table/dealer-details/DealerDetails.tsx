import { useSelector } from 'react-redux';
import { RootState } from '../../../../../../store/store';
import MainDealerDetails from '../MainDealerDetails';

export default function DealerDetails() {

    const { isPlayerRoundActive } = useSelector((state: RootState) => state.gameData);

    return (
        <div className="dealer-details">
            {isPlayerRoundActive
                ? <h2>Dealer</h2>
                : <MainDealerDetails />
            }
        </div>
    );
}

import { useSelector } from 'react-redux';
import { RootState } from '../../../../../../store/store';
import MainDealerDetails from '../MainDealerDetails';

export default function DealerDetails() {

    const { isPlayerRoundActive } = useSelector((state: RootState) => state.gameData);

    return (
        <div className="dealer-details">
            {isPlayerRoundActive
                ? <h3>Dealer</h3>
                : <MainDealerDetails />
            }
        </div>
    );
}

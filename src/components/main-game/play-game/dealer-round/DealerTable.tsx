
import Cards from '../display-cards/Cards';

import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';

// interface DealerTableProps {
//   isPlayerFinished: boolean;
// }

export default function DealerTable() {
  const dealerObj = useSelector((state: RootState) => state.dealerObj);

  return (
    <div className="dealer-table">
      <h4>Dealer</h4>
      <Cards
        cardUrlVals={dealerObj.hand.cardUrlVals}
      />
    </div>
  )
}

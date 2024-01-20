// DealerTable.tsx
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import Cards from '../display-cards/Cards';
import useDealerDrawCard from '../../draw-cards-hook/useDealerDrawCard';

const DealerTable: React.FC = () => {
  const dealerObj = useSelector((state: RootState) => state.dealerObj);

  // Use the same hook instance throughout the component
  const dealerDraw = useDealerDrawCard()

  useEffect(() => {
    if (dealerObj.hand.cards.length === 0 || dealerObj.hand.cards.length === 1) {
      setTimeout(() => {
        dealerDraw();
      }, 300);
    }
  }, [dealerObj, dealerDraw]);

  return (
    <div className="dealer-table">
      <h4>Dealer</h4>
      <Cards cardUrlVals={dealerObj.hand.cardUrlVals} />
    </div>
  );
};

export default DealerTable;
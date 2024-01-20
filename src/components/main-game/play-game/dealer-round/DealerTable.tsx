
import { useEffect } from 'react';

import Cards from '../display-cards/Cards';

import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import useDealerDrawCard from '../../draw-cards-hook/useDealerDrawCard';


export default function DealerTable() {
  const dealerObj = useSelector((state: RootState) => state.dealerObj);

  const dealerDraw = useDealerDrawCard();



  useEffect(() => {
    if (dealerObj.hand.cards.length === 0 || dealerObj.hand.cards.length === 1) {
      setTimeout(() => {
        dealerDraw()
      }, 1000);
    }
  }, [dealerObj, dealerDraw]);




  return (
    <div className="dealer-table">
      <h4>Dealer</h4>
      <Cards
        cardUrlVals={dealerObj.hand.cardUrlVals}
      />
    </div>
  )
}

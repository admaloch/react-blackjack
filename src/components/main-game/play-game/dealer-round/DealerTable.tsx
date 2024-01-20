
import { useEffect } from 'react';
import useDrawCards from '../../draw-cards-hook/useDrawCards';
import Cards from '../display-cards/Cards';

import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';



export default function DealerTable() {
  const dealerObj = useSelector((state: RootState) => state.dealerObj);

  const dealerDraw = useDrawCards('dealer');



  // useEffect(() => {
  //   if (dealerObj.hand.cards.length === 0) {
  //     setTimeout(() => {
  //       dealerDraw()
  //     }, 1000);
  //   }
  //   if (dealerObj.hand.cards.length === 1) {
  //     setTimeout(() => {
  //       dealerDraw()
  //     }, 500);
  //   }
  // }, [dealerObj]);




  return (
    <div className="dealer-table">
      <h4>Dealer</h4>
      <Cards
        cardUrlVals={dealerObj.hand.cardUrlVals}
      />
    </div>
  )
}

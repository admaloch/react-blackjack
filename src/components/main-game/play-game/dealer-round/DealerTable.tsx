// DealerTable.tsx
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import Cards from '../display-cards/Cards';
import useDealerDrawCard from '../../draw-cards-hook/useDealerDrawCard';
import './DealerTable.css'
import HiddenCard from './HiddenCard';
import { delay } from '../../../../utils/Utility';
import DealerDetails from './DealerDetails';

const DealerTable: React.FC = () => {
  const dealerObj = useSelector((state: RootState) => state.dealerObj);
  const { cards, cardSum } = dealerObj.hand
  const { isPlayerRoundActive, isDealerCardRevealed } = useSelector((state: RootState) => state.gameData);
  const [isCardRevealed, setIsCardRevealed] = useState(false)
  const revealCard = () => setIsCardRevealed(true)
  // Use the same hook instance throughout the component
  const dealerDraw = useDealerDrawCard()


  // useEffect(() => {
  //   if (cards.length === 0 || cards.length === 1) {
  //     setTimeout(() => {
  //       dealerDraw();
  //     }, 300);
  //   }
  // }, [cards, dealerDraw]);

  useEffect(() => {
    async function drawDealerCards() {
      if (isDealerCardRevealed && cardSum < 17) {
       await delay(2000)
        dealerDraw();
      }
    }
     drawDealerCards()
  }, [cardSum, dealerDraw, isDealerCardRevealed]);


  useEffect(() => {
    console.log('dealer hand ', dealerObj.hand.cards)
  }, [dealerObj.hand.cards])


  return (
    <div className="dealer-table">

      <div className="dealer-hand">

      <DealerDetails/>
        <div className="dealer-cards">
          <HiddenCard/>
          <Cards cardUrlVals={dealerObj.hand.cardUrlVals} />
        </div>

      </div>

    </div>
  );
};

export default DealerTable;
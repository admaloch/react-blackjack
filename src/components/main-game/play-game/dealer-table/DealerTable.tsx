// DealerTable.tsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import Cards from '../display-cards/Cards';
import useDealerDrawCard from '../../draw-cards-hook/useDealerDrawCard';
import './DealerTable.css'
import { beginDealerDrawing, endDealerRound } from '../../../../store/game-data/GameDataSlice';
import HiddenCard from './HiddenCard';
import { delay } from '../../../../utils/Utility';
import DealerDetails from './DealerDetails';
import { updateIsInsuranceRoundComplete } from '../../../../store/game-data/GameDataSlice';

const DealerTable: React.FC = () => {
  const dealerObj = useSelector((state: RootState) => state.dealerObj);
  const { isInsuranceRoundComplete } = useSelector((state: RootState) => state.gameData);
  const { cards, cardSum } = dealerObj.hand
  const cardLength = cards.length
  const { isPlayerRoundActive, isDealerCardRevealed, isDealerRoundActive } = useSelector((state: RootState) => state.gameData);
  const [isCardRevealed, setIsCardRevealed] = useState(false)
  const revealCard = () => setIsCardRevealed(true)
  // Use the same hook instance throughout the component
  const dealerDraw = useDealerDrawCard()
  const dispatch = useDispatch()

  // useEffect(() => {
  //   if (cardLength === 0 || cardLength === 1) {
  //     setTimeout(() => {
  //       dealerDraw();
  //     }, 300);
  //   }
  // }, [cards, dealerDraw]);

  // useEffect(() => {
  //   if (isDealerCardRevealed && dealerObj.hand.cardNumVals[1] === 11) {
  //     dispatch(updateIsInsuranceRoundComplete())
  //   }
  // }, [isDealerCardRevealed, dealerObj.hand.cardNumVals, dispatch, cardLength])



  useEffect(() => {
    async function mainDealerDrawRound() {
      await delay(2000)
      if (isDealerCardRevealed && cardSum < 17 && isInsuranceRoundComplete) {
        dispatch(beginDealerDrawing())
        dealerDraw();
      } else if (cardSum >= 17 && isInsuranceRoundComplete) {
        dispatch(endDealerRound())
      }
    }
    mainDealerDrawRound()
  }, [cardSum, dealerDraw, isDealerCardRevealed, isInsuranceRoundComplete, isDealerRoundActive, dispatch]);





  return (
    <div className="dealer-table">

      <div className="dealer-hand">

        <DealerDetails />
        <div className="dealer-cards">
          <HiddenCard />
          <Cards cardUrlVals={dealerObj.hand.cardUrlVals} />
        </div>

      </div>

    </div>
  );
};

export default DealerTable;
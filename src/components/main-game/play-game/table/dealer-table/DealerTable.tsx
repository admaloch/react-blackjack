// DealerTable.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../store/store';
import Cards from '../../display-cards/Cards';
import useDealerDrawCard from '../../../draw-cards-hook/useDealerDrawCard';
import './DealerTable.css'
import { beginDealerDrawing, beginInsuranceRound, endDealerAndRound, endDealerRound, endInsuranceRound, updateGameObj } from '../../../../../store/game-data/GameDataSlice';
import HiddenCard from './hidden-card/HiddenCard';
import { delay } from '../../../../../utils/Utility';
import DealerDetails from './dealer-details/DealerDetails';
import DeckOfCardsSvg from '../../../../../assets/DeckOfCardsSvg';

const DealerTable: React.FC = () => {

  const dealerObj = useSelector((state: RootState) => state.dealerObj);
  const playersArr = useSelector((state: RootState) => state.playersArr);
  const gameData = useSelector((state: RootState) => state.gameData);

  const { isInsuranceRoundComplete, isDealerCardRevealed, isDealerRoundActive, isPlayerRoundActive, roundsPlayed, isGameIntro, isAddPlayersRound, isBetRoundActive } = gameData
  const { cards, cardSum } = dealerObj.hand
  const cardLength = cards.length
  // const [isCardRevealed, setIsCardRevealed] = useState(false)
  // const revealCard = () => setIsCardRevealed(true)
  // Use the same hook instance throughout the component
  const dealerDraw = useDealerDrawCard()
  const dispatch = useDispatch()

  const isShowRoundsPlayed = !isGameIntro && !isAddPlayersRound && !isBetRoundActive
  const playerHasInsurance = playersArr.some(x => x.insuranceBet !== 0)
  const allPlayersWonInsurance = playersArr.every(x => x.wonInsuranceRound)




  useEffect(() => {
    let isMounted = true
    async function initDealerDraw() {
      if (isMounted) {
        if (isPlayerRoundActive) {
          if (cardLength === 0) {
            dealerDraw();
          }
          if (cardLength === 1) {
            await delay(300)
            dealerDraw();
          }
        }
      }
    }
    initDealerDraw()
    return () => { isMounted = false }
  }, [cards, dealerDraw, cardLength, isPlayerRoundActive]);



  useEffect(() => {
    if (isDealerRoundActive) {
      if (playerHasInsurance && isDealerCardRevealed) {
        dispatch(beginInsuranceRound())
      } else if (!isInsuranceRoundComplete && !playerHasInsurance) {
        dispatch(endInsuranceRound())
      }
    }

  }, [playerHasInsurance, isDealerCardRevealed, dispatch, isInsuranceRoundComplete, isDealerRoundActive])




  useEffect(() => {
    let isMounted = true;
    async function mainDealerDrawRound() {
      if (isMounted) {
        if (isDealerRoundActive) {
          if (isDealerCardRevealed && cardSum < 17 && isInsuranceRoundComplete) {
            await delay(1500);
            dispatch(beginDealerDrawing());
            dealerDraw();
          } else if (cardSum >= 17 && isInsuranceRoundComplete && isDealerCardRevealed) {

            await delay(1500);
            allPlayersWonInsurance
              ? dispatch(endDealerAndRound())
              : dispatch(endDealerRound())
          }
        }
      }
    }
    mainDealerDrawRound();
    return () => { isMounted = false };
  }, [cardSum, dealerDraw, isDealerCardRevealed, isInsuranceRoundComplete, isDealerRoundActive, dispatch, allPlayersWonInsurance]);






  return (
    <div className="dealer-table">
      <DeckOfCardsSvg className='full-deck-image' />
      <div className="dealer-hand">
        {isShowRoundsPlayed && <h3 className='rounds-played'>Round {roundsPlayed}</h3>}

        <DealerDetails />
        <div className="dealer-cards">
          {!isDealerCardRevealed &&
            <HiddenCard />
          }
          <Cards
            cardUrlVals={dealerObj.hand.cardUrlVals}
            isDealerCardRevealed={isDealerCardRevealed}
          />
        </div>
      </div>
    </div>
  );
};

export default DealerTable;
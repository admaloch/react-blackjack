import { useDispatch } from 'react-redux';
import { updatePlayer } from '../../../../../store/player-arr/playersArrSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../store/store';
import PlayerIndexProps from '../../../../../models/PlayerIndexProps';
import { Hand } from '../../../../../models/PlayerProps';
import { delay } from '../../../../../utils/Utility';



export default function Split({ playerIndex, drawCardsRef }: PlayerIndexProps) {
  const dispatch = useDispatch();
  const playersArr = useSelector((state: RootState) => state.playersArr);
  const currPlayer = playersArr[playerIndex];
  const { hand } = currPlayer;
  const deck = useSelector((state: RootState) => state.deck);


  const splitHandler = async () => {
    const mainHand: Hand = {
      ...hand,
      cards: [hand.cards[0]],
      cardNumVals: [hand.cardNumVals[0]],
      cardUrlVals: [hand.cardUrlVals[0]],
      cardSum: hand.cardNumVals[0],
    };

    const splitHand: Hand = {
      ...hand,
      cards: [hand.cards[1]],
      cardNumVals: [hand.cardNumVals[1]],
      cardUrlVals: [hand.cardUrlVals[1]],
      cardSum: hand.cardNumVals[1],
    };

    dispatch(
      updatePlayer({
        ...currPlayer,
        hand: mainHand,
        splitHand: splitHand,
        splitBet: currPlayer.currBet,
        isPlayerSplit: true,
        bank: currPlayer.bank - currPlayer.currBet,
      })
    );

    await delay(1000);
    drawCardsRef.current.click()

  };


  return (
    <div className="player-btn-container">
      <button className="game-btn split-btn" onClick={splitHandler}>
        Split
      </button>
    </div>
  );
}

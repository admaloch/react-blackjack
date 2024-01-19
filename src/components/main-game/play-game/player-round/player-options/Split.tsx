import { useDispatch } from 'react-redux';
import { updatePlayer } from '../../../../../store/player-arr/playersArrSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../store/store';
import PlayerIndexProps from '../../../../../models/PlayerIndexProps';
import { Hand } from '../../../../../models/PlayerProps';
import { delay } from '../../../../../utils/Utility';
import useDrawCards from '../../../draw-cards-hook/useDrawCards';


export default function Split({ playerIndex }: PlayerIndexProps) {
  const dispatch = useDispatch();
  const playersArr = useSelector((state: RootState) => state.playersArr);
  const currPlayer = playersArr[playerIndex];
  const { hand } = currPlayer;
  const playerDraw = useDrawCards('player', playerIndex);


  const splitHandler = async () => {
    await delay(500);
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



  };
  if (currPlayer.isPlayerSplit
    && currPlayer.hand.cards.length === 1) {
    setTimeout(() => {
      playerDraw()
    }, 500);
  }


  return (
    <div className="player-btn-container">
      <button className="game-btn split-btn" onClick={splitHandler}>
        Split
      </button>
    </div>
  );
}

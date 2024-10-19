import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';
import { RootState } from '../../../../../../store/store';
import PlayerIndexProps from '../../../../../../models/PlayerIndexProps';
import { delay } from '../../../../../../utils/Utility';
import { splitPlayerHand } from '../../../../../../store/player-arr/PlayersArrSlice';

export default function Split({ playerIndex }: PlayerIndexProps) {

  const dispatch = useDispatch();
  const playersArr = useSelector((state: RootState) => state.playersArr);
  const currPlayer = playersArr[playerIndex];
  const { hand } = currPlayer;
  let isCardRanksEqual = false
  if (hand.cards.length === 2) {
    const cardRanks = hand.cards.map(x => x.slice(0, 1))
    if (cardRanks[0] === cardRanks[1]
      && currPlayer.splitHand.cards.length === 0
      && currPlayer.bank >= currPlayer.currBet) {
      isCardRanksEqual = true
    }
  }

  if (!isCardRanksEqual) return;

  const splitHandler = async () => {
    await delay(500);
    dispatch(splitPlayerHand(playerIndex))
  };

  return (
    <div className="player-btn-container">
      <button className="game-btn split-btn" onClick={splitHandler}>
        Split
      </button>
    </div>
  );
}

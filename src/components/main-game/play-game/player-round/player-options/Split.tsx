import { useDispatch } from 'react-redux';
import { updatePlayer } from '../../../../../store/player-arr/playersArrSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../store/store';
import PlayerIndexProps from '../../../../../models/PlayerIndexProps';
import drawCards from '../../../draw-cards-hook/drawCards';

export default function Split({ playerIndex }: PlayerIndexProps) {
    const dispatch = useDispatch();
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const currPlayer = playersArr[playerIndex];
    const { hand } = currPlayer;
    const deck = useSelector((state: RootState) => state.deck);

    const splitHandler = () => {
        const mainHand = {
            ...hand,
            cards: [hand.cards[0]],
            cardNumVals: [hand.cardNumVals[0]],
            cardUrlVals: [hand.cardUrlVals[0]],
        };
        const splitHand = {
            ...hand,
            cards: [hand.cards[1]],
            cardNumVals: [hand.cardNumVals[1]],
            cardUrlVals: [hand.cardUrlVals[1]],
        };
        dispatch(
            updatePlayer({
                ...playersArr[playerIndex],
                hand: mainHand,
                splitHand: splitHand,
                splitBet: currPlayer.currBet,
                isPlayerSplit: true,
                bank: currPlayer.bank - currPlayer.currBet,
            })
        );

        // const newPlayerHand = drawCards(mainHand, deck);
        // setTimeout(() => {
        //     dispatch(
        //         updatePlayer({
        //             ...currPlayer,
        //             hand: newPlayerHand,
        //         })
        //     );
        // }, 5000);
    };





    return (
        <div className="player-btn-container">
            <button className="game-btn split-btn" onClick={splitHandler}>
                Split
            </button>
        </div>
    );
}

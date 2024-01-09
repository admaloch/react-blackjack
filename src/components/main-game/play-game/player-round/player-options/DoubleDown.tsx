import { useDispatch } from 'react-redux';
import { updatePlayer } from "../../../../../store/player-arr/playersArrSlice";
import { useSelector } from 'react-redux';
import { RootState } from "../../../../../store/store";
import drawCards from "../../../draw-cards-hook/drawCards";
import PlayerIndexProps from '../../../../../models/PlayerIndexProps';



export default function DoubleDown({playerIndex}: PlayerIndexProps) {

    const deck = useSelector((state: RootState) => state.deck);
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const currPlayer = playersArr[playerIndex]
    const { hand } = currPlayer
    const dispatch = useDispatch();

    const doubleDownStyle = {
        display: hand.cards.length > 2 && currPlayer.bank >= currPlayer.currBet
            ? 'none'
            : 'block',
    };

    const doubleDownHandler = () => {
        const newPlayerHand = drawCards(hand, deck);
        setTimeout(() => {
            dispatch(updatePlayer({
                ...currPlayer,
                hand: newPlayerHand,
                currBet: currPlayer.currBet * 2,
                bank: currPlayer.bank - currPlayer.currBet,
                isDoubleDown: true,
            }));
        }, 350);
    }
    
    return (
        <div className="player-btn-container">
            <button
                style={doubleDownStyle}
                onClick={doubleDownHandler}
                className="game-btn double-btn">Double Down
            </button>
        </div>
    )
}

import { useSelector } from 'react-redux';
import { RootState } from "../../../../../../store/store";
import PlayerIndexProps from '../../../../../../models/PlayerIndexProps';
import { useDispatch } from 'react-redux';
import { updateDoubleDownHand } from '../../../../../../store/player-arr/playersArrSlice';

export default function DoubleDownBtn({ playerIndex }: PlayerIndexProps) {

    const playersArr = useSelector((state: RootState) => state.playersArr);
    const currPlayer = playersArr[playerIndex]
    const { hand, currBet, bank } = currPlayer
    const dispatch = useDispatch();

    const doubleDownStyle = {
        display: hand.cards.length > 2 && bank >= currBet
            ? 'none'
            : 'block',
    };

    // const doubleDownHandler = () => {
    //     dispatch(updateDoubleDownHand(playerIndex))
    // };

    return (
        <button
            style={doubleDownStyle}
            onClick={() => dispatch(updateDoubleDownHand(playerIndex))
            }
            className="game-btn double-btn">Double Down
        </button>
    )
}

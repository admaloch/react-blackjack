import { useSelector } from 'react-redux';
import { RootState } from "../../../../../store/store";
import PlayerIndexProps from '../../../../../models/PlayerIndexProps';
import { useDispatch } from 'react-redux';
import { updatePlayer } from '../../../../../store/player-arr/playersArrSlice';

export default function DoubleDownBtn({ playerIndex }: PlayerIndexProps) {

    const playersArr = useSelector((state: RootState) => state.playersArr);
    const currPlayer = playersArr[playerIndex]
    const {  hand, currBet, bank } = currPlayer
    const dispatch = useDispatch();

    const doubleDownStyle = {
        display: hand.cards.length > 2 && bank >= currBet
            ? 'none'
            : 'block',
    };

    const doubleDownHandler = async () => {
        let updatedPlayer = { ...currPlayer };
        if (updatedPlayer.splitHand.cards.length < 2) {
            updatedPlayer = {
                ...updatedPlayer,
                isDoubleDown: true,
                currBet: currPlayer.currBet * 2,
                bank: currPlayer.bank - currPlayer.currBet,
            };
        } else {
            updatedPlayer = {
                ...updatedPlayer,
                isDoubleDown: true,
                splitBet: currPlayer.splitBet * 2,
                bank: currPlayer.bank - currPlayer.splitBet,
            };
        }
        dispatch(updatePlayer(updatedPlayer));
    };

    return (
        <button
            style={doubleDownStyle}
            onClick={doubleDownHandler}
            className="game-btn double-btn">Double Down
        </button>
    )
}

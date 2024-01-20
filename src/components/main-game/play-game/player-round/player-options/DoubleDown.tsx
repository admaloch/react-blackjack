import { useSelector } from 'react-redux';
import { RootState } from "../../../../../store/store";
import PlayerIndexProps from '../../../../../models/PlayerIndexProps';
import { useDispatch } from 'react-redux';
import { updatePlayer } from '../../../../../store/player-arr/playersArrSlice';
import { useEffect } from 'react';
import usePlayerDrawCard from '../../../draw-cards-hook/usePlayerDrawCard';


export default function DoubleDown({ playerIndex }: PlayerIndexProps) {

    const playerDraw = usePlayerDrawCard(playerIndex)
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const currPlayer = playersArr[playerIndex]
    const { hand, currBet, bank, isDoubleDown } = currPlayer
    const dispatch = useDispatch();


    const doubleDownStyle = {
        display: hand.cards.length > 2 && bank >= currBet
            ? 'none'
            : 'block',
    };

    const doubleDownHandler = async () => {
        dispatch(updatePlayer({ ...currPlayer, isDoubleDown: true, currBet: currBet * 2, bank: bank - currBet }));
    }

    useEffect(() => {
        if (isDoubleDown && hand.cards.length === 2) {
            setTimeout(() => {
                playerDraw()
            }, 1000);
        }
    }, [isDoubleDown, hand, playerDraw])


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

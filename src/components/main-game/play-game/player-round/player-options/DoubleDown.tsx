import { useSelector } from 'react-redux';
import { RootState } from "../../../../../store/store";
import PlayerIndexProps from '../../../../../models/PlayerIndexProps';
import useDrawCards from '../../../draw-cards-hook/useDrawCards';
import { useDispatch } from 'react-redux';
import { updatePlayer } from '../../../../../store/player-arr/playersArrSlice';
import { useEffect } from 'react';


export default function DoubleDown({ playerIndex }: PlayerIndexProps) {

    const playerDraw = useDrawCards('player', playerIndex);
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const currPlayer = playersArr[playerIndex]
    const { hand } = currPlayer
    const dispatch = useDispatch();


    const doubleDownStyle = {
        display: hand.cards.length > 2 && currPlayer.bank >= currPlayer.currBet
            ? 'none'
            : 'block',
    };

    const doubleDownHandler = async () => {
        dispatch(updatePlayer({ ...currPlayer, isDoubleDown: true }));
    }

    useEffect(() => {
        if (currPlayer.isDoubleDown && currPlayer.hand.cards.length === 2) {
            setTimeout(() => {
                console.log('double down effect ran')
                playerDraw()
            }, 1000);
        }
    }, [playersArr, playerIndex])


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

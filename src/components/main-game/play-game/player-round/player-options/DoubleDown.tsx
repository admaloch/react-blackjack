import { useSelector } from 'react-redux';
import { RootState } from "../../../../../store/store";
import PlayerIndexProps from '../../../../../models/PlayerIndexProps';
import useDrawCards from '../../../draw-cards-hook/useDrawCards';
import { delay } from '../../../../../utils/Utility';
import { useDispatch } from 'react-redux';
import { updatePlayer } from '../../../../../store/player-arr/playersArrSlice';
import { useEffect } from 'react';
import DoubleDownBtn from './DoubleDownBtn';
import drawCards from '../../../draw-cards-hook/drawCards';

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

    // useEffect(() => {
    //     async function drawAfterDoubleDown() {
    //         await delay(1000)
    //         playerDraw()
    //     }
    //     if (currPlayer.isDoubleDown && currPlayer.hand.cards.length === 2) {
    //         drawAfterDoubleDown()
    //     }
    // }, [playersArr])
    if (currPlayer.isDoubleDown && currPlayer.hand.cards.length === 2) {
        setTimeout(() => {
            playerDraw()
        }, 500);

    }


    return (
        <div className="player-btn-container">
            <button
                style={doubleDownStyle}
                onClick={doubleDownHandler}
                className="game-btn double-btn">Double Down
            </button>
            {/* <DoubleDownBtn
            playerIndex={playerIndex}
            isDoubleDownTrue={isDoubleDownTrue}
            /> */}

        </div>
    )
}

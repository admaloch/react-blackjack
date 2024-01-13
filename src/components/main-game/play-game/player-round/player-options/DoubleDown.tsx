import { useSelector } from 'react-redux';
import { RootState } from "../../../../../store/store";
import PlayerIndexProps from '../../../../../models/PlayerIndexProps';
import useDrawCards from '../../../draw-cards-hook/useDrawCards';
import { delay } from '../../../../../utils/Utility';

export default function DoubleDown({playerIndex}: PlayerIndexProps) {

    const playerDraw = useDrawCards('player', playerIndex);
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const currPlayer = playersArr[playerIndex]
    const { hand } = currPlayer

    const doubleDownStyle = {
        display: hand.cards.length > 2 && currPlayer.bank >= currPlayer.currBet
            ? 'none'
            : 'block',
    };

    const doubleDownHandler = async () => {
            await delay(250)
            playerDraw()
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

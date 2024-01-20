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
    const { splitBet, hand, currBet, bank, isDoubleDown } = currPlayer
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
    
    useEffect(() => {
        if (isDoubleDown && hand.cards.length === 2) {
            setTimeout(() => {
                playerDraw()
            }, 300);
        }
    }, [isDoubleDown, hand, playerDraw])

    return (
        <div className="player-btn-container">
            {hand.cards.length === 2 &&
                <button
                    style={doubleDownStyle}
                    onClick={doubleDownHandler}
                    className="game-btn double-btn">Double Down
                </button>
            }
        </div>
    )
}

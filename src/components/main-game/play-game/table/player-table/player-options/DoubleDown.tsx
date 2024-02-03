import { useSelector } from 'react-redux';
import { RootState } from "../../../../../../store/store";
import PlayerIndexProps from '../../../../../../models/PlayerIndexProps';

import { useEffect } from 'react';
import usePlayerDrawCard from '../../../../draw-cards-hook/usePlayerDrawCard';
import DoubleDownBtn from './DoubleDownBtn';


export default function DoubleDown({ playerIndex }: PlayerIndexProps) {

    const playerDraw = usePlayerDrawCard(playerIndex)
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const currPlayer = playersArr[playerIndex]
    const { hand, isDoubleDown } = currPlayer



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
                <DoubleDownBtn playerIndex={playerIndex} />
            }
        </div>
    )
}

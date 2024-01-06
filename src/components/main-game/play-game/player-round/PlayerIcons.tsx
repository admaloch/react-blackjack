import { useState } from "react"
import { DrawCardsIconWithPopper } from "../../../UI/icons/DrawCardsIconWithPopper"
import { useDispatch } from 'react-redux';
import { updatePlayer } from "../../../../store/player-arr/playersArrSlice";
import { useSelector } from 'react-redux';
import { RootState } from "../../../../store/store";
import drawCards from "../../draw-cards-hook/drawCards";

interface PlayerIconsProps {
    playerIndex: number
}

export default function PlayerIcons({ playerIndex }: PlayerIconsProps) {
    const deck = useSelector((state: RootState) => state.deck);
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const dispatch = useDispatch();

    const doubleUpStyle = {
        display: playersArr[playerIndex].hand.cards.length > 2 ? 'none' : 'block',
    };

    const drawCardsHandler = () => {
        const newPlayerHand = drawCards(playersArr[playerIndex].hand, deck);
        setTimeout(() => {
            dispatch(updatePlayer({
                ...playersArr[playerIndex],
                hand: newPlayerHand,
            }));
        }, 500);
    }

    const doubleUpHandler = () => {
        const newPlayerHand = drawCards(playersArr[playerIndex].hand, deck);
        setTimeout(() => {
            dispatch(updatePlayer({
                ...playersArr[playerIndex],
                hand: newPlayerHand,
                bank: playersArr[playerIndex].bank / 2,
                currBet: playersArr[playerIndex].currBet * 2,
                isDoubleUp: true,
            }));
        }, 500);

    }

    return (
        <div className='icon-container'>
            <div
                onClick={drawCardsHandler}
                className="draw-cards-icon">
                <DrawCardsIconWithPopper placement="top" />

            </div>
            <button
                style={doubleUpStyle}
                onClick={doubleUpHandler}
                className="game-btn double-btn">Double Up?</button>
        </div>
    )
}

import Modal from "../../../UI/modal/Modal";
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { useState, useEffect } from 'react';


interface EndOfTurnModalProps {
    playerIndex: number;
    isPlayerFinished: boolean;
    startRound: () => void;
    endRound: () => void;
    nextPlayerHandler: () => void;
}



export default function EndOfTurnModal({ playerIndex, isPlayerFinished, endRound, startRound, nextPlayerHandler }: EndOfTurnModalProps) {

    const playersArr = useSelector((state: RootState) => state.playersArr);

    const { hand } = playersArr[playerIndex]

    let modalContents: string = ''

    useEffect(() => {

        if (hand.cardSum > 21) {
            endRound()
            nextPlayerHandler()
        }
        if (hand.cards.length === 2 && hand.cardSum === 21) {
            endRound()
            nextPlayerHandler()
        }
    }, [playersArr])

    if (hand.cardSum > 21) {
        modalContents = 'Player Bust'
    } else if (hand.cards.length === 2 && hand.cardSum === 21) {
        modalContents = 'Blackjack!'
    } else {
        modalContents = 'Player stayed!'
    }

    return (
        <Modal
            closeModal={startRound}
            open={isPlayerFinished}
        >
            <div className="end-turn-modal">
                <h2>{modalContents}</h2>
                <button className="game-btn">Next player</button>
            </div>
        </Modal>
    )
}

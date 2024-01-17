import Modal from "../../../UI/modal/Modal";
import { useSelector } from "react-redux"
import { useEffect } from 'react';
import { RootState } from "../../../../store/store";

interface EndOfTurnModalProps {
    playerIndex: number;
    isPlayerFinished: boolean;
    startRound: () => void;
    endRound: () => void;
    changeToNextPlayer: () => void;
}

export default function EndOfTurnModal({ playerIndex, isPlayerFinished, endRound, startRound, changeToNextPlayer }: EndOfTurnModalProps) {

    const playersArr = useSelector((state: RootState) => state.playersArr);
    const currPlayer = playersArr[playerIndex]
    const { hand, name } = currPlayer




    useEffect(() => {

        if (hand.cardSum > 21
            || hand.cards.length === 2 && hand.cardSum === 21
            || hand.cards.length === 3 && currPlayer.isDoubleDown) {
            setTimeout(() => {
                endRound()
            }, 1000)
        }
    }, [playersArr])

    let modalHeader: string = ''

    if (hand.cardSum > 21) {
        modalHeader = 'Bust!'
    } else if (hand.cards.length === 2 && hand.cardSum === 21) {
        modalHeader = 'Blackjack!'
    } else if (hand.cards.length === 3 && hand.cardSum < 21 && currPlayer.isDoubleDown) {
        modalHeader = `${name} doubled up`
    } else {
        modalHeader = `${name} stands`
    }

    let modalButton: string = ''

    if (playersArr.length - 1 !== playerIndex) {
        modalButton = `Begin ${playersArr[playerIndex + 1].name}'s turn`
    } else {
        modalButton = 'Begin dealer round'
    }


    const nextPlayerHandler = () => {
        if (playersArr.length - 1 !== playerIndex) {
            setTimeout(() => {
                modalButton = `Begin ${playersArr[playerIndex + 1].name}'s turn`
                startRound()
                changeToNextPlayer()
            }, 300)
        } else {
            modalButton = 'Begin dealer round'
        }
    };

    return (
        <Modal
            closeModal={startRound}
            open={isPlayerFinished}
        >
            <div className="end-turn-modal">
                <h2>{modalHeader}</h2>

                <div className="end-turn-stats">
                    {currPlayer.isDoubleDown
                        ? <h3>Doubled bet: {currPlayer.currBet}</h3>
                        : <h3>Bet: {currPlayer.currBet}</h3>
                    }
                    <h3>Bank: {currPlayer.bank}</h3>
                    <h3>Final Sum: {hand.cardSum}</h3>
                </div>

                <button
                    onClick={() => nextPlayerHandler()}
                    className="game-btn">{modalButton}
                </button>
            </div>
        </Modal>
    )
}

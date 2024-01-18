import Modal from "../../../UI/modal/Modal";
import { useSelector } from "react-redux"
import { useEffect } from 'react';
import { RootState } from "../../../../store/store";
import ResultsModalContents from "./ResultsModalContent";

interface EndOfTurnResultsProps {
    playerIndex: number;
    isPlayerFinished: boolean;
    startRound: () => void;
    endRound: () => void;
    changeToNextPlayer: () => void;
}

export default function EndOfTurnResults({ playerIndex, isPlayerFinished, endRound, startRound, changeToNextPlayer }: EndOfTurnResultsProps) {


    const playersArr = useSelector((state: RootState) => state.playersArr);
    const currPlayer = playersArr[playerIndex]
    const { hand } = currPlayer

    useEffect(() => {
        if (hand.cardSum > 21
            || hand.cards.length === 2 && hand.cardSum === 21
            || hand.cards.length === 3 && currPlayer.isDoubleDown) {
            setTimeout(() => {
                endRound()
            }, 1000)
        }
    }, [playersArr])

    return (
        <Modal
            closeModal={startRound}
            open={isPlayerFinished}
        >
            <ResultsModalContents
                playerIndex={playerIndex}
                startRound={startRound}
                changeToNextPlayer={changeToNextPlayer}
   

            />
        </Modal>
    )
}

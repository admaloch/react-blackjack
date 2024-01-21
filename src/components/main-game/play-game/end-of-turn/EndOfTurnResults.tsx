import { useEffect } from 'react';
import { RootState } from "../../../../store/store";
import ResultsModal from "./ResultsModal";
import { useSelector } from 'react-redux';

interface EndOfTurnResultsProps {
    playerIndex: number;
    isPlayerFinished: boolean;
    makePlayerFinished: () => void;
    endRound: () => void;
    changeToNextPlayer: () => void;
}

export default function EndOfTurnResults({ playerIndex, isPlayerFinished, endRound, makePlayerFinished, changeToNextPlayer }: EndOfTurnResultsProps) {

    const playersArr = useSelector((state: RootState) => state.playersArr);
    const currPlayer = playersArr[playerIndex]
    const { hand, isDoubleDown } = currPlayer

    useEffect(() => {
        if (hand.cardSum > 21
            || hand.cards.length === 2 && hand.cardSum === 21
            || hand.cards.length === 3 && isDoubleDown) {
            setTimeout(() => {
                endRound()
            }, 1000)
        }
    }, [hand, isDoubleDown, endRound])

    return (
        <ResultsModal
            playerIndex={playerIndex}
            isPlayerFinished={isPlayerFinished}
            makePlayerFinished={makePlayerFinished}
            changeToNextPlayer={changeToNextPlayer}
        />
    )
}

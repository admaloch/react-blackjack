import { useEffect } from 'react';
import { RootState } from "../../../../store/store";
import ResultsModal from "./ResultsModal";
import { useSelector } from 'react-redux';

interface EndOfTurnResultsProps {
    playerIndex: number;
    isCurrPlayerFinished: boolean;
    makeCurrPlayerNotFinished: () => void;
    makeCurrPlayerFinished: () => void;
    changeToNextPlayer: () => void;
}

export default function EndOfTurnResults({ playerIndex, isCurrPlayerFinished, makeCurrPlayerFinished, makeCurrPlayerNotFinished, changeToNextPlayer }: EndOfTurnResultsProps) {

    const playersArr = useSelector((state: RootState) => state.playersArr);
    const currPlayer = playersArr[playerIndex]
    const { hand, isDoubleDown } = currPlayer

    useEffect(() => {
        if (hand.cardSum > 21
            || hand.cards.length === 2 && hand.cardSum === 21
            || hand.cards.length === 3 && isDoubleDown) {
            setTimeout(() => {
                makeCurrPlayerFinished()
            }, 1000)
        }
    }, [hand, isDoubleDown, makeCurrPlayerFinished])

    return (
        <ResultsModal
            playerIndex={playerIndex}
            isCurrPlayerFinished={isCurrPlayerFinished}
            makeCurrPlayerNotFinished={makeCurrPlayerNotFinished}
            changeToNextPlayer={changeToNextPlayer}
        />
    )
}

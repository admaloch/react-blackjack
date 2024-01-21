import Modal from "../../../UI/modal/Modal";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';
import { RootState } from "../../../../store/store";
import ResultsModalContents from "./ResultsModalContent";
import { updatePlayer } from "../../../../store/player-arr/playersArrSlice";


interface EndOfTurnResultsProps {
    playerIndex: number;
    isPlayerFinished: boolean;
    makePlayerFinished: () => void;
    endRound: () => void;
    changeToNextPlayer: () => void;
}

export default function EndOfTurnResults({ playerIndex, isPlayerFinished, endRound, makePlayerFinished, changeToNextPlayer }: EndOfTurnResultsProps) {

const dispatch = useDispatch()
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const currPlayer = playersArr[playerIndex]
    const { hand, splitHand, isPlayerSplit } = currPlayer

    useEffect(() => {
        if (hand.cardSum > 21
            || hand.cards.length === 2 && hand.cardSum === 21
            || hand.cards.length === 3 && currPlayer.isDoubleDown) {
            setTimeout(() => {
                endRound()
            }, 1000)
        }
    }, [playersArr, playerIndex])

    const endResultsBtnHandler = async () => {
        if (splitHand.cards.length === 1 || playersArr.length - 1 !== playerIndex) {
            if (!isPlayerSplit || isPlayerSplit && splitHand.cards.length > 1) {
                changeToNextPlayer()
            }
            if (isPlayerSplit) handleSplitRoundResults()
            makePlayerFinished()

        } else {
            console.log('begin dealer round')
        }
    };

    const handleSplitRoundResults = () => {
        const updateMainHand = { ...hand }
        const updateSplitHand = { ...splitHand }
        dispatch(updatePlayer({ ...playersArr[playerIndex], hand: updateSplitHand, splitHand: updateMainHand, isDoubleDown: false }));
    }

    return (
        
        <Modal
            closeModal={endResultsBtnHandler}
            open={isPlayerFinished}
        >
            <ResultsModalContents
                playerIndex={playerIndex}
                endResultsBtnHandler={endResultsBtnHandler}
            />
        </Modal>
    )
}

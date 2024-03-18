import Modal from "../../../UI/modal/Modal";
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../../store/store";
import ResultsModalContents from "./ResultsModalContent";
import { reverseAllSplitHands, reverseCurrSplitHand } from "../../../../store/player-arr/playersArrSlice";
import { beginDealerRound } from "../../../../store/game-data/GameDataSlice";
import { useCallback } from "react";

interface EndOfTurnResultsProps {
    playerIndex: number;
    isCurrPlayerFinished: boolean;
    makeCurrPlayerNotFinished: () => void;
    changeToNextPlayer: () => void;
}

export default function ResultsModal({ playerIndex, isCurrPlayerFinished, makeCurrPlayerNotFinished, changeToNextPlayer }: EndOfTurnResultsProps) {

    const dispatch = useDispatch()
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const currPlayer = playersArr[playerIndex]
    const playersHaveSplit = playersArr.some(player => player.splitHand.cards.length > 0)
    const { splitHand, isPlayerSplit } = currPlayer
    const isLastPlayer = playersArr.length - 1 === playerIndex

    const endResultsBtnHandler = useCallback(async () => {
        if (isPlayerSplit && isPlayerSplit && splitHand.cards.length === 1) {
            dispatch(reverseCurrSplitHand(playerIndex))
        } if (!isLastPlayer) {
            if (!isPlayerSplit || isPlayerSplit && splitHand.cards.length > 1) {
                changeToNextPlayer()
            }
            makeCurrPlayerNotFinished()
        } else {
            if (isPlayerSplit && splitHand.cards.length === 1) {
                makeCurrPlayerNotFinished()
            } else {
                playersHaveSplit && dispatch(reverseAllSplitHands())
                dispatch(beginDealerRound())
            }
        }
    }, [changeToNextPlayer, dispatch, isLastPlayer, isPlayerSplit, makeCurrPlayerNotFinished, playerIndex, playersHaveSplit, splitHand.cards.length]);

    return (
        <Modal
            closeModal={endResultsBtnHandler}
            open={isCurrPlayerFinished}
            isTimer={true}
        >
            <ResultsModalContents
                playerIndex={playerIndex}
                endResultsBtnHandler={endResultsBtnHandler}
            />
        </Modal>
    )
}
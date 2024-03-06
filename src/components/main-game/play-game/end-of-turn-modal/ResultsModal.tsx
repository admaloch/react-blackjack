import Modal from "../../../UI/modal/Modal";
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../../store/store";
import ResultsModalContents from "./ResultsModalContent";
import { reverseAllSplitHands, reverseCurrSplitHand, updateAllPlayers, updatePlayer } from "../../../../store/player-arr/playersArrSlice";
import { beginDealerRound, revealDealerCard } from "../../../../store/game-data/GameDataSlice";
import { delay } from "../../../../utils/Utility";
import { useCallback, useEffect } from "react";

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
    const { hand, splitHand, isPlayerSplit } = currPlayer

    // const reversePlayerSplitHand = useCallback(() => {
    //     dispatch(updatePlayer({
    //         ...playersArr[playerIndex],
    //         hand: splitHand,
    //         splitHand: hand,
    //         isDoubleDown: false
    //     }));
    // }, [dispatch, hand, playerIndex, playersArr, splitHand])


    const endResultsBtnHandler = useCallback(async () => {

        if (isPlayerSplit) {
            dispatch(reverseCurrSplitHand(playerIndex))
        }
        if (playersArr.length - 1 !== playerIndex) {
            if (!isPlayerSplit || isPlayerSplit && splitHand.cards.length > 1) {
                changeToNextPlayer()
            }
            makeCurrPlayerNotFinished()
        } else {
            playersHaveSplit && dispatch(reverseAllSplitHands())
            dispatch(beginDealerRound())
        }


        // if (isPlayerSplit && splitHand.cards.length === 1) {
        //     console.log('reverse curr split conditional ran')
        //     dispatch(reverseCurrSplitHand(playerIndex))

        // } if (splitHand.cards.length === 1 || playersArr.length - 1 !== playerIndex) {
        //     if (!isPlayerSplit || isPlayerSplit && splitHand.cards.length > 1) {
        //         dispatch(reverseCurrSplitHand(playerIndex))

        //         changeToNextPlayer()
        //     }
        //     makeCurrPlayerNotFinished()
        // } else {
        //     playersHaveSplit && dispatch(reverseAllSplitHands())
        //     dispatch(beginDealerRound())
        // }
    }, [changeToNextPlayer, dispatch, isPlayerSplit, makeCurrPlayerNotFinished, playerIndex, playersArr.length, playersHaveSplit, splitHand.cards.length]);


    // still working on this


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

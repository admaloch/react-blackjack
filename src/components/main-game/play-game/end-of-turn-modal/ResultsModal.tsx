import Modal from "../../../UI/modal/Modal";
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../../store/store";
import ResultsModalContents from "./ResultsModalContent";
import { updateAllPlayers, updatePlayer } from "../../../../store/player-arr/playersArrSlice";
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

    const reversePlayerSplitHand = useCallback(() => {
        dispatch(updatePlayer({
            ...playersArr[playerIndex],
            hand: splitHand,
            splitHand: hand,
            isDoubleDown: false
        }));
    }, [dispatch, hand, playerIndex, playersArr, splitHand])

    const reverseAllPlayersSplitHands = useCallback(
        () => {
            if (playersHaveSplit) {
                const finalSplitHandUpdate = playersArr.map(x => {
                    if (x.splitHand.cards.length > 0) {
                        return {
                            ...x,
                            hand: x.splitHand,
                            splitHand: x.hand,
                        }
                    } else return x
                })
                dispatch(updateAllPlayers(finalSplitHandUpdate))
            }
        }, [dispatch, playersArr, playersHaveSplit]
    )

    const endResultsBtnHandler = useCallback(async () => {
        if (isPlayerSplit && splitHand.cards.length === 1) {
            reversePlayerSplitHand()
        } if (splitHand.cards.length === 1 || playersArr.length - 1 !== playerIndex) {
            if (!isPlayerSplit || isPlayerSplit && splitHand.cards.length > 1) {
                reversePlayerSplitHand()
                changeToNextPlayer()
            }
            makeCurrPlayerNotFinished()
        }
        else {
            reverseAllPlayersSplitHands()
            dispatch(beginDealerRound())
        }
    }, [changeToNextPlayer, dispatch, isPlayerSplit, makeCurrPlayerNotFinished, playerIndex, playersArr.length, reverseAllPlayersSplitHands, reversePlayerSplitHand, splitHand.cards.length]);





    return (

        <Modal
            closeModal={endResultsBtnHandler}
            open={isCurrPlayerFinished}
        >
            <ResultsModalContents
                playerIndex={playerIndex}
                endResultsBtnHandler={endResultsBtnHandler}
            />

        </Modal>
    )
}

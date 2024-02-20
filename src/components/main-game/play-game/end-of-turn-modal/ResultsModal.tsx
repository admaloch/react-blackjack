import Modal from "../../../UI/modal/Modal";
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../../store/store";
import ResultsModalContents from "./ResultsModalContent";
import { updateAllPlayers, updatePlayer } from "../../../../store/player-arr/playersArrSlice";
import { beginDealerRound, revealDealerCard } from "../../../../store/game-data/GameDataSlice";
import { delay } from "../../../../utils/Utility";
import { useEffect } from "react";

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

    const endResultsBtnHandler = async () => {

        if (isPlayerSplit && splitHand.cards.length === 1) {
            reversePlayerHands()
        } if (splitHand.cards.length === 1 || playersArr.length - 1 !== playerIndex) {
            if (!isPlayerSplit || isPlayerSplit && splitHand.cards.length > 1) {
                reversePlayerHands()

                changeToNextPlayer()
            }
            makeCurrPlayerNotFinished()
        }
        else {
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
            dispatch(beginDealerRound())
        }
    };

    const reversePlayerHands = () => {
        // const updatedSplitHand = { ...hand }
        // const updatedMainHand = { ...splitHand }
        dispatch(updatePlayer({
            ...playersArr[playerIndex],
            hand: splitHand,
            splitHand: hand,
            isDoubleDown: false
        }));
    }



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

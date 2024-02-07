import Modal from "../../../UI/modal/Modal";
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../../store/store";
import ResultsModalContents from "./ResultsModalContent";
import { updatePlayer } from "../../../../store/player-arr/playersArrSlice";
import { beginDealerRound } from "../../../../store/game-data/GameDataSlice";

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
    const { hand, splitHand, isPlayerSplit } = currPlayer

    const endResultsBtnHandler = async () => {
        if (splitHand.cards.length === 1 || playersArr.length - 1 !== playerIndex) {
            if (!isPlayerSplit || isPlayerSplit && splitHand.cards.length > 1) {
                changeToNextPlayer()
            }
            handleSplitRoundResults()
            makeCurrPlayerNotFinished()
            
        }else if (splitHand.cards.length === 1){
            handleSplitRoundResults()
        }
         else {
            handleSplitRoundResults()
            dispatch(beginDealerRound())
        }
    };

    const handleSplitRoundResults = () => {
        const updatedSplitHand = { ...hand }
        const updatedMainHand = { ...splitHand }
        dispatch(updatePlayer({ ...playersArr[playerIndex], hand: updatedMainHand, splitHand: updatedSplitHand, isDoubleDown: false }));
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

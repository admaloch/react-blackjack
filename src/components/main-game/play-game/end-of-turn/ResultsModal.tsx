import Modal from "../../../UI/modal/Modal";
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../../store/store";
import ResultsModalContents from "./ResultsModalContent";
import { updatePlayer } from "../../../../store/player-arr/playersArrSlice";
import { updateIsPlayerRoundComplete } from "../../../../store/game-data/GameDataSlice";

interface EndOfTurnResultsProps {
    playerIndex: number;
    isPlayerFinished: boolean;
    makePlayerFinished: () => void;
    changeToNextPlayer: () => void;
}

export default function ResultsModal({ playerIndex, isPlayerFinished, makePlayerFinished, changeToNextPlayer }: EndOfTurnResultsProps) {

    const dispatch = useDispatch()
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const currPlayer = playersArr[playerIndex]
    const { hand, splitHand, isPlayerSplit } = currPlayer

    const endResultsBtnHandler = async () => {
        if (splitHand.cards.length === 1 || playersArr.length - 1 !== playerIndex) {
            if (!isPlayerSplit || isPlayerSplit && splitHand.cards.length > 1) {
                changeToNextPlayer()
            }
            if (isPlayerSplit) handleSplitRoundResults()
            makePlayerFinished()
        } else {
            dispatch(updateIsPlayerRoundComplete())
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

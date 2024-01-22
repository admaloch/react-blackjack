import Modal from "../../../UI/modal/Modal";
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../../store/store";
import ResultsModalContents from "./ResultsModalContent";
import { updatePlayer } from "../../../../store/player-arr/playersArrSlice";
import { updateIsPlayerRoundActive } from "../../../../store/game-data/GameDataSlice";

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
            if (isPlayerSplit) handleSplitRoundResults()
            makeCurrPlayerNotFinished()
        } else {
            dispatch(updateIsPlayerRoundActive())
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
            open={isCurrPlayerFinished}
        >
            <ResultsModalContents
                playerIndex={playerIndex}
                endResultsBtnHandler={endResultsBtnHandler}
            />
        </Modal>
    )
}

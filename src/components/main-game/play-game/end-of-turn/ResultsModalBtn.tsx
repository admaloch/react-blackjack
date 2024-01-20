import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../../../store/store";
import { delay } from "../../../../utils/Utility";
import { updatePlayer } from "../../../../store/player-arr/playersArrSlice";

interface ResultsModalBtnProps {
    playerIndex: number;
    startRound: () => void;
    changeToNextPlayer: () => void;
}

export default function ResultsModalBtn({ playerIndex, startRound, changeToNextPlayer }: ResultsModalBtnProps) {

    const playersArr = useSelector((state: RootState) => state.playersArr);

    const { hand, splitHand, isPlayerSplit, isDoubleDown } = playersArr[playerIndex]
    const dispatch = useDispatch();

    let modalButton: string = ''
    if (isPlayerSplit && splitHand.cards.length === 1) {
        modalButton = `Play other split hand`
    }
    else if (playersArr.length - 1 !== playerIndex) {
        modalButton = `Begin ${playersArr[playerIndex + 1].name}'s turn`
    } else {
        modalButton = 'Begin dealer round'
    }

    const nextPlayerHandler = async () => {

        if (splitHand.cards.length === 1 || playersArr.length - 1 !== playerIndex) {


            setTimeout(() => {
                if (!isPlayerSplit || isPlayerSplit && splitHand.cards.length > 1) {
                    changeToNextPlayer()
                }
                if (isPlayerSplit) handleSplitRoundResults()
                startRound()
            }, 300);
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
        <button
            onClick={() => nextPlayerHandler()}
            className="game-btn">{modalButton}
        </button>
    )
}

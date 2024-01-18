import { useSelector } from "react-redux"
import { RootState } from "../../../../store/store";
import { delay } from "../../../../utils/Utility";

interface ResultsModalBtnProps {
    playerIndex: number;
    startRound: () => void;
    changeToNextPlayer: () => void;
}

export default function ResultsModalBtn({ playerIndex, startRound, changeToNextPlayer }: ResultsModalBtnProps) {

    const playersArr = useSelector((state: RootState) => state.playersArr);
    const { splitHand, isPlayerSplit } = playersArr[playerIndex]

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
        if (playersArr.length - 1 !== playerIndex) {
            await delay(300)
            modalButton = `Begin ${playersArr[playerIndex + 1].name}'s turn`
            startRound()
            if (!isPlayerSplit || isPlayerSplit && splitHand.cards.length > 1) {
                changeToNextPlayer()
            }
        } else {
            modalButton = 'Begin dealer round'
        }
    };

    return (
        <button
            onClick={() => nextPlayerHandler()}
            className="game-btn">{modalButton}
        </button>
    )
}

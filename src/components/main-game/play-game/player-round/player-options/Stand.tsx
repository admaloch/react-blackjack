import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";

interface StandProps {
    endRound: () => void;
    playerIndex: number;
}

export default function Stand({ endRound, playerIndex }: StandProps) {
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const { isDoubleDown, hand } = playersArr[playerIndex]

    let standBtnClass = ''

    if (hand.cards.length < 2
        || isDoubleDown
        || hand.cardSum === 21 && hand.cards.length === 2
        || hand.cardSum > 21
    ) {
        standBtnClass = 'game-btn stand-btn disabled'
    } else {
        standBtnClass = 'game-btn stand-btn'
    }

    const standBtnHandler = () => {
        setTimeout(() => {
            endRound()
        }, 350)
    }

    return (
        <div className="player-btn-container">
            <button
                onClick={standBtnHandler}
                className={standBtnClass}>Stand
            </button>
        </div>
    )
}

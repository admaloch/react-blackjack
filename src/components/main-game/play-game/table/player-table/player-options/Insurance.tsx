import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../../store/store";
import { updatePlayer } from "../../../../../../store/player-arr/playersArrSlice";
import PlayerIndexProps from "../../../../../../models/PlayerIndexProps";
import { delay } from "../../../../../../utils/Utility";

export default function Insurance({ playerIndex }: PlayerIndexProps) {
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const currPlayer = playersArr[playerIndex]
    const { hand, currBet, bank } = currPlayer
    const dealerObj = useSelector((state: RootState) => state.dealerObj);
    const dispatch = useDispatch()

    if (dealerObj.hand.cardNumVals.length === 2) {
        if (dealerObj.hand.cardNumVals[1] !== 11
            || hand.cards.length !== 2
            || hand.cards.length === 2 && hand.cardSum === 21
            || currPlayer.insuranceBet !== 0
            || currPlayer.splitBet !== 0
        ) {
            return;
        }
    } else {
        return;
    }


    const insuranceBtnHandler = async () => {

        await delay(300)
        dispatch(updatePlayer({ ...currPlayer, insuranceBet: currBet / 2, bank: bank - currBet / 2 }));
    }

    return (
        <div className="player-btn-container">
            <button
                onClick={insuranceBtnHandler}
                className="insurance-btn game-btn">Insurance
            </button>
        </div>
    )
}

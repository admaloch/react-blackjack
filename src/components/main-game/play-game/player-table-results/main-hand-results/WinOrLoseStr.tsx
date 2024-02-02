import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import { PlayerInterfaceProps, RoundResultsProps } from "../../../../../models/PlayerProps";
import { useEffect } from "react";
import { delay } from "../../../../../utils/Utility";
import { updatePlayer } from "../../../../../store/player-arr/playersArrSlice";

export default function WinOrLoseStr({ player }: PlayerInterfaceProps) {
    const dispatch = useDispatch()
    const dealerObj = useSelector((state: RootState) => state.dealerObj);
    const { roundResults, name } = player
    const { mainResults } = roundResults

    useEffect(() => {
        async function updateWinOrLose() {
            const { hand, wonInsuranceRound, roundResults } = player
            const { cardSum, cardUrlVals } = hand
            const { mainResults } = roundResults
            const playerHasBJ = cardSum === 21 && cardUrlVals.length === 2 ? true : false
            const dealerCardSum = dealerObj.hand.cardSum
            const didPlayerBust = cardSum > 21
            const didDealerBust = dealerObj.hand.cardSum > 21
            const dealerHasBJ = dealerObj.hand.cardSum === 21 && dealerObj.hand.cards.length === 2

            if (mainResults === '') {
                await delay(1500)
                let winOrLoseStr = ''
                if (dealerHasBJ && wonInsuranceRound) {
                    winOrLoseStr = 'Insured'
                } else if (playerHasBJ && !dealerHasBJ || !didPlayerBust && didDealerBust || !didPlayerBust && !didDealerBust && cardSum > dealerCardSum) {
                    winOrLoseStr = 'Won'
                } else if (!playerHasBJ && dealerHasBJ || didPlayerBust && !didDealerBust || !didPlayerBust && !didDealerBust && cardSum < dealerCardSum) {
                    winOrLoseStr = 'Lost'
                } else {
                    winOrLoseStr = 'Push'
                }
                const newRoundResults: RoundResultsProps = { ...roundResults, mainResults: winOrLoseStr, moneyWon: 0, moneyLost: 0, isComplete: false }
                dispatch(updatePlayer({ ...player, roundResults: newRoundResults }))
            }
        }
        updateWinOrLose()
    }, [dealerObj.hand.cardSum, dealerObj.hand.cards.length, dispatch, player])

    let winOrLoseStr: string = ''
    if (mainResults === 'Won') winOrLoseStr = `${name} won!`
    else if (mainResults === 'Lost') winOrLoseStr = 'Dealer won!'
    else winOrLoseStr = "Push!"


    return (
        <>
            {mainResults !== '' &&
                <p>{winOrLoseStr}</p>
            }
        </>

    )
}

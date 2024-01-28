import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import { PlayerInterface } from "../../../../../models/PlayerProps";
import { FinalResultsState } from "./MainHandFinalRes";
import { useEffect } from "react";
import { delay } from "../../../../../utils/Utility";

interface MainHandItemsProps {
    player: PlayerInterface;
    updateFinalResults: (input: FinalResultsState) => void;
    finalResultsState: FinalResultsState;
}

export default function MainHandItems({ player, updateFinalResults, finalResultsState }: MainHandItemsProps) {

    const dealerObj = useSelector((state: RootState) => state.dealerObj);




    useEffect(() => {
        async function updateState() {
            const dealerCardSum = dealerObj.hand.cardSum
            const { hand, wonInsuranceRound } = player
            const { cardSum, cardUrlVals } = hand
            const playerHasBJ = cardSum === 21 && cardUrlVals.length === 2 ? true : false
            const didPlayerBust = cardSum > 21
            const didDealerBust = dealerObj.hand.cardSum > 21
            const dealerHasBJ = dealerObj.hand.cardSum === 21 && dealerObj.hand.cards.length === 2
            await delay(1500)
            if (finalResultsState.mainResults === '') {

                if (dealerHasBJ && wonInsuranceRound) {
                    updateFinalResults({ ...finalResultsState, mainResults: 'Insured' })
                } else if (playerHasBJ && !dealerHasBJ || !didPlayerBust && didDealerBust || !didPlayerBust && !didDealerBust && cardSum > dealerCardSum) {
                    updateFinalResults({ ...finalResultsState, mainResults: 'Won' })
                } else if (!playerHasBJ && dealerHasBJ || didPlayerBust && !didDealerBust || !didPlayerBust && !didDealerBust && cardSum < dealerCardSum) {
                    updateFinalResults({ ...finalResultsState, mainResults: 'Lost' })
                } else {
                    updateFinalResults({ ...finalResultsState, mainResults: 'Push' })
                }
            }
        }
        updateState()
    }, [finalResultsState, dealerObj, player, updateFinalResults])






    let winOrLoseStr: string = ''
    if (finalResultsState.mainResults === 'Won') winOrLoseStr = `${player.name} won!`
    else if (finalResultsState.mainResults === 'Lost') winOrLoseStr = 'Dealer won!'
    else winOrLoseStr = "Push!"

    let moneyWonOrLost: string = ''
    if (finalResultsState.moneyWon !== 0) {
        moneyWonOrLost = `Money earned: ${finalResultsState.moneyWon}`
    } else if (finalResultsState.moneyLost !== 0) {
        moneyWonOrLost = `Money lost: ${finalResultsState.moneyLost}`
    }

    return (
        <>
            {finalResultsState.mainResults &&
                <p>{winOrLoseStr}</p>
            }
            {finalResultsState.moneyWon !== 0 && finalResultsState.moneyLost !== 0 &&
                <p>{moneyWonOrLost}</p>
            }

        </>

    )
}

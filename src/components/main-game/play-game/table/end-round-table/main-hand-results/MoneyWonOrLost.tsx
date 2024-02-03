import { useDispatch } from "react-redux";
import { PlayerInterfaceProps } from "../../../../../../models/PlayerProps";
import { useEffect } from "react";
import { delay } from "../../../../../../utils/Utility";
import { updatePlayer } from "../../../../../../store/player-arr/playersArrSlice";
import { endRoundResults } from "../../../../../../store/game-data/GameDataSlice";

export default function MoneyWonOrLost({ player }: PlayerInterfaceProps) {
    const dispatch = useDispatch()

    useEffect(() => {
        async function updateHandsWithResults() {
            const { hand, splitHand, wonInsuranceRound, bank, currBet, roundResults } = player
            const { cardSum, cardUrlVals } = hand
            const { mainResults, isComplete } = roundResults
            const playerHasBJ = cardSum === 21 && cardUrlVals.length === 2 ? true : false

            if (mainResults && !wonInsuranceRound && !isComplete) {
                await delay(2000)
                let newBank = 0
                if (mainResults === 'Won') newBank = playerHasBJ ? bank + (currBet * 2.5) : bank + (currBet * 2)
                else if (mainResults === 'Push') newBank = bank + currBet
                else newBank = bank

                const isRoundComplete = splitHand.cards.length === 0 ? true : false

                const newRoundResObj = { ...roundResults, isComplete: isRoundComplete }
                dispatch(updatePlayer({ ...player, bank: newBank, currBet: 0, roundResults: newRoundResObj }))
                dispatch(endRoundResults())
            }
        }
        updateHandsWithResults()
    }, [dispatch, player])

    const { bank, beginningRoundBank } = player
    const { mainResults } = player.roundResults

    let moneyWonOrLost: string = ''
    if (mainResults === 'Won') {
        moneyWonOrLost = `Money earned: ${bank - beginningRoundBank}`
    } else if (mainResults === 'Lost') {
        moneyWonOrLost = `Money lost: ${beginningRoundBank - bank}`
    }

    return (
        <>
            {moneyWonOrLost !== '' &&
                <p>{moneyWonOrLost}</p>
            }
        </>

    )
}

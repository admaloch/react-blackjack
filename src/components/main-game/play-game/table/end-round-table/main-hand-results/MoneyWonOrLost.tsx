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
            const { hand, wonInsuranceRound, bank, currBet, roundResults } = player
            const { cardSum, cardUrlVals } = hand
            const { mainResults, isComplete } = roundResults
            const playerHasBJ = cardSum === 21 && cardUrlVals.length === 2 ? true : false

            if (mainResults && !wonInsuranceRound && !isComplete) {
                await delay(2000)
                let newBank = 0
                let winnings = 0
                let losses = 0
                if (mainResults === 'Won') {
                    newBank = playerHasBJ ? bank + (currBet * 2.5) : bank + (currBet * 2)
                    winnings = playerHasBJ ? currBet * 1.5 : currBet
                } else if (mainResults === 'Push') {
                    newBank = bank + currBet
                } else {
                    newBank = bank
                    losses = currBet
                }
                const newRoundResObj = { ...roundResults, isComplete: true, moneyWon: winnings, moneyLost: losses }
                dispatch(updatePlayer({ ...player, bank: newBank, currBet: 0, roundResults: newRoundResObj }))
                dispatch(endRoundResults())
            }
        }
        updateHandsWithResults()
    }, [dispatch, player])

    const { mainResults, moneyLost, moneyWon } = player.roundResults

    let moneyWonOrLost: string = ''
    if (mainResults === 'Won') {
        moneyWonOrLost = `Money earned: ${moneyWon}`
    } else if (mainResults === 'Lost') {
        moneyWonOrLost = `Money lost: ${moneyLost}`
    }

    return (
        <>
            {moneyWon !== 0 && moneyLost !== 0 &&
                <p>{moneyWonOrLost}</p>
            }
        </>

    )
}

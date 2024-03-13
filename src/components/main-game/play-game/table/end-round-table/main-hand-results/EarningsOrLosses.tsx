import { useDispatch, useSelector } from "react-redux";
import { PlayerInterfaceProps } from "../../../../../../models/PlayerProps";
import { useEffect } from "react";
import { delay } from "../../../../../../utils/Utility";
import { updateHandResults, updatePlayer } from "../../../../../../store/player-arr/playersArrSlice";
import { endFullRound, endMainHandResults, endSplitRound } from "../../../../../../store/game-data/GameDataSlice";
import { RootState } from "../../../../../../store/store";
import MoneyWonOrLost from "../../../../../results-components/MoneyWonOrLost";

export default function EarningsOrLosses({ player }: PlayerInterfaceProps) {
    const dispatch = useDispatch()
    const { isRoundActive, isMainResultsActive } = useSelector((state: RootState) => state.gameData);

    useEffect(() => {
        let isMounted = true
        async function updateHandsWithResults() {
            if (isMounted) {
                const { hand, splitHand, wonInsuranceRound, bank, currBet, roundResults, splitBet } = player
                const { cardSum, cardUrlVals } = hand
                const { mainResults, isComplete, splitResults } = roundResults
                const playerHasBJ = cardSum === 21 && cardUrlVals.length === 2 ? true : false
                const isRoundComplete = splitHand.cards.length === 0 ? true : false
                const newRoundResObj = { ...roundResults, isComplete: isRoundComplete }
                // finishing update players
                if (isMainResultsActive || splitBet) {
                    if (isMainResultsActive && mainResults && !wonInsuranceRound && !isComplete) {
                        await delay(2000)
                        let newBank = 0
                        if (mainResults === 'Won') newBank = playerHasBJ
                            ? bank + (currBet * 2.5)
                            : bank + (currBet * 2)
                        else if (mainResults === 'Push') newBank = bank + currBet
                        else newBank = bank
                        dispatch(updatePlayer({
                            ...player,
                            bank: newBank,
                            currBet: 0,
                            roundResults: newRoundResObj,
                        }))
                        dispatch(updateHandResults({currIndex: }))
                        dispatch(endMainHandResults())
                    }
                    if (isRoundActive && roundResults.splitResults) {
                        await delay(2000)
                        let newBank = 0
                        if (splitResults === 'Won') newBank = playerHasBJ
                            ? bank + (splitBet * 2.5)
                            : bank + (splitBet * 2)
                        else if (splitResults === 'Push') newBank = bank + splitBet
                        else newBank = bank

                        dispatch(updatePlayer({
                            ...player,
                            bank: newBank,
                            splitBet: 0,
                            roundResults: newRoundResObj
                        }))
                        dispatch(endSplitRound())
                        dispatch(endFullRound())
                    }
                    if (splitBet && player.wonInsuranceRound) {
                        dispatch(updatePlayer({
                            ...player,
                            bank: player.bank + splitBet,
                            splitBet: 0,
                            roundResults: newRoundResObj,
                        }))
                        dispatch(endFullRound())
                    }
                }


            }
        }
        updateHandsWithResults()
        return () => { isMounted = false }

    }, [dispatch, player, isRoundActive, isMainResultsActive])





    return (!isRoundActive &&
        <MoneyWonOrLost player={player} />
    )
}

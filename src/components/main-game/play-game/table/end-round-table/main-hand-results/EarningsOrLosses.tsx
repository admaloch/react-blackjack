import { useDispatch, useSelector } from "react-redux";
import { PlayerInterfaceProps } from "../../../../../../models/PlayerProps";
import { useEffect } from "react";
import { delay } from "../../../../../../utils/Utility";
import { updateHandResults } from "../../../../../../store/player-arr/playersArrSlice";
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
                const { wonInsuranceRound, roundResults, splitBet } = player
                const { mainResults, isComplete } = roundResults

                if (isMainResultsActive || splitBet) {
                    if (isMainResultsActive && mainResults && !wonInsuranceRound && !isComplete) {
                        await delay(1500)
                        dispatch(updateHandResults(player))
                        dispatch(endMainHandResults())
                    }
                    if (isRoundActive && roundResults.splitResults) {
                        await delay(1500)
                        dispatch(updateHandResults(player))
                        dispatch(endSplitRound())
                    }
                    if (splitBet && player.wonInsuranceRound) {
                        dispatch(updateHandResults(player))
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

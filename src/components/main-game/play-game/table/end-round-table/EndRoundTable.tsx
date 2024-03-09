import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import './EndRoundTable.css'
import PlayerHandResults from "./main-hand-results/PlayerHandResults";
import { useEffect } from "react";
import { beginSplitRound, endFullRound } from "../../../../../store/game-data/GameDataSlice";
import TableHeader from "./table-header/TableHeader";
import { delay } from "../../../../../utils/Utility";
import NextRoundBtn from "./final-results/NextRoundBtn";

export default function EndRoundTable() {

    const playersArr = useSelector((state: RootState) => state.playersArr);
    const inactivePlayers = useSelector((state: RootState) => state.inactivePlayers);

    const { isPlayerRoundActive, isMainResultsActive, isDealerRoundActive, isSplitResultsActive, isRoundActive } = useSelector((state: RootState) => state.gameData);

    const dispatch = useDispatch()

    const isPlayerSplitButNotInsured = playersArr.some(x => x.splitHand.cards.length > 0 && !x.wonInsuranceRound)

    useEffect(() => {
        let isMounted = true
        async function splitOrEndResults() {
            if (isMounted) {
                if (isRoundActive && !isPlayerRoundActive && !isDealerRoundActive && !isSplitResultsActive && !isMainResultsActive) {
                    await delay(1200)
                    if (isPlayerSplitButNotInsured) {
                        dispatch(beginSplitRound())
                    } else {
                        dispatch(endFullRound())
                    }
                }
            }
        }
        splitOrEndResults()
        return () => { isMounted = false }
    }, [isPlayerRoundActive, isDealerRoundActive, isSplitResultsActive, dispatch, isPlayerSplitButNotInsured, isMainResultsActive, isRoundActive])


    return (
        <div className="player-results-table">
            
            <TableHeader />
            <div className="player-hand-results">
                {playersArr.map(player => (
                    <PlayerHandResults
                        key={player.name}
                        player={player}
                    />
                ))}
            </div>
            
        </div>
    )
}

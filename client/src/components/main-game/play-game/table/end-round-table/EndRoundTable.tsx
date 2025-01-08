import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import './EndRoundTable.css'
import PlayerHandResults from "./main-hand-results/PlayerHandResults";
import { useEffect } from "react";
import { beginSplitRound, endFullRound } from "../../../../../store/game-data/GameDataSlice";
import TableHeader from "./table-header/TableHeader";
import { delay } from "../../../../../utils/Utility";
import useUpdateGameSessionApi from "../../../../../store/api/useUpdateGameSessionApi";


export default function EndRoundTable() {

    const { updateGameSessionHandler } = useUpdateGameSessionApi();


    const playersArr = useSelector((state: RootState) => state.playersArr);
    const { isPlayerRoundActive, isMainResultsActive, isDealerRoundActive, isSplitResultsActive, isRoundActive } = useSelector((state: RootState) => state.gameData);
    const dispatch = useDispatch()
    const isPlayerSplitButNotInsured = playersArr.some(x => x.splitHand.cards.length > 0 && !x.wonInsuranceRound)
   

    useEffect(() => {
        let isMounted = true
        async function splitOrEndResults() {
            if (isMounted) {
                if (isRoundActive && !isPlayerRoundActive && !isDealerRoundActive && !isSplitResultsActive && !isMainResultsActive) {
                    // await delay(1000)
                    if (isPlayerSplitButNotInsured) {
                        dispatch(beginSplitRound())
                    } else {
                        dispatch(endFullRound())
                        if(playersArr.length > 1) {
                                                    updateGameSessionHandler()

                        }
                    }
                }
            }
        }
        splitOrEndResults()
        return () => { isMounted = false }
    }, [isPlayerRoundActive, isDealerRoundActive, isSplitResultsActive, dispatch, isPlayerSplitButNotInsured, isMainResultsActive, isRoundActive, updateGameSessionHandler])




    return (
        <section className="player-results-table">
            <TableHeader />
            <div className="player-hand-results">
                {playersArr.map(player => (
                    <PlayerHandResults
                        key={player.name}
                        player={player}
                    />
                ))}
            </div>
        </section>
    )
}

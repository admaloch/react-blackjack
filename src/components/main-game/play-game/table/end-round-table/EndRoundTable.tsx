import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import './EndRoundTable.css'
import PlayerHandResults from "./main-hand-results/PlayerHandResults";
import { useEffect } from "react";
import { beginSplitRound, endRoundResults, endSplitRound, updateIsRoundActive } from "../../../../../store/game-data/GameDataSlice";
import TableHeader from "./TableHeader";
import { delay } from "../../../../../utils/Utility";

export default function EndRoundTable() {

    const playersArr = useSelector((state: RootState) => state.playersArr);
    const { isMainResultsActive, isDealerRoundActive, isSplitResultsActive, isRoundActive } = useSelector((state: RootState) => state.gameData);
    const dispatch = useDispatch()
    const isPlayersSplit = playersArr.some(x => x.splitHand.cards.length > 0)

    useEffect(() => {
        async function splitOrEnd() {
            if (!isDealerRoundActive && !isSplitResultsActive && !isMainResultsActive) {
                await delay(2000)
                if (isPlayersSplit) {
                    dispatch(beginSplitRound())
                } else {
                    dispatch(updateIsRoundActive())
                }
            }
        }
        splitOrEnd()
    }, [isDealerRoundActive, isSplitResultsActive, dispatch, isPlayersSplit, isMainResultsActive])



    return (
        <div className="player-results-table">
            {isRoundActive &&
                <TableHeader />
            }

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

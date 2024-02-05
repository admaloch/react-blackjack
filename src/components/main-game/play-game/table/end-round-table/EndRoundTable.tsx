import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import './EndRoundTable.css'
import PlayerHandResults from "./main-hand-results/PlayerHandResults";
import { useEffect } from "react";
import { beginSplitRound, endCurrentRound } from "../../../../../store/game-data/GameDataSlice";
import TableHeader from "./table-header/TableHeader";
import { delay } from "../../../../../utils/Utility";
import NextRoundBtn from "./final-results/NextRoundBtn";

export default function EndRoundTable() {

    const playersArr = useSelector((state: RootState) => state.playersArr);
    const { isMainResultsActive, isDealerRoundActive, isSplitResultsActive, isRoundActive } = useSelector((state: RootState) => state.gameData);
    const dispatch = useDispatch()
    const isPlayersSplit = playersArr.some(x => x.splitHand.cards.length > 0)

    useEffect(() => {
        async function splitOrEnd() {
            if (!isDealerRoundActive && !isSplitResultsActive && !isMainResultsActive && isRoundActive) {
                await delay(2000)
                if (isPlayersSplit) {
                    dispatch(beginSplitRound())
                } else {
                    dispatch(endCurrentRound())
                }
            }
        }
        splitOrEnd()
    }, [isDealerRoundActive, isSplitResultsActive, dispatch, isPlayersSplit, isMainResultsActive, isRoundActive])

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
            {!isRoundActive && <NextRoundBtn />}
        </div>
    )
}

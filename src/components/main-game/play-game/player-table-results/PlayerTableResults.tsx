import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import './PlayerTableResults.css'
import PlayerHandResults from "./PlayerHandResults";
import { useEffect } from "react";
import { beginSplitRound, endRoundResults } from "../../../../store/game-data/GameDataSlice";

export default function PlayerTableResults() {
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const { isMainResultsActive, isDealerRoundActive, isSplitResultsActive } = useSelector((state: RootState) => state.gameData);
    const dispatch = useDispatch()
    const isPlayersSplit = playersArr.some(x => x.splitHand.cards.length > 0)

    useEffect(() => {
        if (!isDealerRoundActive && !isSplitResultsActive && !isMainResultsActive) {
            if (isPlayersSplit) {
                dispatch(beginSplitRound())
            } else {
                dispatch(endRoundResults())
            }
        }
    }, [isDealerRoundActive, isSplitResultsActive, dispatch, isPlayersSplit, isMainResultsActive])



    const mainOrSplitHeader = !isSplitResultsActive
        ? 'Main hand results...'
        : 'Split hand results...'

    return (
        <div className="player-results-table">
            {isMainResultsActive &&
                <h2>{mainOrSplitHeader}</h2>
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

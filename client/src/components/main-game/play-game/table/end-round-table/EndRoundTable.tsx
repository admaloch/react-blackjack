import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import './EndRoundTable.css'
import PlayerHandResults from "./main-hand-results/PlayerHandResults";
import { useEffect } from "react";
import { beginSplitRound, endFullRound } from "../../../../../store/game-data/GameDataSlice";
import TableHeader from "./table-header/TableHeader";
import useUpdateGameSessionApi from "../../../../../store/api/useUpdateGameSessionApi";
import Cookies from "js-cookie";


export default function EndRoundTable() {

    const { updateGameSessionHandler } = useUpdateGameSessionApi();


    const playersArr = useSelector((state: RootState) => state.playersArr);
    const { isPlayerRoundActive, isMainResultsActive, isDealerRoundActive, isSplitResultsActive, isRoundActive } = useSelector((state: RootState) => state.gameData);
    const dispatch = useDispatch()
    const isPlayerSplitButNotInsured = playersArr.some(x => x.splitHand.cards.length > 0 && !x.wonInsuranceRound)
   
    const sessionId = Cookies.get("blackjack-session-id");

    useEffect(() => {
        
         function splitOrEndResults() {
         
                if (isRoundActive && !isPlayerRoundActive && !isDealerRoundActive && !isSplitResultsActive && !isMainResultsActive) {
                    if (isPlayerSplitButNotInsured) {
                        dispatch(beginSplitRound())
                    } else {
                        updateGameSessionHandler()
                        dispatch(endFullRound())
                    }
                }
            
         }
        splitOrEndResults()
    }, [isPlayerRoundActive, sessionId, isDealerRoundActive, isSplitResultsActive, dispatch, isPlayerSplitButNotInsured, isMainResultsActive, isRoundActive, updateGameSessionHandler, playersArr.length])




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

import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import './PlayerTableResults.css'
import PlayerHandResults from "./PlayerHandResults";

export default function PlayerTableResults() {
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const {isRoundResultsActive} = useSelector((state: RootState) => state.gameData);
    

    return (
        <div className="player-results-table">
            {isRoundResultsActive && 
            <h2>Evaluating results...</h2>
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

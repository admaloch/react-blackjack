import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import './PlayerTableResults.css'
import PlayerHandResults from "./PlayerHandResults";

export default function PlayerTableResults() {
    const playersArr = useSelector((state: RootState) => state.playersArr);


    return (
        <div className="player-table">
            <div className="player-hands-results">
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

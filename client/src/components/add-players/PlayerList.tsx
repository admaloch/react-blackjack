import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Player from "./Player";

export default function PlayerList() {
  const playerDataArr = useSelector((state: RootState) => state.playersArr);

  return (
    <div className="player-list">
      <h3>Current players:</h3>
      <ul>
        {playerDataArr.map((player) => (
          <Player key={player.name} name={player.name} />
        ))}
      </ul>
    </div>
  );
}

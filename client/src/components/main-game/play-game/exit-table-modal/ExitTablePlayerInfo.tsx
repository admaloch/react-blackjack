import { useSelector } from "react-redux";
import { PlayerInterfaceProps } from "../../../../models/PlayerProps";
import { RootState } from "../../../../store/store";

export default function ExitTablePlayerInfo({ player }: PlayerInterfaceProps) {
  const playersArr = useSelector((state: RootState) => state.playersArr);

  const currPlayerName = player.name;
  const lastPlayerName = playersArr[playersArr.length - 1].name;
  let statusText = "";

  if (playersArr.length > 1) {
    if (currPlayerName === lastPlayerName) {
      statusText = "Player round complete";
    } else statusText = "";
  } else {
    statusText = "Game Over";
  }

  return (
    <>
      {statusText && <h2>{statusText}</h2>}
      <h3>{player.name} left the table</h3>
      <ul>
        <li>Bank: ${player.bank}</li>
        <li>Rounds won: {player.roundsWon}</li>
      </ul>
    </>
  );
}

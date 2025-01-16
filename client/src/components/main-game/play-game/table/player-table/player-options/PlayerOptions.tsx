import DoubleDown from "./DoubleDown";
import Stand from "./Stand";
import DrawCards from "./DrawCards";
import Split from "./Split";
import Insurance from "./Insurance";
import ExitTableIcon from "../../../exit-table-modal/ExitTableIcon";
import { RootState } from "../../../../../../store/store";
import { useSelector } from "react-redux";

interface PlayerIconsProps {
  playerIndex: number;
  makeCurrPlayerFinished: () => void;
}

export default function PlayerOptions({
  playerIndex,
  makeCurrPlayerFinished,
}: PlayerIconsProps) {
  const playersArr = useSelector((state: RootState) => state.playersArr);
  const currPlayer = playersArr[playerIndex];

  return (
    <>
      <div className="current-options">
        <DoubleDown playerIndex={playerIndex} />
        <Split playerIndex={playerIndex} />
        <Insurance playerIndex={playerIndex} />
      </div>
      <Stand
        playerIndex={playerIndex}
        makeCurrPlayerFinished={makeCurrPlayerFinished}
      />
      <DrawCards playerIndex={playerIndex} />
      <ExitTableIcon player={currPlayer} />
    </>
  );
}

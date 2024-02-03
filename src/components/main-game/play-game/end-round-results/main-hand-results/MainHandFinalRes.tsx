import { PlayerInterfaceProps } from "../../../../../models/PlayerProps";
import WinOrLoseStr from "./WinOrLoseStr";
import MoneyWonOrLost from "./MoneyWonOrLost";

export default function FinalPlayerResult({ player }: PlayerInterfaceProps) {

    return (
        <>
            <WinOrLoseStr player={player} />
            <MoneyWonOrLost player={player} />
        </>
    )
}

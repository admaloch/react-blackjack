import { PlayerInterfaceProps } from "../../../../../../models/PlayerProps";
import WinOrLoseStr from "./WinOrLoseStr";
import EarningsOrLosses from "./EarningsOrLosses";

export default function FinalPlayerResult({ player }: PlayerInterfaceProps) {

    return (
        <>
            <WinOrLoseStr player={player} />
            <EarningsOrLosses player={player} />
        </>
    )
}

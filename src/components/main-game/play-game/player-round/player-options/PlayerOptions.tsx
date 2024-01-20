import ExitTable from "../ExitTable";
import DoubleDown from "./DoubleDown";
import Stand from "./Stand";
import DrawCards from "./DrawCards";
import Split from "./Split";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";

interface PlayerIconsProps {
    playerIndex: number;
    endRound: () => void;
}

export default function PlayerOptions({ playerIndex, endRound }: PlayerIconsProps) {
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const currPlayer = playersArr[playerIndex]

    let isCardRanksEqual = false
    if (currPlayer.hand.cards.length === 2) {
        const cardRanks = currPlayer.hand.cards.map(x => x.slice(0, 1))
        if (cardRanks[0] === cardRanks[1] && currPlayer.splitHand.cards.length === 0) {
            isCardRanksEqual = true
        }
    }
    console.log(isCardRanksEqual)
    return (
        <>
            <div className="current-options">
                <DoubleDown playerIndex={playerIndex} />
                {isCardRanksEqual &&
                    <Split playerIndex={playerIndex} />
                }
            </div>
            <Stand endRound={endRound} />
            <DrawCards playerIndex={playerIndex} />
            <ExitTable />
        </>
    )
}

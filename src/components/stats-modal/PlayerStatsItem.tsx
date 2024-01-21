import { PlayerInterface } from "../../models/PlayerProps"
import ExitTableIcon from "../main-game/play-game/exit-table-modal/ExitTableIcon";

interface PlayerStatsItemProps {
    player: PlayerInterface;
}

export default function PlayerStatsItem({ player }: PlayerStatsItemProps) {

    const { name, bank, roundsWon } = player

    return (
        <li>
            {name}: Current Bank: {`$${bank}`}: Total Rounds Won: {roundsWon}
            <ExitTableIcon currPlayer={player} />
        </li>
    )
}

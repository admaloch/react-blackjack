import { PlayerInterface } from "../../models/PlayerProps"
import ExitTableIcon from "../main-game/play-game/exit-table-modal/ExitTableIcon";

interface PlayerStatsItemProps {
    player: PlayerInterface;
    closeStatsModal: () => void;
}

export default function PlayerStatsItem({ player, closeStatsModal }: PlayerStatsItemProps) {

    const { name, bank, roundsWon } = player

    return (
        <li>
            <ExitTableIcon
             currPlayer={player} 
             closeStatsModal={closeStatsModal}
             />
            {name}: Current Bank: {`$${bank}`}: Total Rounds Won: {roundsWon}
        </li>
    )
}

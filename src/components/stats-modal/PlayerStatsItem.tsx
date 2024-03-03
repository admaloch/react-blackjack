import { PlayerInterface } from "../../models/PlayerProps"
import ExitTableIcon from "../main-game/play-game/exit-table-modal/ExitTableIcon";

interface PlayerStatsItemProps {
    player: PlayerInterface;
    closeStatsModal: () => void;
    openStatsModal: () => void;
}

export default function PlayerStatsItem({ player, closeStatsModal, openStatsModal}: PlayerStatsItemProps) {

    const { name, bank, roundsWon } = player

    return (
        <li>
            <ExitTableIcon
             currPlayer={player} 
             closeStatsModal={closeStatsModal}
             openStatsModal={openStatsModal}
             />
            {name}: Current Bank: {`$${bank}`}: Total Rounds Won: {roundsWon}
        </li>
    )
}

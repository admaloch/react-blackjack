import { PlayerInterface } from "../../models/PlayerProps"
import ExitTableIcon from "../main-game/play-game/exit-table-modal/ExitTableIcon";

interface PlayerStatsItemProps {
    player: PlayerInterface;
    closeModalHandler: () => void;
}

export default function PlayerStatsItem({ player, closeModalHandler }: PlayerStatsItemProps) {

    const { name, bank, roundsWon } = player

    return (
        <li>
            <ExitTableIcon
             currPlayer={player} 
             closeModalHandler={closeModalHandler}

             />
            {name}: Current Bank: {`$${bank}`}: Total Rounds Won: {roundsWon}
        </li>
    )
}

import { useSelector } from "react-redux";
import { PlayerInterface } from "../../models/PlayerProps"
import ExitTableIcon from "../main-game/play-game/exit-table-modal/ExitTableIcon";
import { RootState } from "../../store/store";

interface PlayerStatsItemProps {
    player: PlayerInterface;
    closeStatsModal: () => void;
}

export default function PlayerStatsItem({ player, closeStatsModal }: PlayerStatsItemProps) {
    const gameData = useSelector((state: RootState) => state.gameData);
    const { isBetRoundActive } = gameData
    const { name, bank, roundsWon } = player

    return (
        <li>
            {!isBetRoundActive &&
                <ExitTableIcon
                    currPlayer={player}
                    closeStatsModal={closeStatsModal}
                />
            }
            {name}: Current Bank: {`$${bank}`}: Total Rounds Won: {roundsWon}
        </li>
    )
}

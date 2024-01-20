import { PlayerInterface } from "../../models/PlayerProps"

interface PlayerStatsItemProps {
    player: PlayerInterface;
}

export default function PlayerStatsItem({ player }: PlayerStatsItemProps) {

    const { name, bank, roundsWon } = player
    
    return (
        <li>
            {name}: Current Bank: {`$${bank}`}: Total Rounds Won: {roundsWon}
        </li>
    )
}

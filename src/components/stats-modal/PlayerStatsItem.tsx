import {PlayerInterfaceProps } from "../../models/PlayerProps"

export default function PlayerStatsItem({ player }: PlayerInterfaceProps) {
    const { name, bank, roundsWon } = player

    return (
        <li>
            {name}: Bank: {`$${bank}`}: Rounds Won: {roundsWon}
        </li>
    )
}

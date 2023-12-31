
interface PlayerStatsItemProps {
    name: string;
    bank: number;
    roundsWon: number;
}

export default function PlayerStatsItem({ name, bank, roundsWon }: PlayerStatsItemProps) {

    return (
        <li>
            <h4>{name}: Current Bank: {`$${bank}`}: Total Rounds Won: {roundsWon}</h4>
        </li>
    )
}

import { PlayerProps } from '../table/end-round-table/main-hand-results/PlayerHand'

export default function BrokePlayer({ player }: PlayerProps) {
    return (
        <li>
            <h3>{player.name} ran out of money and has left the table</h3>
        </li>
    )
}

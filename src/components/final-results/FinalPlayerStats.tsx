import { PlayerInterface } from '../../models/PlayerProps'
interface FinalPlayerStatsProps {
    player: PlayerInterface;
}
export default function FinalPlayerStats({ player }: FinalPlayerStatsProps) {
    const { name, bank, roundsWon } = player

    const roundsWonStr = `Rounds won: ${roundsWon}`
    const currBankStr = `Bank: ${bank}`

    const winOrLoseStr = bank > 1000 ? "Won!" : "Lost"
    const winOrLoseClass = bank > 1000 ? "win-color" : "lose-color"

    const finalBankStr = bank > 1000
        ? <span>Total amount won: <span className='win-color'>${bank - 1000}</span> </span>
        : <span>Total amount lost: <span className='lose-color'>${1000 - bank}</span> </span>;
    return (
        <li>
            <h5 className={winOrLoseClass}>{name} {winOrLoseStr} </h5>
                <p>{roundsWonStr} - {currBankStr} - {finalBankStr}</p>
        </li>
    );
}

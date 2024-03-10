import { useSelector } from 'react-redux';
import { PlayerInterface } from '../../models/PlayerProps'
import { RootState } from '../../store/store';

interface FinalPlayerStatsProps {
    player: PlayerInterface;
}

export default function FinalPlayerStats({ player }: FinalPlayerStatsProps) {
    const { name, bank, roundsWon } = player
    const gameData = useSelector((state: RootState) => state.gameData);
    const { roundsPlayed } = gameData

    const winOrLoseStr = bank > 1000 ? "Won!" : "Lost"
    const winOrLoseClass = bank > 1000 ? "win-color" : "lose-color"


    const finalBankStr = bank > 1000
        ? <p>Total amount won: <span className='win-color'>${bank - 1000}</span> </p>
        : <p>Total amount lost: <span className='lose-color'>${1000 - bank}</span> </p>;

    return (
        <li>
            <h5 className={winOrLoseClass}>{name} {winOrLoseStr} </h5>
            <div className="end-results-items">
                <p>Rounds won: {roundsWon}</p>
                <p>Bank: ${bank}</p>
                {finalBankStr}
            </div>
        </li>
    );

}

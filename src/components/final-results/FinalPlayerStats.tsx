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

    const finalBankStr = bank > 1000
        ? `Total amount won: $${bank - 1000}`
        : `Total amount lost: $${1000 - bank}`

        // let winOrLoseStr:string = ''
        // if(roundsPlayed === 0) {
        //     winOrLoseStr = "House won"
        // } else if (roundsPlayed/2 === roundsWon) {
        //     winOrLoseStr = 'Tie'
        // }
    

    return (
        <li>
            <h3>{name} {winOrLoseStr}</h3>
            <p>Rounds won: {roundsWon}</p>
            <p>{finalBankStr}</p>
        
        </li>
    )
}

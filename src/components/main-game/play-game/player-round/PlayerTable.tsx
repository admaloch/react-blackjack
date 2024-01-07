import Cards from '../display-cards/Cards';
import './PlayerTable.css'
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import PlayerIcons from './PlayerIcons';

interface PlayerTableProps {
    playerIndex: number;
    isPlayerRoundComplete: boolean;

}

export default function PlayerTable({ playerIndex, isPlayerRoundComplete }: PlayerTableProps) {
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const currPlayer = playersArr[playerIndex]

    return (
        <div className="player-table">
            
            <PlayerIcons
                playerIndex={playerIndex}
            />

            <h4>{currPlayer.name}</h4>
            <div className="player-info">
                <h5>Current Bank: {currPlayer.bank}</h5>
                <h5>Current Bet: {currPlayer.currBet}</h5>
                <h5>Card sum {currPlayer.hand.cardSum}</h5>
            </div>


            <Cards
                cardUrlVals={currPlayer.hand.cardUrlVals}
            />

        </div>
    )
}

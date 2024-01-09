import Cards from '../display-cards/Cards';
import './PlayerTable.css'
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import PlayerOptions from './player-options/PlayerOptions';
import PlayerDetails from './PlayerDetails';

interface PlayerTableProps {
    playerIndex: number;
    endRound: () => void;
}

export default function PlayerTable({ playerIndex, endRound }: PlayerTableProps) {
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const currPlayer = playersArr[playerIndex]

    return (
        <div className="player-table">
            <PlayerOptions
                endRound={endRound}
                playerIndex={playerIndex}
            />
            <h4>{currPlayer.name}</h4>
            <PlayerDetails playerIndex={playerIndex} />
            <Cards cardUrlVals={currPlayer.hand.cardUrlVals} />
            {/* <ExitTable /> */}
        </div>
    )
}

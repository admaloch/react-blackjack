import DealerTable from './dealer-table/DealerTable'
import PlayerTable from './player-table/PlayerTable'
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import EndRoundTable from './end-round-table/EndRoundTable';

interface MainTableProps {
    playerIndex: number;
    makeCurrPlayerFinished: () => void;
}

export default function MainTable({ playerIndex, makeCurrPlayerFinished }: MainTableProps) {
    const { isPlayerRoundActive } = useSelector((state: RootState) => state.gameData);

    return (
        <div className="table">
            <DealerTable />
            {isPlayerRoundActive &&
                <PlayerTable
                    playerIndex={playerIndex}
                    makeCurrPlayerFinished={makeCurrPlayerFinished}
                />
            }
            {!isPlayerRoundActive && <EndRoundTable />}
        </div>
    )
}

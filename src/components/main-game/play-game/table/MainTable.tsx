import DealerTable from './dealer-table/DealerTable'
import PlayerTable from './player-table/PlayerTable'
import EndRoundPlayerResults from './end-round-table/EndRoundPlayerResults'
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';

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
            {!isPlayerRoundActive && <EndRoundPlayerResults />}
        </div>
    )
}

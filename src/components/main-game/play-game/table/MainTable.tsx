import DealerTable from './dealer-table/DealerTable'
import PlayerTable from './player-table/PlayerTable'
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import EndRoundTable from './end-round-table/EndRoundTable';
import { useEffect } from 'react';

interface MainTableProps {
    playerIndex: number;
    makeCurrPlayerFinished: () => void;
}

export default function MainTable({ playerIndex, makeCurrPlayerFinished }: MainTableProps) {
    const { isPlayerRoundActive } = useSelector((state: RootState) => state.gameData);
    const gameData = useSelector((state: RootState) => state.gameData);
    const dealerObj = useSelector((state: RootState) => state.dealerObj);




    // useEffect(() => {
    //     console.log('is dealer card revealed is', gameData.isDealerCardRevealed)
    // }, [gameData.isDealerCardRevealed])
    // useEffect(() => {
    //     console.log('is dealer drawing is', gameData.isDealerDrawing)
    // }, [gameData.isDealerDrawing])
    useEffect(() => {
        console.log('dealer cards', dealerObj.hand.cards)
    }, [dealerObj.hand.cards])

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

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

    const {
        isDealerRoundActive,
        isDealerCardRevealed,
        isDealerDrawing,
        isInsuranceRoundComplete,
        isMainResultsActive,
        isSplitResultsActive,
        isRoundActive, } = gameData


    useEffect(() => {
        console.log('isPlayerRoundActive is now', isPlayerRoundActive)
    }, [isPlayerRoundActive])

    useEffect(() => {
        console.log('isDealerRoundActive is now', isDealerRoundActive)
    }, [isDealerRoundActive])

    useEffect(() => {
        console.log('isDealerCardRevealed is now', isDealerCardRevealed)
    }, [isDealerCardRevealed])

    useEffect(() => {
        console.log('isDealerDrawing is now', isDealerDrawing)
    }, [isDealerDrawing])

    useEffect(() => {
        console.log('isInsuranceRoundComplete is now', isInsuranceRoundComplete)
    }, [isInsuranceRoundComplete])

    useEffect(() => {
        console.log('isMainResultsActive is now', isMainResultsActive)
    }, [isMainResultsActive])

    useEffect(() => {
        console.log('isSplitResultsActive is now', isSplitResultsActive)
    }, [isSplitResultsActive])

    useEffect(() => {
        console.log('isRoundActive is now', isRoundActive)
    }, [isRoundActive])



   


    return (
        <div className="table">

            <DealerTable />
            {isPlayerRoundActive &&
                <PlayerTable
                    playerIndex={playerIndex}
                    makeCurrPlayerFinished={makeCurrPlayerFinished}
                />
            }
            {!isPlayerRoundActive &&
                <EndRoundTable />
            }

        </div>
    )
}

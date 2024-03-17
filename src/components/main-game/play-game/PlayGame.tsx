import './PlayGame.css'
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useCallback, useState } from 'react';
import EndOfTurnResults from './end-of-turn-modal/EndOfTurnResults';
import { useDispatch } from "react-redux";
import ExitTable from './exit-table-modal/ExitTable';
import MainTable from './table/MainTable';
import { makeDoubleDownFalse } from '../../../store/player-arr/playersArrSlice';

export default function PlayGame() {
    const dispatch = useDispatch()
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const { isPlayerRoundActive } = useSelector((state: RootState) => state.gameData);
    const [currPlayerIndex, setCurrPlayerIndex] = useState(0);
    const [isCurrPlayerFinished, setIsCurrPlayerFinished] = useState(false)

    const makeCurrPlayerFinished = useCallback(() => setIsCurrPlayerFinished(true), []);
    const makeCurrPlayerNotFinished = useCallback(() => setIsCurrPlayerFinished(false), []);

    const changeToNextPlayer = () => {
        setCurrPlayerIndex((prevIndex) => (prevIndex + 1) % playersArr.length);
        dispatch(makeDoubleDownFalse(currPlayerIndex));
    }

    return (
        <div className='game-container play-round'>
            <MainTable
                playerIndex={currPlayerIndex}
                makeCurrPlayerFinished={makeCurrPlayerFinished}
            />
            {isPlayerRoundActive &&
                <EndOfTurnResults
                    playerIndex={currPlayerIndex}
                    isCurrPlayerFinished={isCurrPlayerFinished}
                    makeCurrPlayerNotFinished={makeCurrPlayerNotFinished}
                    changeToNextPlayer={changeToNextPlayer}
                    makeCurrPlayerFinished={makeCurrPlayerFinished}
                />
            }
            {playersArr.length !== 0 &&
                <ExitTable
                    playerIndex={currPlayerIndex}
                />
            }
        </div>
    );
}

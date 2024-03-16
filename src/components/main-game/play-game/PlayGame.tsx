import './PlayGame.css'
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useCallback, useEffect, useState } from 'react';

import EndOfTurnResults from './end-of-turn-modal/EndOfTurnResults';
import { useDispatch } from "react-redux";
import playersArrSlice, { updatePlayer } from '../../../store/player-arr/playersArrSlice';
import ExitTable from './exit-table-modal/ExitTable';

import MainTable from './table/MainTable';

export default function PlayGame() {

    const dispatch = useDispatch()
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const gameData = useSelector((state: RootState) => state.gameData);
    const { isPlayerRoundActive, isGameActive } = useSelector((state: RootState) => state.gameData);
    const [currPlayerIndex, setCurrPlayerIndex] = useState(0);
    const [isCurrPlayerFinished, setIsCurrPlayerFinished] = useState(false)

    const makeCurrPlayerFinished = useCallback(() => setIsCurrPlayerFinished(true), []);
    const makeCurrPlayerNotFinished = useCallback(() => setIsCurrPlayerFinished(false), []);

    const changeToNextPlayer = () => {
        setCurrPlayerIndex((prevIndex) => (prevIndex + 1) % playersArr.length);
        dispatch(updatePlayer({ ...playersArr[currPlayerIndex], isDoubleDown: false }));
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
            {/* {!isPlayerRoundActive && !isDealerRoundActive &&
                <EndOfRoundResults />
            } */}

            {playersArr.length !== 0 &&
                <ExitTable
                    playerIndex={currPlayerIndex}
                />
            }

        </div>
    );
}

import './PlayGame.css'
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import {  useState } from 'react';
import DealerTable from './dealer-table/DealerTable';
import PlayerTable from './player-table/PlayerTable';
import EndOfTurnResults from './end-of-turn-modal/EndOfTurnResults';
import { useDispatch } from "react-redux";
import { updatePlayer } from '../../../store/player-arr/playersArrSlice';
import ExitTable from './exit-table-modal/ExitTable';

import EndRoundPlayerResults from './end-round-results/EndRoundPlayerResults';

export default function PlayGame() {

    const dispatch = useDispatch()
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const { isPlayerRoundActive } = useSelector((state: RootState) => state.gameData);
    const [currPlayerIndex, setCurrPlayerIndex] = useState(0);
    const [isCurrPlayerFinished, setIsCurrPlayerFinished] = useState(false)

    const makeCurrPlayerFinished = () => setIsCurrPlayerFinished(true)

    const makeCurrPlayerNotFinished = () => setIsCurrPlayerFinished(false)

    const changeToNextPlayer = () => {
        setCurrPlayerIndex((prevIndex) => (prevIndex + 1) % playersArr.length);
        dispatch(updatePlayer({ ...playersArr[currPlayerIndex], isDoubleDown: false }));
    }



    return (
        <div className='game-container play-round'>
            <div className="table">
                <DealerTable />
                {isPlayerRoundActive &&
                    <PlayerTable
                        playerIndex={currPlayerIndex}
                        makeCurrPlayerFinished={makeCurrPlayerFinished}
                    />
                }
                {!isPlayerRoundActive &&
                    <EndRoundPlayerResults />
                }
            </div>
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

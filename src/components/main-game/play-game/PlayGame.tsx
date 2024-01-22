import './PlayGame.css'
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useEffect, useState } from 'react';
import DealerTable from './dealer-round/DealerTable';
import PlayerTable from './player-round/PlayerTable';
import EndOfTurnResults from './end-of-turn/EndOfTurnResults';
import { useDispatch } from "react-redux";
import { updatePlayer } from '../../../store/player-arr/playersArrSlice';
import ExitTable from './exit-table-modal/ExitTable';
import PlayerTableResults from './player-table-results/PlayerTableResults';

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

    useEffect(() => {
        console.log('curr player ', playersArr[currPlayerIndex])
    }, [playersArr, currPlayerIndex])

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
                    <PlayerTableResults />
                }

            </div>
            <EndOfTurnResults
                playerIndex={currPlayerIndex}
                isCurrPlayerFinished={isCurrPlayerFinished}
                makeCurrPlayerNotFinished={makeCurrPlayerNotFinished}
                changeToNextPlayer={changeToNextPlayer}
                makeCurrPlayerFinished={makeCurrPlayerFinished}
            />
            {playersArr.length !== 0 &&
                <ExitTable
                    playerIndex={currPlayerIndex}
                />
            }

        </div>
    );
}

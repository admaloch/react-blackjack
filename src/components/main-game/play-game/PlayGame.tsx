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

export default function PlayGame() {
    const dispatch = useDispatch()
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const [currPlayerIndex, setCurrPlayerIndex] = useState(0);
    const [isPlayerFinished, setisPlayerFinished] = useState(false)

    const makePlayerFinished = () => {
        setisPlayerFinished(true)
    }

    const makePlayerNotFinished = () => setisPlayerFinished(false)

    const changeToNextPlayer = () => {
        setCurrPlayerIndex((prevIndex) => (prevIndex + 1) % playersArr.length);
        dispatch(updatePlayer({ ...playersArr[currPlayerIndex], isDoubleDown: false }));
        console.log('change to next player ran')
    }



    useEffect(() => {
        console.log('curr player ', playersArr[currPlayerIndex])
    }, [playersArr, currPlayerIndex])

    return (
        <div className='game-container play-round'>
            <div className="table">
                <DealerTable />
                <PlayerTable
                    playerIndex={currPlayerIndex}
                    makePlayerFinished={makePlayerFinished}
                />
            </div>
            <EndOfTurnResults
                playerIndex={currPlayerIndex}
                isPlayerFinished={isPlayerFinished}
                makePlayerNotFinished={makePlayerNotFinished}
                changeToNextPlayer={changeToNextPlayer}
                makePlayerFinished={makePlayerFinished}
            />
            {playersArr.length !== 0 &&
                <ExitTable
                    playerIndex={currPlayerIndex}
                />
            }

        </div>
    );
}

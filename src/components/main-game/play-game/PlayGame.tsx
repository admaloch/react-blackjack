import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useEffect, useState } from 'react';
import DealerTable from './dealer-round/DealerTable';
import PlayerTable from './player-round/PlayerTable';
import EndOfTurnResults from './end-of-turn/EndOfTurnResults';
import './PlayGame.css'
// import useDrawCards from '../draw-cards-hook/useDrawCards';
import { useDispatch } from "react-redux";
import { updatePlayer } from '../../../store/player-arr/playersArrSlice';

export default function PlayGame() {
    const dispatch = useDispatch()
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const [currPlayerIndex, setCurrPlayerIndex] = useState(0);
    const [isPlayerFinished, setisPlayerFinished] = useState(false)

    const endRound = () => {
        console.log('end round ran')
        setisPlayerFinished(true)
    }
    const startRound = () => setisPlayerFinished(false)

    const changeToNextPlayer = () => {
        setCurrPlayerIndex((prevIndex) => (prevIndex + 1) % playersArr.length);
        dispatch(updatePlayer({ ...playersArr[currPlayerIndex], isDoubleDown: false }));

    }

    useEffect(() => {
        console.log('curr player data ', playersArr[currPlayerIndex])

    }, [playersArr, currPlayerIndex])



    return (
        <div className='game-container play-round'>
            <div className="table">
                <DealerTable />
                <PlayerTable
                    playerIndex={currPlayerIndex}
                    endRound={endRound}
                />
            </div>
            <EndOfTurnResults
                playerIndex={currPlayerIndex}
                isPlayerFinished={isPlayerFinished}
                startRound={startRound}
                changeToNextPlayer={changeToNextPlayer}
                endRound={endRound}
            />

        </div>
    );
}

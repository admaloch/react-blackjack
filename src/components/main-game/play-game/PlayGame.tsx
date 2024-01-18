import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import {  useState } from 'react';
import DealerTable from './dealer-round/DealerTable';
import PlayerTable from './player-round/PlayerTable';
import EndOfTurnResults from './end-of-turn/EndOfTurnResults';
import './PlayGame.css'
// import useDrawCards from '../draw-cards-hook/useDrawCards';

export default function PlayGame() {

    const playersArr = useSelector((state: RootState) => state.playersArr);
    const [currPlayerIndex, setCurrPlayerIndex] = useState(0);
    const [isPlayerFinished, setisPlayerFinished] = useState(false)

    const endRound = () => setisPlayerFinished(true)
    const startRound = () => setisPlayerFinished(false)

    const changeToNextPlayer = () => {
        setCurrPlayerIndex((prevIndex) => (prevIndex + 1) % playersArr.length);
    }

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

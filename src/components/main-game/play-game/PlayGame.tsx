import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import {  useState } from 'react';
import DealerTable from './dealer-round/DealerTable';
import PlayerTable from './player-round/PlayerTable';
import EndOfTurnModal from './end-turn-modal/EndOfTurnModal';
import './PlayGame.css'

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
            <EndOfTurnModal
                playerIndex={currPlayerIndex}
                isPlayerFinished={isPlayerFinished}
                startRound={startRound}
                changeToNextPlayer={changeToNextPlayer}
                endRound={endRound}
            />

        </div>
    );
}

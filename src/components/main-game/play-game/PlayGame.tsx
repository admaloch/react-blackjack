import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from "react-router";
// import { updatePlayer } from '../../../store/player-arr/playersArrSlice';
import { useEffect, useState } from 'react';
import DealerTable from './dealer-round/DealerTable';
import PlayerTable from './player-round/PlayerTable';
import './PlayGame.css'
// import { Hand, PlayerInterface } from '../../../models/PlayerProps';


export default function PlayGame() {

    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    const playersArr = useSelector((state: RootState) => state.playersArr);
    // const deck = useSelector((state: RootState) => state.deck);
    const [currPlayerIndex, setCurrPlayerIndex] = useState(0);
    const [isPlayerFinished, setIsPlayerFinished] = useState(false);


    useEffect(() => {
        if (playersArr[currPlayerIndex].currBet > playersArr[currPlayerIndex].minBet) {
            setIsPlayerFinished(true);
        } else {
            setIsPlayerFinished(false);
        }
    }, [playersArr, currPlayerIndex]);

    const nextPlayerHandler = () => {
        if (playersArr.length - 1 !== currPlayerIndex) {
            setCurrPlayerIndex((prevIndex) => (prevIndex + 1) % playersArr.length);
        } else {
            console.log('players done')
        }
    };





    return (
        <div className='game-container play-round'>
            <div className="table">
                <DealerTable />
                <PlayerTable />
                <div className="deal-cards">
                    <button className="game-btn">
                        Deal Cards
                    </button>
                </div>
            </div>
        </div>
    )
}

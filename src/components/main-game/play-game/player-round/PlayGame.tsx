import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router";
import { updatePlayer } from '../../../../store/player-arr/playersArrSlice';
import { useEffect, useState } from 'react';


export default function PlayGame() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const playersArr = useSelector((state: RootState) => state.playersArr);
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
                <div className="dealer-table"></div>
                <div className="player-table"></div>
            </div>
        </div>
    )
}

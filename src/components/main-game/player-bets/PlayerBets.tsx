import './PlayerBets.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updatePlayer } from '../../../store/player-arr/playersArrSlice';
import Tokens from './Tokens';
import PlaceBetBtn from './PlaceBetBtn';
import ResetBetsBtn from './ResetBetsBtn';
import { useNavigate } from "react-router";


export default function PlayerBets() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const playersArr = useSelector((state: RootState) => state.playersArr);
    const [currPlayerIndex, setCurrPlayerIndex] = useState(0);
    const [isBetValid, setIsBetValid] = useState(false);

    useEffect(() => {
        if (playersArr[currPlayerIndex].currBet > playersArr[currPlayerIndex].minBet) {
            setIsBetValid(true);
        } else {
            setIsBetValid(false);
        }
    }, [playersArr, currPlayerIndex]);

    const nextPlayerHandler = () => {
        dispatch(updatePlayer({ ...playersArr[currPlayerIndex], minBet: playersArr[currPlayerIndex].currBet }));
        if (playersArr.length - 1 !== currPlayerIndex) {
            setCurrPlayerIndex((prevIndex) => (prevIndex + 1) % playersArr.length);
        } else {
            navigate("/startRound");
        }
    };

    return (
        <div className='game-container place-bets'>
            {isBetValid && <ResetBetsBtn currPlayerIndex={currPlayerIndex} />}
            <h4>Place Bet: {playersArr[currPlayerIndex].name}</h4>
            <h5>Current Bank: {`$${playersArr[currPlayerIndex].bank}`}</h5>
            <h5>Min bit: {`$${playersArr[currPlayerIndex].minBet}`}</h5>
            <h5>Current Bet: {`$${playersArr[currPlayerIndex].currBet}`}</h5>
            <Tokens currPlayerIndex={currPlayerIndex} />
            <PlaceBetBtn isBetValid={isBetValid} nextPlayerHandler={nextPlayerHandler} />
        </div>
    );
}
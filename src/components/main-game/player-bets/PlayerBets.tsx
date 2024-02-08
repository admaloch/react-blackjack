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
import { updateGameObj } from '../../../store/game-data/GameDataSlice';


export default function PlayerBets() {

    const gameData = useSelector((state: RootState) => state.gameData);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const [currPlayerIndex, setCurrPlayerIndex] = useState(0);
    const [isBetValid, setIsBetValid] = useState(false);
    const player = playersArr[currPlayerIndex]

    useEffect(() => {
        if (player.currBet >= player.minBet) {
            setIsBetValid(true);
        } else {
            setIsBetValid(false);
        }
    }, [player]);

    const nextPlayerHandler = () => {
        dispatch(updatePlayer({ ...player, minBet: player.currBet }));
        if (playersArr.length - 1 !== currPlayerIndex) {
            setCurrPlayerIndex((prevIndex) => (prevIndex + 1) % playersArr.length);
        } else {
            dispatch(updateGameObj(
                {
                    ...gameData,
                    isBetRoundActive: false,
                    isPlayerRoundActive: true,
                    isRoundActive: true
                }
            ))
            navigate("/startRound");
        }
    };

    return (
        <div className='game-container place-bets'>
            <div className="bet-container">
                {isBetValid && <ResetBetsBtn currPlayerIndex={currPlayerIndex} />}
                <h4>Place Bet: {player.name}</h4>
                <h5>Current Bank: {`$${player.bank}`}</h5>
                <h5>Min bit: {`$${player.minBet}`}</h5>
                <h5>Current Bet: {`$${player.currBet}`}</h5>
                <Tokens currPlayerIndex={currPlayerIndex} />
                <PlaceBetBtn isBetValid={isBetValid} nextPlayerHandler={nextPlayerHandler} />
            </div>
        </div>
    );
}
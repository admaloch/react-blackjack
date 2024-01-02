import './PlayerBets.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useEffect, useState } from 'react';
import BetToken from './BetToken';
import { ResetIconWithPopper } from '../../UI/icons/ResetIconWithPopper';
import { useDispatch } from 'react-redux';
import { updatePlayer } from '../../../store/player-arr/playersArrSlice';
const defaultTokenOptions: number[] = [5, 10, 20, 50, 100, 500];

export default function PlayerBets() {
    const dispatch = useDispatch();
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const [currPlayerIndex, setCurrPlayerIndex] = useState(0);
    const [isBetValid, setIsBetValid] = useState(false);

    console.log(playersArr)

    const tokenClickHandler = (input: number) => {
        const updatedBet = playersArr[currPlayerIndex].currBet + input
        const updatedBank = playersArr[currPlayerIndex].bank - input
        dispatch(updatePlayer({ ...playersArr[currPlayerIndex], currBet: updatedBet, bank: updatedBank }));
    };





    useEffect(() => {
        playersArr.forEach(player => {
            // reset tokens as default then remove if needed
            const defaultPattern = defaultTokenOptions
            const currentSum = defaultPattern.reduce((sum, num) => sum + num, 0);
            let filteredArray = [];
            let remainingSum = player.bank;
            if (currentSum > player.bank) {
                for (const num of defaultPattern) {
                    if (remainingSum - num >= 0) {
                        filteredArray.push(num);
                        remainingSum -= num;
                    } else {
                        break;
                    }
                }
            } else {
             filteredArray = defaultPattern   
            }
            dispatch(updatePlayer({ ...player, currTokens: filteredArray }));
        })

    }, [playersArr]);

    useEffect(() => {
        if (playersArr[currPlayerIndex].currBet > playersArr[currPlayerIndex].minBet) {
            setIsBetValid(true);
        } else {
            setIsBetValid(false);
        }
    }, [playersArr, currPlayerIndex]);



    const resetHandler = () => {
        dispatch(updatePlayer({ ...playersArr[currPlayerIndex], bank: playersArr[currPlayerIndex].bank + playersArr[currPlayerIndex].currBet, currBet: 0 }));
    };

    const nextPlayerHandler = () => {
        // Move to the next player
        setCurrPlayerIndex((prevIndex) => (prevIndex + 1) % playersArr.length);
    };

    return (
        <div className='game-container place-bets'>
            <h4>Place Bet: {playersArr[currPlayerIndex].name}</h4>
            <h5>Current Bank: {`$${playersArr[currPlayerIndex].bank}`}</h5>
            <h5>Min bit: {`$${playersArr[currPlayerIndex].minBet}`}</h5>
            <h5>Current Bet: {`$${playersArr[currPlayerIndex].currBet}`}</h5>
            <div className="tokens-container">
                {playersArr[currPlayerIndex].currTokens
                    .map((item) => (
                        <BetToken key={item} number={item} tokenClickHandler={tokenClickHandler} />
                    ))}
            </div>
            <div className="btn-container">
                <button className={isBetValid ? 'game-btn' : 'game-btn disabled'} onClick={nextPlayerHandler}>
                    Place Bet
                </button>
                <div onClick={resetHandler}>
                    {isBetValid && <ResetIconWithPopper placement='right' />}
                </div>
            </div>
        </div>
    );
}

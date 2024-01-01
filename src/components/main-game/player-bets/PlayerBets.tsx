import './PlayerBets.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useEffect, useState } from 'react';
import { emptyPlayerItem } from '../../../models/PlayerProps';
import BetToken from './BetToken';
import { ResetIconWithPopper } from '../../UI/icons/ResetIconWithPopper';

const defaultTokenOptions: number[] = [5, 10, 20, 50, 100, 500];

export default function PlayerBets() {
    const playersArr = useSelector((state: RootState) => state.playersArr);

    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
    const [isBetValid, setIsBetValid] = useState(false);
    const [tokenOptions, setTokenOptions] = useState(defaultTokenOptions);

    const tokenClickHandler = (input: number) => {
        setCurrPlayer((oldPlayer) => {
            return { ...oldPlayer, bet: oldPlayer.bet + input, bank: oldPlayer.bank - input };
        });
    };

    useEffect(() => {
        setTokenOptions((oldTokens) => {
            return oldTokens.filter((token) => token <= playersArr[currentPlayerIndex].bank);
        });

        if (playersArr[currentPlayerIndex].bet > playersArr[currentPlayerIndex].minBet) {
            setIsBetValid(true);
        } else {
            setIsBetValid(false);
        }
    }, [currentPlayerIndex, playersArr]);

    const resetHandler = () => {
        setTokenOptions(defaultTokenOptions);
        setCurrPlayer((oldPlayer) => {
            return { ...oldPlayer, bank: oldPlayer.bank + oldPlayer.bet, bet: 0 };
        });
    };

    const nextPlayerHandler = () => {
        // Move to the next player
        setCurrentPlayerIndex((prevIndex) => (prevIndex + 1) % playersArr.length);
    };

    return (
        <div className='game-container place-bets'>
            <h4>Place Bet: {playersArr[currentPlayerIndex].name}</h4>
            <h5>Current Bank: {`$${playersArr[currentPlayerIndex].bank}`}</h5>
            <h5>Min bit: {`$${playersArr[currentPlayerIndex].minBet}`}</h5>
            <h5>Current Bet: {`$${playersArr[currentPlayerIndex].bet}`}</h5>
            <div className="tokens-container">
                {tokenOptions
                    .filter((item) => item <= playersArr[currentPlayerIndex].bank)
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

import './PlayerBets.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useState } from 'react';
import Tokens from './Tokens';
import PlaceBetBtn from './PlaceBetBtn';
import ResetBetsBtn from './ResetBetsBtn';

import ShuffleDeckModal from '../../shuffle-modal/ShuffleDeckModal';
import backgroundImage from '../../../assets/background-img.jpg';

const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    height: '100vh', // or any height you want
    width: '100vw',  // or any width you want
    backgroundRepeat: 'no-repeat',
    margin: 0,
    padding: 0,
};

export default function PlayerBets() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currPlayerIndex, setCurrPlayerIndex] = useState(0);
    const closeModal = () => setIsModalOpen(false)
    const moveToNextPlayer = () => {
        setCurrPlayerIndex((prevIndex) => (prevIndex + 1) % playersArr.length);
    }

    const playersArr = useSelector((state: RootState) => state.playersArr);
    const player = playersArr[currPlayerIndex]

    return (
        <div style={divStyle} className='photo-container'>
            <div className='game-container place-bets'>
                <div className="bet-container">
                    <ResetBetsBtn currPlayerIndex={currPlayerIndex} />
                    <h4>Place Bet: {player.name}</h4>
                    <h5>Bank: {`$${player.bank + player.currBet}`}</h5>
                    <h5>Min bit: {`$${player.minBet}`}</h5>
                    <h5>Current Bet: {`$${player.currBet}`}</h5>
                    <h5>Bank after bet: {`$${player.bank}`}</h5>
                    <Tokens
                        currPlayerIndex={currPlayerIndex}
                    />
                    <PlaceBetBtn
                        currPlayerIndex={currPlayerIndex}

                        moveToNextPlayer={moveToNextPlayer}
                        setIsModalOpen={setIsModalOpen}
                    />
                    <ShuffleDeckModal
                        closeModal={closeModal}
                        open={isModalOpen}
                    />
                </div>
            </div>
        </div>
    );
}
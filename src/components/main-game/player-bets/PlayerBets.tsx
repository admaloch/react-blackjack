import './PlayerBets.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useState } from 'react';
import Tokens from './Tokens';
import PlaceBetBtn from './PlaceBetBtn';
import ResetBetsBtn from './ResetBetsBtn';
import ShuffleDeckModal from '../../shuffle-modal/ShuffleDeckModal';
import BGSection from '../../UI/sections/BGSection';
import Wrapper from '../../UI/wrapper/Wrapper';

export default function PlayerBets() {

    const [currPlayerIndex, setCurrPlayerIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const playersArr = useSelector((state: RootState) => state.playersArr);
    if(!playersArr.length) return
    const player = playersArr[currPlayerIndex]
    const closeModal = () => setIsModalOpen(false)
    const moveToNextPlayer = () => {
        setCurrPlayerIndex((prevIndex) => (prevIndex + 1) % playersArr.length);
    }

    return (
        <BGSection bgClass="token-image">

            <Wrapper>
                <ResetBetsBtn currPlayerIndex={currPlayerIndex} />
                <h3>Place Bet: {player.name}</h3>
                <p>Bank: {`$${player.bank + player.currBet}`}</p>
                <p>Min bit: {`$${player.minBet}`}</p>
                <p>Current Bet: {`$${player.currBet}`}</p>
                <p>Bank after bet: {`$${player.bank}`}</p>
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
            </Wrapper>
        </BGSection>
    );
}
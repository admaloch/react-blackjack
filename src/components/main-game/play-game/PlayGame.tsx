import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router";
import { updatePlayer } from '../../../store/player-arr/playersArrSlice';
import { Hand } from '../../../models/PlayerProps';
import { useEffect, useState } from 'react';
import DealerTable from './dealer-round/DealerTable';
import PlayerTable from './player-round/PlayerTable';
import './PlayGame.css'
import { Hand, PlayerInterface } from '../../../models/PlayerProps';


export default function PlayGame() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const deck = useSelector((state: RootState) => state.deck);
    const [currPlayerIndex, setCurrPlayerIndex] = useState(0);
    const [isPlayerFinished, setIsPlayerFinished] = useState(false);

    const deck = useSelector((state: RootState) => state.deck);

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

    const drawCards = (playerHand:Hand, numCards = 1) => {
        if (!playerHand) {
            return null;
        }
        let updatedPlayerHand = { ...playerHand }
        for (let i = 0; i < numCards; i++) {
            updatedPlayerHand = drawCard(updatedPlayerHand);
        }
        if (updatedPlayerHand.cardValues.includes(11)) {
            console.log('there is an ace')
            updatedPlayerHand = changeAceVal(updatedPlayerHand);
        }
        return updatedPlayerHand;
    };

    const drawCard = (handInput:Hand) => {
        const handWithNewCards = { ...handInput };
        const suits = ['♦', '♣', '♥', '♠'];
        while (true) {
            const suitIndex = Math.floor(Math.random() * 4);
            const cardIndex = Math.floor(Math.random() * 14);
            const numCardLeft = deck[cardIndex].suits[suitIndex];
            if (numCardLeft > 0) {
                const newCard = `${deck[cardIndex].card}${suits[suitIndex]}`;
                handWithNewCards.cards.push(newCard);
                const newCardVal = deck[cardIndex].value;
                handWithNewCards.cardValues.push(newCardVal);
                handWithNewCards.cardSum = handWithNewCards.cardValues.reduce((a, b) => a + b);
                break;
            }
        }
        return handWithNewCards;
    };

    const changeAceVal = (handInput:Hand) => {
        const handWithAlteredAceVals = { ...handInput };
        while (handWithAlteredAceVals.cardSum > 21) {
            const lastIndex = handWithAlteredAceVals.cardValues.lastIndexOf(11);
            if (lastIndex === -1) break;
            handWithAlteredAceVals.cardValues[lastIndex] = 1;
            handWithAlteredAceVals.cardSum = handWithAlteredAceVals.cardValues.reduce((a, b) => a + b);
        }
        return handWithAlteredAceVals;
    };



    return (
        <div className='game-container play-round'>
            <div className="table">
                <DealerTable />
                <PlayerTable />
            </div>
        </div>
    )
}

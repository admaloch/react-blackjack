import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router";
import { updatePlayer } from '../../../store/player-arr/playersArrSlice';
import { useEffect, useState } from 'react';
import DealerTable from './dealer-round/DealerTable';
import PlayerTable from './player-round/PlayerTable';
import './PlayGame.css'
import { PlayerInterface } from '../../../models/PlayerProps';


export default function PlayGame() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const deck = useSelector((state: RootState) => state.deck);
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

    const genRandomCard = (nameInput:string, numCards = 1) => {
        const player = playersArr.find(x => x.name === nameInput);
        if (!player) {
            return null;
        }
        const suits = ['♦', '♣', '♥', '♠'];
        const updatedHand = { ...player.hand };

        for (let i = 0; i < numCards; i++) {
            while (true) {
                const suitIndex = Math.floor(Math.random() * 4);
                const cardIndex = Math.floor(Math.random() * 14);
                const numCardLeft = deck[cardIndex].suits[suitIndex];
                if (numCardLeft > 0) {
                    const newCard = `${deck[cardIndex].card}${suits[suitIndex]}`;
                    updatedHand.cards.push(newCard);
                    const newCardVal = deck[cardIndex].value;
                    updatedHand.cardValues.push(newCardVal);
                    updatedHand.cardSum = updatedHand.cardValues.reduce((a, b) => a + b);
                    break;
                }
            }
            if (updatedHand.cardValues.includes(11)) {
                console.log('there is an ace');
                const updatedPlayer = changeAceVal(player);
                return updatedPlayer;
            }
        }

        return player;
    };


    const changeAceVal = (playerObj: PlayerInterface) => {
        const updatedPlayer = { ...playerObj }; // Use spread to create a shallow copy
        const { cardValues } = updatedPlayer.hand;
        while (updatedPlayer.hand.cardSum > 21) {
            const lastIndex = cardValues.lastIndexOf(11);
            if (lastIndex === -1) break; // No more aces
            cardValues[lastIndex] = 1;
            updatedPlayer.hand.cardSum = cardValues.reduce((a, b) => a + b);
        }
        return updatedPlayer;
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

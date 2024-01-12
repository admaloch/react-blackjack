import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useDispatch } from 'react-redux';
import { updatePlayer } from '../../../store/player-arr/playersArrSlice';
import { updateDealerHand } from '../../../store/dealer-obj/dealerObjSlice';
import { useEffect, useState } from 'react';
import DealerTable from './dealer-round/DealerTable';
import PlayerTable from './player-round/PlayerTable';
import EndOfTurnModal from './end-turn-modal/EndOfTurnModal';
import './PlayGame.css'
import drawCards from '../draw-cards-hook/drawCards';
import playerDraw from '../draw-cards-hook/playerDraw';
import useplayerDraw from '../draw-cards-hook/useDrawCards';
import { delay } from '../../../utils/Utility';

export default function PlayGame() {
    const dispatch = useDispatch();
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const dealerObj = useSelector((state: RootState) => state.dealerObj);
    const deck = useSelector((state: RootState) => state.deck);

    const [currPlayerIndex, setCurrPlayerIndex] = useState(0);
    const [isPlayerFinished, setisPlayerFinished] = useState(false)
    const playerDraw = useplayerDraw('player', currPlayerIndex);
    const endRound = () => setisPlayerFinished(true)
    const startRound = () => setisPlayerFinished(false)

    // useEffect(() => {
    //     const initialDraw = async () => {
    //         // if (currPlayerIndex === 0) {
    //         //     const newDealerHand = drawCards(dealerObj.hand, deck, 2);
    //         //     dispatch(updateDealerHand(newDealerHand));
    //         // }

    //         if (playersArr[currPlayerIndex].hand.cards.length < 2) {
    //             await delay(1000);
    //             playerDraw();
    //             await delay(1000);
    //             playerDraw();
    //         }
    //     };

    //     initialDraw();
    // }, [playersArr]);




    const initialDraw = async (time) => {
        await delay(time);
        playerDraw();
    }


    // if (playersArr[currPlayerIndex].hand.cards.length === 0) {
    //     initialDraw(1000)
    // }

    // if (playersArr[currPlayerIndex].hand.cards.length === 1) {
    //     initialDraw(2000)

    // }


    useEffect(() => {
        console.log(playersArr[currPlayerIndex].hand.cards)
    }, [playersArr])


    const changeToNextPlayer = () => {
        setCurrPlayerIndex((prevIndex) => (prevIndex + 1) % playersArr.length);
    }





    return (
        <div className='game-container play-round'>
            <div className="table">
                <DealerTable />
                <PlayerTable
                    playerIndex={currPlayerIndex}
                    endRound={endRound}
                />
                <button onClick={playerDraw}>test function</button>
            </div>
            <EndOfTurnModal
                playerIndex={currPlayerIndex}
                isPlayerFinished={isPlayerFinished}
                startRound={startRound}
                changeToNextPlayer={changeToNextPlayer}
                endRound={endRound}
            />

        </div>
    );
}

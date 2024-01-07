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


export default function PlayGame() {
    const dispatch = useDispatch();
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const dealerObj = useSelector((state: RootState) => state.dealerObj);
    const deck = useSelector((state: RootState) => state.deck);
    const [currPlayerIndex, setCurrPlayerIndex] = useState(0);
    const [isPlayerFinished, setisPlayerFinished] = useState(false)

    const endRound = () => setisPlayerFinished(true)
    const startRound = () => setisPlayerFinished(false)





    useEffect(() => {
        if (currPlayerIndex === 0) {
            const newDealerHand = drawCards(dealerObj.hand, deck, 2);
            dispatch(updateDealerHand(newDealerHand));
        }
        const newPlayerHand = drawCards(playersArr[currPlayerIndex].hand, deck, 2);
        dispatch(updatePlayer({ ...playersArr[currPlayerIndex], hand: newPlayerHand }));
    }, [currPlayerIndex]);

    const nextPlayerHandler = () => {
        if (playersArr.length - 1 !== currPlayerIndex) {
            setCurrPlayerIndex((prevIndex) => (prevIndex + 1) % playersArr.length);
        } else {
            console.log('Dealers turn')
        }
    };

    return (
        <div className='game-container play-round'>
            <div className="table">
                <DealerTable
                    isPlayerFinished={isPlayerFinished}
                />
                <PlayerTable
                    playerIndex={currPlayerIndex}
                    isPlayerFinished={isPlayerFinished}
                    endRound={endRound}
                />
            </div>
            <EndOfTurnModal
                playerIndex={currPlayerIndex}
                isPlayerFinished={isPlayerFinished}
                startRound={startRound}
                nextPlayerHandler={nextPlayerHandler}
            />
        </div>
    );
}

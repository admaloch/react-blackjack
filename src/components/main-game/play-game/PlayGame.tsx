import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router";
import { updatePlayer } from '../../../store/player-arr/playersArrSlice';
import { updateDealerHand } from '../../../store/dealer-obj/dealerObjSlice';
import { useEffect, useState } from 'react';
import DealerTable from './dealer-round/DealerTable';
import PlayerTable from './player-round/PlayerTable';
import EndOfTurnModal from './end-turn-modal/EndOfTurnModal';
import './PlayGame.css'
// import { Hand, PlayerInterface } from '../../../models/PlayerProps';
// import useDrawCards from '../draw-cards-hook/useDrawCards';
import drawCards from '../draw-cards-hook/drawCards';
import useDrawCards from '../draw-cards-hook/useDrawCards';

// ... (import statements)



export default function PlayGame() {
    const dispatch = useDispatch();
    const playersArr = useSelector((state: RootState) => state.playersArr);
    const dealerObj = useSelector((state: RootState) => state.dealerObj);
    const deck = useSelector((state: RootState) => state.deck);
    const [currPlayerIndex, setCurrPlayerIndex] = useState(0);
    const [isPlayerRoundComplete, setIsPlayerRoundComplete] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)



    // Use the custom hook directly in the component
    // const newDealerHand = useDrawCards(dealerObj.hand, 2);
    // const newPlayerHand = useDrawCards(playersArr[currPlayerIndex].hand, 2);



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
            setIsPlayerRoundComplete(true)
        }
    };

    return (
        <div className='game-container play-round'>
            <div className="table">
                <DealerTable
                    isPlayerRoundComplete={isPlayerRoundComplete}
                />
                <PlayerTable
                    playerIndex={currPlayerIndex}
                    isPlayerRoundComplete={isPlayerRoundComplete}
                />
            </div>
            <EndOfTurnModal
            playerIndex={currPlayerIndex}
            />
        </div>
    );
}

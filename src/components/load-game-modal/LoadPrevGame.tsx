
import { useNavigate } from 'react-router';
import { ModalContentProps } from '../../models/ModalProps';
import Modal from '../UI/modal/Modal';
import './LoadPrevGame.css'
import { useDispatch } from 'react-redux';
import { resetDealer } from '../../store/dealer-obj/dealerObjSlice';
import { resetDeck } from '../../store/deck/deckSlice';
import { resetPlayersArr } from '../../store/player-arr/PlayersArrSlice';
import { resetInactivePlayers } from '../../store/inactive-players/InactivePlayersSlice';
import { returnToPrevGame } from '../../store/game-data/GameDataSlice';


export default function LoadPrevGame({ closeModal, open }: ModalContentProps) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // const closeShuffleModalHandler = async () => {
    //     closeModal()
    //     dispatch(beginPlayerRound())
    //     navigate("/startRound");
    // }

    const yesClickHandler = () => {
        navigate("/placeBets")
        dispatch(returnToPrevGame())
    }

    const noClickHandler = () => {
        closeModal()
        dispatch(resetDealer())
        dispatch(resetDeck())
        dispatch(resetPlayersArr())
        dispatch(resetInactivePlayers())
    }

    return (
        <Modal
            closeModal={closeModal}
            open={open}
            isTimer={false}
            isCloseOnClick={false}
        >
            <div className="prev-game-modal">
                <h2>There is a previous game. Would you like to continue?</h2>
                <div className="btn-container">
                    <button onClick={yesClickHandler} className="game-btn">Yes</button>
                    <button onClick={noClickHandler} className="game-btn">No</button>
                </div>
            </div>
        </Modal>
    )
}

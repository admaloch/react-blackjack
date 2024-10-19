
import { useNavigate } from 'react-router';
import { ModalContentProps } from '../../models/ModalProps';
import Modal from '../UI/modal/Modal';
import './LoadPrevGame.css'
import { useDispatch } from 'react-redux';
import { resetDealer } from '../../store/dealer-obj/dealerObjSlice';
import { resetDeck } from '../../store/deck/deckSlice';
import { resetPlayersArr, updateAllPlayers } from '../../store/player-arr/PlayersArrSlice';
import { resetInactivePlayers } from '../../store/inactive-players/InactivePlayersSlice';
import { returnToPrevGame } from '../../store/game-data/GameDataSlice';
import { deleteStoreData } from '../../store/actions/storeActions';
import { AppDispatch } from '../../store/store';


export default function LoadPrevGame({ closeModal, open }: ModalContentProps) {
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();


    const yesClickHandler = () => {
        dispatch(returnToPrevGame())
        dispatch(updateAllPlayers())
        dispatch(resetDealer())
        navigate("/placeBets")
    }

    const noClickHandler = () => {
        dispatch(deleteStoreData());
        dispatch(resetDealer())
        dispatch(resetDeck())
        dispatch(resetPlayersArr())
        dispatch(resetInactivePlayers())
        closeModal()
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
